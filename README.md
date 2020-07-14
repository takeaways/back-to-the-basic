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

2. Documents

- 우리가 사용하는 서비스 화면

3. Navigator

- 브라우저의 유용한 정보가 들어가 있습니다.
