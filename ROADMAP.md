# 개발자 웹 이력서 ROADMAP

## 목표
HTML, CSS, JavaScript, TailwindCSS로 구성된 반응형 개발자 웹 이력서(1페이지) 제작

## 기술 스택
- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (CDN 또는 빌드 방식)

## 프로젝트 구조 (예시)
```
/
├── index.html
├── css/
│   └── style.css      # Tailwind 커스텀 스타일 (필요 시)
├── js/
│   └── main.js         # 다크모드 토글, 스크롤 애니메이션 등
├── assets/
│   ├── images/          # 프로필 사진, 아이콘
│   └── resume.pdf        # 다운로드용 PDF 이력서 (선택)
└── ROADMAP.md
```

## 이력서 콘텐츠 구성 (일반적인 항목)
1. **헤더 / 프로필**
   - 이름, 직무(예: Frontend Developer), 한 줄 소개
   - 프로필 사진 (선택)
   - 연락처 아이콘 (이메일, GitHub, LinkedIn, Blog)

2. **자기소개 (About)**
   - 3~4줄 정도의 간단한 소개 문구

3. **기술 스택 (Skills)**
   - HTML, CSS, JavaScript, TailwindCSS 등 뱃지/아이콘 형태로 표시

4. **경력 / 프로젝트 (Experience / Projects)**
   - 프로젝트명, 기간, 간단한 설명, 사용 기술
   - 카드 형태 또는 타임라인 형태

5. **학력 (Education)**
   - 학교명, 전공, 기간

6. **연락처 / Footer**
   - 이메일, GitHub, LinkedIn 링크
   - (선택) 이력서 PDF 다운로드 버튼

## 개발 단계

### 1단계 — 기본 마크업 ✅
- [x] `index.html` 기본 골격 작성 (시맨틱 태그: header, main, section, footer)
- [x] Tailwind CDN 연결 (`<script src="https://cdn.tailwindcss.com"></script>`)
- [x] 각 섹션별 뼈대 마크업 (헤더, 소개, 스킬, 프로젝트, 학력, 소셜, 푸터)

### 2단계 — 스타일링 (Tailwind) ✅
- [x] 레이아웃 잡기 (flex/grid로 섹션 배치)
- [x] 색상 테마 및 타이포그래피 정하기
- [x] 반응형 처리 (모바일 / 태블릿 / 데스크탑 breakpoint: `sm`, `md`, `lg`)
- [x] 카드/뱃지 컴포넌트 스타일링 (스킬, 프로젝트)

### 3단계 — 인터랙션 (JavaScript) ✅
- [x] 다크모드 토글 기능
- [x] 스크롤 시 fade-in 애니메이션 (Intersection Observer)
- [ ] (선택) 네비게이션 스무스 스크롤

### 4단계 — 콘텐츠 채우기 ✅ (예시 콘텐츠, 추후 실제 정보로 교체 필요)
- [x] 예시 이력서 내용으로 텍스트 작성 (실명·실제 이력 아님, 나중에 교체 필요)
- [x] 프로필 사진 대신 이니셜 기반 CSS 아바타로 대체
- [x] 프로젝트 상세 내용 작성 (예시 프로젝트 3건)

### 5단계 — 마무리 및 배포
- [ ] 크로스 브라우저 확인
- [ ] 접근성 체크 (alt 텍스트, 시맨틱 태그, 명도 대비)
- [ ] GitHub Pages / Vercel / Netlify로 배포
- [ ] README.md 작성 (선택)

## 향후 개선 아이디어 (선택)
- 다국어 지원 (한/영 토글)
- 이력서 PDF 자동 생성
- 애니메이션 라이브러리 도입 (AOS 등)
