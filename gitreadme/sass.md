# Sass

* SASS : 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐만 아니라 코드의 가독성을 높여주어 유지보수가 쉬운 CSS이다.
    * Sasss에서는 두가지의 확장자(./scss/sass)를 지원하며 문법이 살짝 다르다.

* Button 꾸미기
    * `className`에 CSS 클래스 이름을 동적으로 넣어주고 싶을 때 다음과 같이 처리한다.
        ```jsx
        className={['Button', size].join(' ')}
        // 같은 표현
        className={`Button ${size}`}
        // 조건부로 CSS 클래스를 넣어주고자 할때는 classnames 라이브러리를 사용하는 것이 편하다.
        classNames=('foo', 'bar');
        ```
    * 다양한 Button에 따른 옵션을 추가해 `scss`에 작성한다.

* `...rest props` 전달하기
    * `onClick` `onMouseMove`와같은 이벤트를 매번 넣어주는 건 번거롭기 때문에 `spread` `rest` 문법을 사용해 설정한다.
        > 컴포넌트가 어떤 `props`를 받을 지 확실치는 않지만 그대로 다른 컴포넌트 또는 HTML 태그에 전달을 해주어야하는 상황에는 `...rest` 문법을 활용한다.