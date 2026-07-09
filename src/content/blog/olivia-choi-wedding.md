---
title: "Olivia Choi Photography - Premium Wedding Portfolio"
description: "시카고 프리미엄 웨딩 사진작가 Olivia Choi의 초고속 포트폴리오 웹사이트 및 AI 자동 마케팅 엔진 구축 빌드 로그"
pubDate: 2026-07-09
category: "Build Log"
tags: ["Astro", "Firebase", "Local SEO", "Chicago Wedding", "Photography"]
status: "in-progress"
client: "Olivia Choi Photography"
location: "Chicago, IL"
heroImage: "/images/olivia-wedding-hero.png"
---

# Olivia Choi Photography: 시카고 웨딩 사진작가를 위한 AI 기반 초고속 웹 빌드

시카고의 로컬 비즈니스 생태계에서 온라인 입지를 다지는 것은 매우 중요합니다. 이번 프로젝트는 시카고 다운타운, 링컨 파크, 웨스트 루프 등지에서 활동하는 프리미엄 웨딩 사진작가 **Olivia Choi**의 브랜드 가치를 높이고, 현장에서의 스토리를 마케팅 자산으로 자동 전환하는 시스템 구축 과정입니다.

---

## 1. Plan (전략 및 'Why')

### [약속] 3일 만에 완성되는 고성능 포트폴리오
올리비아의 고해상도 이미지를 훼손하지 않으면서도, 단 3일 만에 구글 검색 최적화가 왼료된 포트폴리오 웹사이트를 구축합니다. 또한, 촬영이 끝날 때마다 복잡한 글쓰기 없이 촬영 기록만으로 블로그 콘텐츠를 자동 생산하는 엔진을 제공합니다.

### [문제] 아름다운 사진들이 로컬 폴더에 잠들어 있는 현실
바쁜 시즌 중에는 매주 진행되는 촬영 스케줄로 인해 사이트 업데이트를 할 시간이 없었습니다. 대형 업체를 통한 사이트 구축은 너무 비싸고($5,000 이상), 템플릿 빌더는 속도가 느려 시카고 로컬 검색 노출에 불리했습니다.

### [해법] Astro.build 초고속 프레임워크 + AI 마케팅 파이프라인
JS 로딩을 최소화하는 Astro 아키텍처로 구글 Core Web Vitals 100점을 목표로 빌드합니다. 또한, 올리비아가 작성한 간단한 현장 노트(촬영 장소, 컨셉, 분위기)를 입력하면 AI가 로컬 SEO 최적화형 블로그 글로 즉시 전환하는 시스템을 가동합니다.

---

## 2. Context (배경 및 시카고 로컬 시장 데이터)

- **타겟 키워드**: `Chicago Wedding Photographer`, `Lincoln Park Wedding Photo`, `Chicago Luxury Wedding`
- **로컬 맥락**: 시카고 지역은 계절성이 뚜렷하여 봄-가을 야외 웨딩 및 실내 웨딩홀 촬영 수요가 집중됩니다. 구글 지도와 로컬 검색 노출이 예약율의 70% 이상을 결정합니다.
- **디자인 방향**: 시카고 다운타운의 세련된 건축 스타일에서 영감을 얻은 고대비 미니멀리즘, 넓은 여백, 그리고 이 일렉트릭 블루 계열의 모던 포인트 테마를 결합합니다.

---

## 3. Todo (기술 실행 및 'How')

### 완료된 작업
- [x] 프로젝트 기획 및 로컬 SEO 키워드 추출
- [x] 모던 라이트 디자인(Bright Light) 테마 컬러 토큰 정의
- [x] 고해상도 이미지 최적화를 위한 Astro Image 파이프라인 구성

### 진행 중인 작업
- [ ] 반응형 갤러리 및 로컬 매핑 컴포넌트 개발
- [ ] Firebase Hosting 배포 파이프라인 및 도메인 연결
- [ ] Gemini API 연동을 통한 현장 로그 자동 변환 테스트

---

## 💡 AI Operator의 한마디 (Insight)
올리비아 작가님의 카메라는 최고의 스토리를 담아냅니다. 저희는 그 스토리가 시카고 로컬 예비 부부들의 화면에 가장 빠르게, 그리고 가장 아름답게 노출되도록 돕습니다. Astro의 초고속 스피드와 AI 콘텐츠 엔진의 시너지를 기대하세요.
