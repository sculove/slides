# Copilot Authoring Instructions for MoneyStory Web

본 문서는 GitHub Copilot / AI 코드 도우미가 이 레포지토리에서 코드를 생성/수정할 때 반드시 따라야 할 프로젝트 맞춤 지침입니다. (Human Dev + AI Pair 기준)

## 1. 목적 (Purpose)

- 이 레포는 Next.js(App Router) + Koa 커스텀 서버 + SmartEditor(내부 패키지) 기반 금융 스토리/콘텐츠 서비스입니다.
- AI는 Figma 설계 규칙과 FE 개발 규칙을 모두 준수한 최소/명확/일관된 코드를 생성해야 합니다.
- 기능 과추측(x) / 디자인 미존재 요소 임의 추가(x) / 중복 구현(x) / 접근성 누락(x) 금지.

## 2. 기술 스택 요약

- Runtime: Node >= 20, Next.js ^14.2 (App Router), TypeScript (strict), React 18.
- Server: `src/server` (Koa) – App Router 페이지(`src/app`)는 Next.js 규칙 사용, 서버 TS는 별도 `src/server/tsconfig.json`.
- Styling: CSS Modules (`*.module.scss`) + deFign 디자인 토큰(@defign/foundataion, @defign/ui 변수) 사용
- State/Data: React Query(@tanstack/react-query v5), jotai, 내부 finance-* 패키지 (api, query, env 등). API 모델은 swagger 스크립트로 생성 (직접 수정 금지).
- Path Alias: 절대 경로는 `$/*` → `src/*`, SmartEditor 전용은 `$smartEditor/*` (`smartEditor/src/*`). 상대경로 import 금지(ESLint 규칙 준수).
- UI Lib 우선순위: `@defign/ui`, `@defign/icon`, `@defign/asset` → 재사용 불가 시 최소 커스텀.
- 테스트: Jest + RTL
  - 테스트 코드는 추가적인 요청이 있지 않는 한 AI가 생성하지 않습니다.
  - 테스트 코드 생성 시에는 최소 happy path 1개 + edge 1개 이상 작성합니다.

## 3. 디렉토리 & 파일 관리 규칙

- 페이지: `src/app/<segment>/page.tsx` (App Router). 에러/404는 기존 패턴(`error.tsx`, `not-found.tsx`) 유지. index.tsx 금지.
- 페이지 전용 컴포넌트: `src/app/<segment>/components/ComponentName.tsx` & 동일명 `ComponentName.module.scss` 한 쌍. 하위 폴더(components 안) 또 만들지 않음. index.tsx 금지.
- 전역/공용 컴포넌트: `src/common/components/...` (필요 시). 임의의 barrel(`index.ts`) 생성 금지.
- Smart Editor 관련: `smartEditor/src/...` (로컬 개발 시 링크). 경로 alias `$smartEditor/...`.
- 모델(API): `src/models/` 자동생성 파일 수정/삭제 금지. 확장 시 wrapper 유틸을 별도 (`src/common/utils/`)에 작성.

## 4. 명명 & 타입 규칙

- 컴포넌트/파일: PascalCase (`StoryHeader.tsx`). SCSS Module: 같은 이름 + `.module.scss`.
- 타입: `type` 키워드 사용, 접두사 `T` (예: `type TStoryItem = {...}`).
- Interface 필요 시(외부 라이브러리 확장 등) `I` prefix (ESLint 규칙). Enum은 PascalCase.
- React 함수형 컴포넌트 사용. 기본 export 선호. 불필요한 export * 금지.

## 5. 데이터 & 비즈니스 로직

- API 호출: 내부 `@financial/finance-query`, `@financial/finance-api` 또는 `@financial/common-*` hooks 우선 탐색. 없으면 `@tanstack/react-query` + `axios` (`$ /common/query` 패턴 참고)로 구현.
- 로그/추적: console 사용 금지 (`isomorphic-logger` 또는 기존 로거 사용). ESLint 규칙 위반 시 수정.
- 새 API 모델 타입 필요 시 `src/models` 직접 수정 금지 → wrapping 타입을 `src/common/types/` 또는 로컬 컴포넌트 파일 상단에 `T` prefix로 선언.

## 6. 코드 작성 템플릿 (컴포넌트)

```tsx
// src/app/someFeature/components/StoryCard.tsx
import type {FC} from 'react';
import styles from './StoryCard.module.scss';

export type TStoryCardProps = {
  title: string;
  description?: string;
};

export const StoryCard: FC<TStoryCardProps> = ({title, description}) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    {description && (
      <p className={styles.description} color="text-secondary">{description}</p>
    )}
  </div>
);
```

