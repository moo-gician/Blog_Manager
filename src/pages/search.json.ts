import { getCollection } from 'astro:content';
import db from '../data/db.json';

export async function GET() {
  const postsCollection = await getCollection('blog');
  const dbPosts = db.posts;

  const allPosts = [
    ...postsCollection.map(p => ({
      id: p.id,
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      category: p.data.category
    })),
    ...dbPosts.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      tags: p.tags,
      category: p.category
    }))
  ];

  // Remove duplicates by ID
  const seen = new Set();
  const uniquePosts = allPosts.filter(p => {
    const duplicate = seen.has(p.id);
    seen.add(p.id);
    return !duplicate;
  });

  return new Response(JSON.stringify(uniquePosts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
