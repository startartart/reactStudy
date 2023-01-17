# Router

* `react-router-dom` : 실습내용은 버전이 5이므로, 6에 맞게 코드를 작성한다. `현재버전 : "react-router-dom": "^6.6.2"`
    * `Routes`를 추가해 `Route` 컴포넌트를 감싸며, `exact` 키워드가 존재하지 않는다.
        ```jsx
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        ```
    * 파라미터 사용하기
        * `match`가 사라지고 `useParams` Hook을 사용한다.
            ```jsx
            //Profile.js
            import {useParams} from 'react-router-dom';

            const username = useParams().username;
            ```
    * 쿼리 이용하기
        * `qs` 라이브러리를 사용하지 않고, `react-rotuer-dom` 내의 `useSearchParams` Hook을 사용한다.
            ```jsx
            //About.js
            import {useSearchParams} from 'react-router-dom'

            const [searchParams] = useSearchParams();
            const detail = searchParams.get('detail') === 'true';
            ```
    * 서브라우트 사용하기
        * `App` 컴포넌트에서는 `Profiles`를, `Profiles` 컴포넌트에서는 `Profile`을 나타내는데 `Profiles`는 `path`의 `param`에 따라 어떤 `Profile`을 나타낸지 정한다.

    ---
    * 심화문제 : 여기서 계층적인 구조 `App` -> `Profiles` -> `Profile`을 나타낸다. `Profiles`와 `Profile`을 통일하고 `App` 컴포넌트에 `Profiles` 링크를 만들어 첫 리스트에 접속했을 때, 리스트에 있는 유저 라우터에 접근했을 때, 리스트에 없는 유저 라우터에 접근했을 때의 상황을 각각 만들어보자.
        1. `TestProfile` 컴포넌트는 `App` 컴포넌트에서 받은 `param(username)`을 통해 `useParams` 훅으로 받는다.
        2. `rootProfile`은 루트접근 즉, `/`로 들어온 `profile`을 의미하며, `param`이 없을경우 `true`를 나타낸다.
        3. `/profile/`로 부터 들어온 모든 접근은 유저리스트를 보여주며, `param`에 따라 유저가 존재하는경우와 존재하지 않는 경우를 비교하여 나타낸다.
        4. 마지막으로 존재하지 않는 경우에 `rootProfile`을 조사하고 처음 접속한 경우와 존재하지 않는 경우를 비교하여 나타낸다.