## 7. 스타일 가이드

- CSS Module (*.module.scss) 사용.
- 스타일은 scss로 작성.
- tsx/scss 한 쌍으로 유지.
- 클래스를 지정할 때에는 `classnames/bind` 를 사용한다. **클래스 이름은 kebab-case 사용.**
- 인라인 style, styled-components, 전역 셀렉터(`:root`) 사용 금지.
- SCSS에서 `!important` 사용 금지. 꼭 필요한 경우에만 확인 후 허용
- 커스텀 변수는 로컬 컨테이너에 선언
- **display:flexbox 레이아웃 활용**
- **display:grid 레이아웃은 사용 금지**
- pnpm stylelint 로 스타일 검사를 한다.

### 8. 접근성 세부

- 의미 있는 이미지 alt / 장식 빈 alt.
- 디자인 상 버튼 요소는 semantic 태그 준비.
- WCAG AA 접근성 기본 충족.

## 9. 로컬 개발 환경

- pnpm dev 명령어를 통해 로컬 환경을 띄울 수 있다.
- 개발 서버 실행 전 포트 3000이 점유돼 있으면 기존 프로세스를 종료해야한다.
(예: macOS/zsh: lsof -t -iTCP:3000 -sTCP:LISTEN | xargs -r kill -9)
- <https://local-story.pay.naver.com> 도메인을 갖는 환경이다.

## 10. Figma를 이용한 코드 생성

상세 구현/샘플은 100장 Figma Dev Mode MCP 규칙 참조.

---

## 100. Figma Dev Mode MCP 규칙

다음 규칙은 Figma Dev Mode MCP(Code Connect)를 이용한 코드 생성 시 우선 적용되는 지침입니다.

### 100.1 기본 원칙

- 선택된 Figma 영역으로 부터 React, CSS Module(*.module.scss)을 생성한다.
- `@defign/ui`, `@defign/icon`, `@defign/asset` 최우선 사용
- Code Connect 매핑 우선. 매핑 불가 시 최소 커스텀 구현
- Figma 디자인과 **시각적으로** 정확하게 일치하는 형태로 구성한다. 임의 추측 금지. **위치, 크기, 마진 정확한 값을 사용한다.**
  - Figma 에 존재하지만 시각적으로 노출되지 않는 항목은 무시한다.
  - 정적 마크업 우선, **불필요한 동적 로직 생략**
  - 디자인 미존재 요소/문구/색상 추가 금지. **절대 추측 금지**
- 코드 생성 시 작업은 **100.7 작업 순서 권장 플로우** 를 준수한다.
- 코드 생성 작업 완료 후에는 **100.8 리뷰 체크리스트 (빠른 자가 검증)**을 항상 실행하고 검증한다.

### 100.2 Code Connect & 컴포넌트 매핑

- Figma 인스턴스 → Code Connect 매핑 우선.
- Code Connect는 `deFign` label을 참조한다.
- 컴포넌트 구현 규칙(필수)
  - `@defign/ui` 사용.
  - 반복되는 아이템이 있는 경우에는 반복되는 아이템 컴포넌트가 아닌, 반복되는 아이템을 감싸는 컴포넌트에 Code Connect 매핑을 우선 적용한다.
    - LineTabFixedSubItem, LineTabFixedMainItem과 같이 단일 아이템이 하나 이상일 경우에는 LineTabFixedSub, LineTabFixedMain 과 같은 컴포넌트의 Code Connect 매핑을 우선 적용한다.
    - ChipsItem과 같이 단일 아이템이 하나 이상일 경우에는 ChipsModule 컴포넌트의 Code Connect 매핑을 우선 적용한다.
  - Code Connect 맵핑 불가 시 CSS Module + deFign 디자인 토큰으로 최소 구현한다.
- 아이콘 구현 규칙(필수)
  - `@defign/icon` 사용.
  - 아이콘이 `@defign/icon`에 존재하지 않는 경우에는 placeholder로 대체한다.
  - 아이콘의 크기/위치/모양 Figma와 동일하게 구현한다
- **iPhone X/Status Bars/Status Bar (Black), StatusBariOS, StatusBarAOS, naverToolBar** 와 같이 디바이스의 외형을 나타내는 Figma 컴포넌트는 코드를 생성하지 않는다.

### 100.3 deFign 디자인 토큰

