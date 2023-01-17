# react-express

* react 끝나면 `build`를 해야한다. `npm run build`
* `front` `server` 누가 라우팅을 담당하는지
    * 리액트의 경우 `react-router-dom`을 통한 라우팅 처리하는데 리액트가 라우팅하려면 다음 코드를 `server`에 작성한다.
    ```js
    app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/react-project/build/index.html'));
    });
    // URL을 통하여 param에 따른 GET 요청이 이루어지면 리액트 라우팅된 프로젝트를 진행하라.
    // 항상 가장 하단에 놓아야 한다.
    ```

* DB로부터 프론트에게 보여지는 과정
    1. `server-side rendering` : HTML을 서버가 만들어서 보내준다.
    2. `client-side rendering` : HTML을 리액트가 브라우저안에서 만든다.
        * `server`가 받은 요청에 대해 DB로부터 데이터를 꺼내 보여주는 API를 작성한다.
        * `front`는 DB로부터 데이터를 받아야 하는 상황에 요청을 보낸다.
    > 리액트의 경우 보통 `client-side rendering`을 하며, 서버와의 통신은 거의 `ajax`로 진행된다.


[참고사이트](https://codingapple.com/unit/nodejs-react-integration/)