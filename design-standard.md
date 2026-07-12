# DALO Design Standard Template
## Benchmarked from: Josh W. Comeau (joshwcomeau.com)
### Last Updated: 2026-07-10

## 1. ?? ??? HSL-based

Primary:        hsl(240deg 95% 62%)
Primary Hover:  hsl(240deg 95% 55%)
Primary Light:  hsl(220deg 90% 96%)
Text:           hsl(222deg 22% 5%)
Text Muted:     hsl(225deg 12% 44%)
Border:         hsl(220deg 16% 92%)
Cloud 300:      hsl(200deg 60% 94%)
Cloud 500:      hsl(200deg 55% 88%)

Shadow card:    0 2px 12px hsl(225deg 25% 10% / 0.04)
Shadow hover:   0 20px 48px hsl(225deg 80% 55% / 0.09)
Ease spring:    cubic-bezier(0.16, 1, 0.3, 1)

## 2. Josh Triple Arrow Pattern (BuildLogCard)
- Full-card overlay link (z-index:1) + body z-index:2
- 4 SVG paths, opacity 0 default, staggered on hover
- Delays: 0ms / 75ms / 150ms / 225ms

## 3. Scroll Stagger (IntersectionObserver)
- .reveal class: opacity:0, translateY(32px) default
- .visible triggers revealUp animation
- .reveal-d1 through .reveal-d6 for 80ms stagger steps

## 4. Category Tag (bubble scale)
- hover: scale(1.05) + background + border-color
- active: primary bg + white text
- transition: 250ms spring

## 5. Wave Footer
- SVG wave: 2 layered paths, cloud-300 + cloud-500
- FloatBob: translateY 0 to -8px at 3s ease-in-out infinite

## 6. Typography
- h1: 800 weight, -0.04em tracking, 1.1 line-height
- h3 card: 1.05rem, 800, -0.02em tracking
- body: 0.82-0.9rem, 1.65 line-height
- tags: 0.6rem, 700, uppercase, 0.05em spacing
- antialiased: -webkit-font-smoothing: antialiased

## 7. Applied Checklist
- HSL CSS token system in ControlTowerLayout.astro
- BuildLogCard triple arrow hover (BuildLogCard.astro)
- Scroll IntersectionObserver stagger (layout)
- Category tag bubble scale (global .category-tag)
- Josh wave SVG footer + floatBob mascot (layout)
- Astro ClientRouter page transitions
- fadeInUp entry animation (main wrapper)
- Spring easing --ease-spring throughout
- hover-lift utility class
- Antialiasing globally applied