- deFign 디자인 토큰은 **@deFign/foundation과 @defign/ui** 패키지에서 제공된다.
- @defign/foundation: **node_modules/@defign/foundation/dist/scss/token** 디렉토리 하위의 scss 파일로 존재한다.
  - _color_variables.scss : color 변수
  - _radius_variables.scss : radius 변수
  - _shadow_variables.scss : shadow 변수
  - _typography_mixins.scss : typography mixin
    - font는 **@include** 로 mixin을 적용한다.
    - typography는 **font-size, line-height, letter-spacing** 이 정의된 mixin이다.
    - font-weight는 mixin에 포함되지 않으므로 별도 지정한다.
    - font-weight는 **$weight-bold, $weight-medium, $weight-regular** 변수를 사용한다.
- @defign/ui: **node_modules/@defign/ui/dist/scss/markup** 디렉토리 하위의 scss 파일로 존재한다.
  - _variables.scss : 화면 해상도의 크기와 분기값의 변수를 제공한다.
  - _mixin.scss : 유틸성 mixin을 제공한다.
    - **responsiveInner** : 좌우 여백이 있는 반응형 컨테이너 mixin
      - 기본, wide, footer 3 가지 형태의 반응형을 제공 한다.
    - **mediaQuery** : 반응형을 위한 미디어쿼리 mixin
      - mobileS, mobile, tablet, desktopS, desktopM 5 가지 화면 크기를 제공
- color/typography/shadow/radius: `@defign/foundation` SCSS 변수를 사용.
  - color/typography/radius/shadow는 토큰 우선 사용.
  - color/typography/radius/shadow 토큰이 존재하지 않으면 Figma 값으로 scss 직접 구현. **임의 수치 추론 금지**
  - **반드시 scss 변수명을 deFign 디자인 토큰 파일에서 확인하고 사용한다.**
- margin, padding 간격은 Figma 값 그대로 scss로 직접 구현한다.
- 사용 예시

  ```scss
  @import '$/scss/utils.scss';

  .article {
    @include defign_typography13; // font-size, line-height, letter-spacing
    color: $defign_gray900; // deFign 디자인 토큰 색상
    background-color: $defign_white; // deFign 디자인 토큰 색상
    font-weight: $defign_weight-medium; // deFign 디자인 토큰 font-weight
    border-radius: $defign_radius08; // deFign 디자인 토큰 radius
    box-shadow: $defign_box-shadow-large-10; // deFign 디자인 토큰 shadow
    padding: 16px; // Figma 값 그대로 사용
    margin: 8px; // Figma 값 그대로 사용
  }

  .inner {
    @include defign_responsiveInner; // deFign/ui 반응형 mixin
  }

  @include defign_mediaQuery('mobile', 'max') {
      .article {
          box-shadow: $defign_box-shadow-large-5;
      }
  }
  @include defign_mediaQuery('tablet') {
      .article {
          .value-area {
              min-width: auto;
          }
      }
  }
  ```
  
### 100.4 레이아웃

- Figma 프레임의 width가 375px 인 경우 페이지로 인식한다.
- **iPhone X/Status Bars/Status Bar (Black), StatusBariOS, StatusBarAOS, naverToolBar** 와 같이 디바이스의 외형을 나타내는 Figma 컴포넌트는 크기가 0 으로 코드로 구현하지 않는다.
- 하나의 페이지에는 하나의 FlexibleLayout만이 존재한다.
- 하나의 페이지를 구성할 때에는 **FlexibleLayout + Header 형태**의 구조로 구현한다.
  - 단일 `<FlexibleLayout>` + Header(topElement).
  - children = 실제 페이지 콘텐츠 컴포넌트.
  - 상세한 코드는 **레이아웃 샘플 (필수)** 코드를 참조한다.
- 페이지 콘텐츠의 컨테이너는 다음의 규칙을 준수한다.
  - max-width, min-width 등은 사용하지 않는다.
  - "헤더를 포함한 StickyHeaderContentArea"를 사용하는 경우에는 FlexibleLayout의 topElement로 "헤더를 포함한 StickyHeaderContentArea"를 지정한다.
  - 컨텐츠 영역(SomeContentPageContent)은 별도로 분리해서 FlexibleLayout 의 children으로 구성 한다.
- **Figma 디자인의 정확한 좌표를 기준으로 각 세션영역의 간격은 margin으로 적용한다.**

#### 레이아웃 샘플 (필수)

