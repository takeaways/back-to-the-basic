# 웹 프론트 기초

1. 의사소통의 중요성
2. 문제해결 능력

# WEB API

### 브라우저에 대해 완벽히 이해하자

- API (Application Programming Interface)
  - 간단하게 내가 원하는 Application을 만들때 사용하는 "기능", "도우미" 라고 할 수 있습니다.
  - DOM APIs
  - Network APIs
  - Graphics APIs
  - Audio/Video APIs
  - Device APIs
  - File APIs
  - Storage APIs
- MDN사이트에서 한 번 필요한 API를 찾아보아요!
  - MDN([https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction])
- HTTP / HTTPS
  - Request
  - Response

# Browser 구조화

### Window, Document, Navigator

1. Window

- 글로벌 오브젝트
  ```javascript
  console.log(this);
  ```
- 우리가 브라우저 화면을 열면 보이는 모든것
  ```javascript
  console.log(window); //chrome 브라우저의 console 에서 window의 내용을 볼 수 있습니다.
  ```
- size, scroll, load
- Window Size
  - window.screen : 모니터 사이즈
  - window.outer : 브라우저의 사이즈 (url + 텝도 포함합니다.)
  - window.inner : 스크롤을 포함하는 페이지의 전체
  - documentElement.clientWidth: 스크롤을 제외하는 순수한 Document 사이즈 입니다.
- Window 좌표
  - x →
  - y ↓
  - Element.getBoundingClientRect() : Element의 정보를 받아 올 수 있습니다.
  - Client XY vs Page XY
    - Client 이벤트에는 브라우저 윈도우 창에서 어마나 떨어져 있는지 Client
    - Page 문서의 시작점 부터 계산이 됩니다.
- Scroll API
  - window.scrollBy : 추가되어 움직인다.
  - window.scrollTo : 지정위치로 움직인다.
  - Element.scrollInto : Element의 위치로 이동한다.
- Load : load(all : css, images ), DOMContentLoaded(dom only), beforeunload, unload
  - body 태그의 끝에서 script 태그
- Script 삽입
  - defer 속성

2. Documents

- 우리가 사용하는 서비스 화면

3. Navigator

- 브라우저의 유용한 정보가 들어가 있습니다.

# DOM Document Object Model

1. HTML Tag -> Javascript Node가 된다.
2. EventTarget <- Node를 상속한다.
3. Node <- Document, Element, Text
4. Element <- HTMLInputElement.. etc

### 브라우저는 어떻게 화면을 구성하는가.

1. 브라우저는 HTML을 읽어 가면서 Object Tree를 만든다.
2. html <- head(meta, title, link), body(selection, span...)
3. 브라우저가 이해할 수 있는 오브젝트 형태로 만들어 진다.

### ★Event Target <- Node <- [Document, Element, Text]

1. addEventListener()
2. removeEventListener()
3. dispatchEvent()

# CSSOM

- CSS Object Model
  - DOM(HTML) + CSS(Style 요소) = CSSOM
- cascading rule에 따른 계산된 모든 스타일
  - ex) 부모 font-size : 14px; 모든 자식이 14가 된다.

# Render Tree

- DOM + CSSOM = Render Tree
- 사용자에게 궁극적으로 보여지는 아이들만 Tree가 된다.
  - diplay:none // render tree에 포함되지 않는다.

# Critical rendering path

- request/response -> loading -> scripting -> rendering -> layout -> painting

1. HTML 요청
2. 데이터 받아오기
3. HTML을 읽어서 DOM요소로 변경
4. rendering 트리를 만들고
5. 각각의 요소의 위치와 크기계산
6. 그림을 그린다.

- Construction
  - DOM, CSSOM, RederTree
  - DOM, CSS 요소가 작아 질 수록 RenderTree를 빨리 그릴 수 있다.
- Operation
  - Layout, Paint, Composition
    1. layout : x,y좌표와 사이즈를 정한다.
    2. paint : 계산한 내용을 바로 브라우저에 그리는 것이 아니라, 즉 각각의 비트맵의 형태로 레이어 단위 별로 준비한다. will-change(새로운 레이어에 추가 해놓는다. ex: will-change:opacity)
    3. composition: 순서대로 준비한 내용을 그린다.
       - paint가 자주 일어나지 않도록 한다.
         - translate : composition만 일어 난다.
       - composition만 다시 일어 나도록 작성하는 것이 좋다.
       - http://csstriggers.com/
       - animation, transition... css 변경 할 때 Operation에서 무엇이 되는지 Composition만 변경되는게 Best of Best
       - ex) left, top 보다는 Translate를 사용하자!!
    4. chrome -> Performance tap을 이용해서 성능을 확인할 수 있습니다.
       - record -> stop : profiling을 통한 성능을 알아 볼 수 있다.
       - red: bad, green: good

# Dom 조작하기

1. Select : document.querySelector()
   - 처음에 발견된 DOM을 리턴한다.
   - class [document.querySelector(.)]
   - id [document.querySelector(#)]
   - 속성 [document.querySelector("img[src="me.png")]"]
2. Create : document.createElement()
   - setAttribute("class","title")
   - Element.textContent = "string"
   - Element.appendChild()
   - Element.append()
   - Element.inserBefore(여기를, 여기전에)
3. Update : innerHTML
   - innerHTML : 한 번에 업데이이트 할 수 있으나 변경이 빈번하게 사용하는 행위는 좋지 않아요 DOM tree, 부터 쭉 진행 되기 때문이죠

# Event (이벤트)

1. 브라우저 위에서 발생할 수 있는 이벤트의 종류는 너무 다양하다.
2. Events 개념
   - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
3. Events 종류
   - https://developer.mozilla.org/en-US/docs/Web/Events

### Event Handler

1. 이벤트 오브젝트를 등록한 콜백함수로 전달하게 된다.
2. EventTarget <- Node 다 등록할 수 있다.
3. addEventListener, removeEventListnter, dispatchEvent
   - dispatchEvent(new Event('click'))

### Bubbling & Capturing

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture

1. Bubbling : 자식 -> 부모
2. Capturing : 부모 -> 자식
3. crrentTarget(지금의 element), target(발생한 엘레먼트)
4. [위험 가능한 사용하지 말자]stopPropagation, stopImmediatePropagation(나만 처리하겠다!!)
5. 관심이 있을 때만 처리하자! 부모에서는 다음과 같이 처리한다.
   - (event.target !== event.currentTaget) return //한다.

### 브라우저의 기본 기능을 취소하자!

1. event.preventDefault()
   - 브라우저의 기본동작을 취소하자.

### 이벤트 위임 (델리게이션)

1. 부모 컨테이너는 어떤 자식에서 이벤트가 발생하여도 들을 수 있다.
   - li 말고 ul에서 이벤트를 처리하자!
   ```javascript
   //Coooooooooooooool ✦
   const ul = ducoument.querySelector('ul');
   ul.addEventListener('click', (event) => {
     if (event.target.targetName === 'LI') {
       event.target.classList.add('selected');
     }
   });
   ```

# try web game
