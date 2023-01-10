# Project 2 : Todo List - functional

* Setup
    * `create-react-app` 을 통한 틀 마련
    * 필요 라이브러리 설치 -> `react-icons` `styled-componets`

* 컴포넌트 UI 만들기
    * 만들어야 할 컴포넌트 확인하기
        * `TodoTemplate` : Todo list layout을 설정하며, 페이지 중앙에 그림자가 적용된 흰색 박스를 보여준다.
        * `TodoHead` : 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남아있는 지 보여준다.
        * `TodoList` : 할 일에 대한 정보가 들어있는 `todos` 배열을 내장함수 `map`을 사용해 여러 개의 `TodoItme` 컴포넌트를 렌더링한다.
        * `TodoItem` : 각 할 일에 대한 정보를 렌더링하는 컴포넌트이며, 좌측 원을 눌러 완료 여부를 `toggle` 할수 있으며, 완료된 할 일은 좌측에 체크가 나타나며 텍스트 색상이 연해진다. 또한, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 사라진다.
        * `TodoCreate` : 새로운 할 일을 등록할 수 있게 해주는 컴포넌트이며, `TodoTemplate`의 하단부에 초록색 원 버튼을 렌더링해주고 이를 클릭하면 입력 폼이 나타난다. 다시 누르면 폼이 사라진다.
    
    * 페이지에 회색 배경색상 적용한다. 준비된 컬러 -> `#e9ecef`
        * css로 적용할 수 있으나 `styled-components`를 통해 적용하는 방법을 사용해본다.
        ```jsx
        // 글로벌 스타일을 추가할 때는 다음과 같은 함수를 사용한다.
        import {createGlobalStyle} from 'styled-components';

        const GlobalStyle = createGlobalStyle`
        body {
            background: #e9ecef;
        }
        `;
        ```