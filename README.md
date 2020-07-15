# 기초가 중요하다!!

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