```tsx
import {FlexibleLayout, HeaderBrandMain} from '@defign/ui';

export default function Page() {
  return (
    <FlexibleLayout
      colorType="white"
      isFullHeight={true}
      topElement={<HeaderBrandMain href="#" title="서비스명" />}
    >
      {/** 컨텐츠 영역 **/}
      <SomeContentPageContent />
    </FlexibleLayout>
  );
}
```

### 100.5 페이지 콘텐츠 구현

- 페이지에 맞게 내부 컨텐츠는 디자인토큰을 이용하여 반응형에 대응할 수 있도록 구성한다.
- 반복 UI: 배열 + `map`
- 반복되는 데이터는 Figma 내용을 최대한 반영한 Mock 데이터로 처리한다.
- Mock 데이터는 최소 3개 이상, Figma 내용을 전부 다 반영한다.

#### 이미지 구현 규칙

- 이미지 placeholder 크기와 위치를 Figma와 동일하게 구성한다.
- 이미지 태그는 img를 사용한다.
- 마크업 속성으로 처리 가능한 부분은 가급적 마크업으로 대처한다.
  - 예시. 말풍선과 같이 말풍선 꼬리 부분은 **:after, :before** 선택자 등을 사용하여 표현한다.

#### 한 줄 영역 구현 규칙

- 컨테이너 내부 가로 크기는 유연하게 확장 되는 구조로 작성하고, 좌우 패딩으로 아이콘/버튼 공간을 확보한다.
- 높이는 Figma 값으로 고정한다.

#### 반복 UI 구현 예시

```tsx
const mockItems = [
  {id: 1, title: '타이틀1'},
  {id: 2, title: '타이틀2'},
  {id: 3, title: '타이틀3'},
  {id: 4, title: '타이틀4'},
  {id: 5, title: '타이틀5'},
];

function Section((id, title) => (
  <div key={id} className="item">
    <h3>{title}</h3>
  </div>
));

function ListSection() {
  return (
    <div>
      {mockItems.map(item => (
        <Section key={item.id} {...item} />
      ))}
    </div>
  );
}
```

### 100.6 금지 사항

- 추측 애니메이션/상호작용 금지
- 기능 과추측 / 디자인 미존재 요소 임의 추가 금지
- 임의로 추측한 margin/padding 확장 금지
- 패턴 중복 구현 금지
- 의미 없는 임의 요소/문구 추가 금지
- deFign 디자인 토큰 추론 금지
- **주석 금지** 꼭 필요한 경우에만 제안 후 허용

### 100.7 작업 순서 권장 플로우

1. deFign 디자인 토큰 scss 변수 확인.
2. Figma 링크 내 Code Connect 매핑 가능한 컴포넌트 식별.
3. 레이아웃(`FlexibleLayout`) 뼈대 구현 → Header 매핑.
4. typography/color/radius/shadow 토큰 치환
5. 아이콘 @defign/icon 치환.
6. Figma 수치에 맞게 크기 및 여백 조정.
7. Code Connect 매핑 가능한 컴포넌트 `@defign/ui` 컴포넌트로 치환.
8. 잔여 미매핑 요소 최소 커스텀 구현.
9. A11y 확인 (heading, alt, role, label).
10. 반복 패턴 단위 컴포넌트 작성 (반복 패턴 우선)
11. 시각적으로 Figma와 정확히 일치하는지 최종 확인.
12. stylelint 로 스타일 검사를 통과해야 한다.
13. 타입스크립트 오류 없는지 확인.

### 100.8 리뷰 체크리스트 (빠른 자가 검증)

- [ ] `@defign/ui`, `@defign/icon`, `@defign/asset`  우선 사용
- [ ] 레이아웃(`FlexibleLayout`) 샘플 형태로 구현되었는지 확인한다.
- [ ] color/typography/shadow/radius 토큰 변수명이 deFign 디자인 토큰 파일에 존재하는지 확인한다.
- [ ] color/typography/radius/shadow 토큰이 존재하지 않으면 Figma 값으로 scss 직접 구현. 추론금지
- [ ] **시각적으로 Figma와 정확히 일치하는지 Figma MCP를 통해 최종 확인**
  - [ ] **Figma 디자인의 정확한 좌표를 기준으로 각 세션영역의 간격이 시작적으로 잘 적용되었는지 확인한다**
  - [ ] 디자인 상 의미 없는 임의 요소/문구 추가 금지
- [ ] **스타일 오류 최종 확인**
- [ ] **타입스크립 오류 최종 확인**

---

위 100장 규칙은 Figma Dev Mode 중심 추가 보충으로, 기존 규칙을 대체하지 않으며 함께 적용됩니다.
