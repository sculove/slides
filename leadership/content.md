## 여러분 회사 오시면 즐겁나요?

-----

저희 팀원이 회사에서

## 급식이 아닌 <strong class="yellow">팀 동료들</strong>이 있어서 <br/>즐겁게 일했으면 좋겠습니다

-----

## 오늘 할 이야기는

이런 고민으로 시작된</br>저희 팀의 몇가지 장치들을 소개하려고 합니다 <!-- .element class="fragment" -->

-----

잠시 고민했던 시절

### 저희 팀의 상황을 살펴보겠습니다

-----

(구) 금융FE 🔥️ 폭발적인 신규 인원 증가

<style>
    /* 1. 막대 색상 강조 */
    .increase.mermaid .bar-plot-0 rect:nth-child(1) { fill: #FF5722 !important; }
    .increase.mermaid .bar-plot-0 rect:nth-child(2) { fill: #FF9800 !important; }

    /* 2. 변화율 레이블 강제 삽입 (위치는 차트 크기에 따라 조정 필요) */
    .increase.mermaid::after {
        content: "120% ↑";
        position: absolute;
        left: 38%; /* 23년 막대 위쪽 위치 */
        top: 45%;  /* 막대 높이에 맞춘 위치 */
        color: #E65100;
        font-weight: bold;
        font-size: 0.8em;
    }
</style>
<div class="increase mermaid">
xychart-beta
    title "연도별 인원수 (괄호: 전년비 성장률)"
    x-axis ["'22년(5명)", "'23년(11명, 120%↑)", "'24년(18명, 63%↑)", "'25년(22명, 22%↑)"]
    y-axis "인원수" 0 --> 25
    bar [5, 11, 18, 22]
</div>

-----

넓혀가는 업무 범위와 신규 서비스

<div class="mermaid">
block-beta
    columns 5
    h0["<b>업무</b>"] h1["<b>'22년</b>"] h2["<b>'23년</b>"] h3["<b>'24년</b>"] h4["<b>'25년</b>"]
    a0["대출"] a1["●"] a2["●"] a3["●"] a4["●"]
    b0["마이카"] b1["●"] b2["●"] b3["●"] b4["●"]
    c0["보험"] c1["—"] c2["● NEW"] c3["●"] c4["●"]
    d0["부동산"] d1["—"] d2["● NEW"] d3["●"] d4["●"]
    e0["디자인시스템"] e1["—"] e2["● NEW"] e3["●"] e4["●"]
    f0["예적금"] f1["—"] f2["● NEW"] f3["→ 내자산"] f4["→ 내자산"]
    g0["신용점수"] g1["—"] g2["—"] g3["● NEW"] g4["●"]
    z0["증권"] z1["—"] z2["● NEW"] z3["●"] z4["→ NVEST"]

    style h0 fill:#2a2a5a,color:#f5da55,stroke:#444
    style h1 fill:#2a2a5a,color:#f5da55,stroke:#444
    style h2 fill:#2a2a5a,color:#f5da55,stroke:#444
    style h3 fill:#2a2a5a,color:#f5da55,stroke:#444
    style h4 fill:#2a2a5a,color:#f5da55,stroke:#444

    style a0 fill:#333,color:#fff,stroke:#444
    style b0 fill:#333,color:#fff,stroke:#444
    style c0 fill:#333,color:#fff,stroke:#444
    style d0 fill:#333,color:#fff,stroke:#444
    style e0 fill:#333,color:#fff,stroke:#444
    style f0 fill:#333,color:#fff,stroke:#444
    style g0 fill:#333,color:#fff,stroke:#444
    style z0 fill:#333,color:#fff,stroke:#444

    style a1 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style a2 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style a3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style a4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style b1 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style b2 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style b3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style b4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style c3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style c4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style d3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style d4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style e3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style e4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style g4 fill:#3a7bd5,color:#fff,stroke:#2a6bc5
    style z3 fill:#3a7bd5,color:#fff,stroke:#2a6bc5

    style c2 fill:#50c878,color:#fff,stroke:#40b868
    style d2 fill:#50c878,color:#fff,stroke:#40b868
    style e2 fill:#50c878,color:#fff,stroke:#40b868
    style f2 fill:#50c878,color:#fff,stroke:#40b868
    style g3 fill:#50c878,color:#fff,stroke:#40b868
    style z2 fill:#50c878,color:#fff,stroke:#40b868

    style c1 fill:#1a1a2e,color:#555,stroke:#333
    style d1 fill:#1a1a2e,color:#555,stroke:#333
    style e1 fill:#1a1a2e,color:#555,stroke:#333
    style f1 fill:#1a1a2e,color:#555,stroke:#333
    style f3 fill:#e6a23c,color:#fff,stroke:#c6922c
    style f4 fill:#e6a23c,color:#fff,stroke:#c6922c
    style g1 fill:#1a1a2e,color:#555,stroke:#333
    style g2 fill:#1a1a2e,color:#555,stroke:#333
    style z1 fill:#1a1a2e,color:#555,stroke:#333

    style z4 fill:#e6a23c,color:#fff,stroke:#c6922c
</div>

-----

### 압박감이 있는 다수의 <strong class="yellow">국책 과제</strong>들까지

사업자 대출비교, 신용 대출비교, 주택담보대출 비교, 해외여행자보험비교, 자동차보험비교 ...

-----

자칫하면

### 일에 사람이 매몰될 수 있는 환경

- 늘어난 인원만큼 복잡해진 관계의 그물망
- 쌓여가는 과제만큼 높아진 심리적 압박감

-----

'지속 가능한 몰입'의 환경

### 조금은 <strong class="yellow">즐겁게 일하는 환경</strong>을

## 만들어야겠다

-----

그래 구성원들을 챙기자.

- <!-- .element class="fragment" -->  함께 밥 먹기 🍚
- <!-- .element class="fragment" -->  별도로 만나서 차먹는 시간 만들기 ☕
- <!-- .element class="fragment" -->  여유가 된다면 술도 먹고 회식 🍺

-----

- 가장 쉬운 접근이지만 <strong class="yellow">장기적인 효과를 얻기 어려움</strong>
- <!-- .element class="fragment" -->  특히 사람이 많아진다면 그만큼 힘들어지죠.
- <!-- .element class="fragment" -->  무엇보다 <strong>너무 드러나는 의도</strong>에 부담이나 반감을 가지기 쉬운 장치입니다.
- <!-- .element class="fragment" -->  더군다나 오프라인(코로나19 시대) 지양 시대

-----

내 옆의 동료가

#### 어떤 일을 하는지 관심 갖게하고 싶었어요

- <!-- .element class="fragment" --> 나보다 일은 없어 보이는데 바쁘다고 하는 동료
- <!-- .element class="fragment" --> 나보다 힘든 건 없어 보이는데 힘들다고만 하는 동료
- <!-- .element class="fragment" --> 즐겁다고 하는 동료. 도대체 뭐가 즐거운지?
- <!-- .element class="fragment" --> ...

-----

#### 같이 나눌 컨텍스트를 만들어 주고 싶었습니다

- <!-- .element class="fragment" --> 자신의 일상을
- <!-- .element class="fragment" --> 자기가 알게된 지식을
- <!-- .element class="fragment" --> 자기 자랑도 할수 있는

-----

이렇게 되면...

#### 서로를 더 잘 이해할 수 있지 않을까?

#### <!-- .element class="fragment" -->  힘들더라도 즐거움을 얻을 수 있지 않을까?

-----

그래서 시도했던 것이

### <strong class="yelloe">함께 쓰는 온라인 일기</strong> 였습니다

<img src="./image/start.png" width="500px"/>

<p class="fragment">일일 보고가 아닌 <strong class="yellow">캐주얼한 일상을 공유하는 일기</strong></p>

-----

<div style="position: relative; width: 100%; height: 720px; margin: 0 auto;">
    <!-- study1: 초와이드(5:1) - 좌상단 -->
    <img src="./image/study1.png"
         style="position: absolute; top: 0%; left: -2%; width: 580px; z-index: 1;
                border-radius: 8px;
                box-shadow: 4px 6px 20px rgba(0,0,0,0.35);
                transform: rotate(-4deg);">
    <!-- study2: 가로형(1.8:1) - 우상단 -->
    <img class="fragment fade-up" src="./image/study2.png"
         style="position: absolute; top: 0%; left: 45%; width: 540px; z-index: 2;
                border-radius: 8px;
                box-shadow: 4px 6px 20px rgba(0,0,0,0.35);
                transform: rotate(6deg);">
    <!-- recent: 세로형(0.63:1) - 좌측 중앙 -->
    <img class="fragment zoom-in" src="./image/recent.png"
         style="position: absolute; top: 10%; left: -2%; height: 520px; z-index: 3;
                border-radius: 8px;
                box-shadow: 5px 8px 24px rgba(0,0,0,0.4);
                transform: rotate(3deg);">
    <img class="fragment zoom-in" src="./image/short.png"
         style="position: absolute; top: 24%; left: 16%; height: 480px; z-index: 4;
                border-radius: 8px;
                box-shadow: 5px 8px 24px rgba(0,0,0,0.4);
                transform: rotate(-5deg);">
    <!-- pr1: 가로형(1.37:1) - 우측 중앙 -->
    <img class="fragment zoom-in" src="./image/pr1.png"
         style="position: absolute; top: 16%; left: 30%; width: 600px; z-index: 5;
                border-radius: 8px;
                box-shadow: 5px 8px 24px rgba(0,0,0,0.4);
                transform: rotate(-5deg);">
    <!-- play1: 세로형(0.6:1) - 우측 -->
    <img class="fragment zoom-in" src="./image/play1.png"
         style="position: absolute; top: 5%; left: 58%; height: 540px; z-index: 6;
                border-radius: 8px;
                box-shadow: 6px 10px 28px rgba(0,0,0,0.4);
                transform: rotate(10deg);">
    <!-- hobby1: 가로형(1.36:1) - 하단 좌측 -->
    <img class="fragment zoom-in" src="./image/hobby1.png"
         style="position: absolute; top: 48%; left: 5%; width: 500px; z-index: 7;
                border-radius: 8px;
                box-shadow: 6px 10px 28px rgba(0,0,0,0.4);
                transform: rotate(-7deg);">
    <!-- play3: 세로형(0.67:1) - 중앙 오버레이 -->
    <img class="fragment fade-in" src="./image/play3.png"
         style="position: absolute; top: 4%; left: 18%; height: 580px; z-index: 8;
                border-radius: 10px;
                box-shadow: 8px 12px 36px rgba(0,0,0,0.45);
                transform: rotate(-2deg);">
    <!-- play2: 정방형(1.13:1) - 중앙 오버레이 -->
    <img class="fragment fade-in" src="./image/play2.png"
         style="position: absolute; top: 10%; left: 24%; width: 560px; z-index: 9;
                border-radius: 10px;
                box-shadow: 8px 12px 36px rgba(0,0,0,0.45);
                transform: rotate(3deg);">
    <!-- no1: 가로형(1.37:1) - 최종 중앙 -->
    <img class="fragment fade-in" src="./image/no1.png"
         style="position: absolute; top: 12%; left: 14%; width: 640px; z-index: 10;
                border-radius: 10px;
                box-shadow: 10px 14px 40px rgba(0,0,0,0.5);
                transform: rotate(1deg);">
</div>

-----

저희 그래도

### 나름 즐겁게 일하고 있는 것 같나요?

-----

즐거운 회사생활의 지표라고 보기는 어렵겠지만...

### 저희팀은 구성원 <strong class="yellow">90%이상이 O 타입</strong>을 유지하면서 동료들과 생활하고 있습니다

-----

## 정착을 위한 '넛지(Nudge)'

이런 문화를 정착하는게 사실 쉽지 않았어요.

<strong class="fragment">강제적이지 않지만 강제적인 환경을 만드는 것</strong>

-----

### 일기를 <strong>일일보고</strong> 같이 적는 분위기

<div class="fragment">
<p>TMI 많이 남발</p>

<img src="./image/tmi.png" height="400px"/>
</div>

-----

### 팀 주간회의 시간에 10분 일기 읽기

업무보다는 <strong>일상</strong>을 공유해보았습니다.

-----

### "주번" 시스템

<strong class="yellow">팀원 중 한명</strong>이 동료들이 일기를 잘 쓸 수 있도록 독려

-----

<img src="./image/assign1.png" height="600px">

-----

<img src="./image/angry.png" height="600px">

-----

### 주번 목표 달성을 위한 East Egg

달성조건: 모든 구성원이 매일, 퇴근 전까지 작성 완료

<img src="./image/eastegg-image.gif"/>

-----

의무가 아닌 소원으로

<img src="./image/wish.png">

-----

약 2년만에 보게된 주번 성공

<img src="./image/eastegg.png" height="600px">

-----

<!-- .slide: data-background="#e7ad52" -->

## 일기로부터 조직에서 얻은 점

-----

### 자연스러운 기술공유 문화

<img src="./image/tech.png" height="600px">

-----

일기를 보면

### 그 사람의 성향을 알 수 있어요

- <!-- .element class="fragment" -->  체크리스트로 일상을 정리한다면 <strong class="yellow fragment">계획적인 J</strong>
- <!-- .element class="fragment" -->  동료에게 공감을 자주한다면 <strong class="fragment yellow ">배려심 좋은 F</strong>
- <!-- .element class="fragment" -->  간결하고 단답형 일기라면 <strong class="fragment yellow">논리 중심의 T</strong>

-----

### 성향 기반의 적재적소 배치

- <!-- .element class="fragment" --> TTTTT<p class="fragment">업무 생산성은 좋아. 날카롭고 경쟁구조</p>

- <!-- .element class="fragment" --> FFFFF<p class="fragment">서로 좋고 배려. 상대적으로 업무 추진력,꼼꼼함은 미흡</p>

-----

복잡성이 높은 서비스는 <strong class="yellow">T 구성원들</strong>이 탁월

협업이 어려운 서비스는 <strong class="yellow">F 구성원들</strong>이 탁월

### <!-- .element class="fragment" --> TFFTF, FFTFT → 제일 괜찮드라

-----

공개적으로 말할 수 없는 이슈들

### <strong>1 On 1</strong> 이 가장 확실한 해결책

현실적으로 모든 구성원들을 자주 보기 힘들었어요. <!-- .element class="fragment" -->

-----

그래서 전

### 일기와 <strong class="yellow">HealthCheck</strong>를 사용 합니다

-----

일기하면서부터 함께 시작했습니다.

#### 총 6가지 질문의 5점 만점 <strong class="yellow">익명 설문</strong>

<img src="./image/health-check.png" width="750px">

-----

언제 몇 명이 어려움이 있는지 알 수 있어요.

<img src="./image/health-check-danger.png" width="750px">

#### <!-- .element class="fragment" --> 하지만... 누구 인지는 알기 어렵죠

-----

그 당시의 일기를 잘 살펴보면

### 사실 누구인지 알 수 있답니다

-----

다시 처음 질문으로

## 여러분 회사 오시면 즐겁나요?

<p class="fragment">혹시 같은 고민이 있으시다면</p>

<h4 class="fragment"><strong class="yellow">"함께 쓰는 일기"</strong>를 한번 시도해보세요 </h4>

-----

# Q & A
