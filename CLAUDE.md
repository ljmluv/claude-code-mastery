# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개발자 웹 이력서(1페이지) 프로젝트. HTML/CSS/JavaScript/TailwindCSS로 제작하는 정적 웹사이트이며, 빌드 도구나 패키지 매니저 없이 순수 HTML 파일을 브라우저에서 직접 여는 구조를 목표로 한다. 전체 개발 단계와 콘텐츠 구성은 `ROADMAP.md`에 정의되어 있으므로, 작업 전 반드시 참고할 것.

현재 저장소에는 코드가 아직 작성되지 않은 초기 단계이며 (`index.html`은 빈 파일), `ROADMAP.md`의 단계별 순서(기본 마크업 → Tailwind 스타일링 → JS 인터랙션 → 콘텐츠 채우기 → 배포)를 따라 진행한다.

## 기술 스택 및 실행 방법

- HTML5 / CSS3 / Vanilla JavaScript / Tailwind CSS
- Tailwind는 CDN 방식(`<script src="https://cdn.tailwindcss.com"></script>`)을 사용하므로 별도의 빌드/컴파일 명령이 없다.
- 별도의 패키지 매니저(npm 등), 린트, 테스트 설정이 없다. 브라우저에서 `index.html`을 직접 열어 결과를 확인한다.

## 예정된 파일 구조 (ROADMAP.md 기준)

```
/
├── index.html
├── css/style.css     # Tailwind 커스텀 스타일
├── js/main.js         # 다크모드 토글, 스크롤 애니메이션 등
└── assets/            # 이미지, PDF 이력서
```

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)
