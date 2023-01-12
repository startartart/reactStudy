# API 연동하기

* `axios`를 사용해 `GET` `PUT` `POST` `DELETE` 등의 메서드로 API 요청을 보낸다.
    > **REST API**란 자원, 행위, 표현으로 구성되어 있으며 웹의 장점을 최대한 활용할 수 있는 아키텍처를 일컫는다.

* API 연동 실습을 위해 `JSONPlaceholder`에 있는 연습용 API를 사용한다.
    * 사용된 요청용 URL = > `https://jsonplaceholder.typicode.com/users`
* `useState`를 사용하여 요청 상태를 관리하고, `useEffect`를 사용하여 컴포넌트가 렌더링되는 시점에 요청을 시작한다.
    * 요청에 대한 상태를 관리할 때에는 **요청의 결과**, **로딩 상태**, **에러** 총 3가지의 상태를 관리한다.
    ```js
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    ```
    * `useEffect`에 첫번째 파라미터로 등록하는 함수에는 `async`를 사용할 수 없기에 함수 내부에서 `async`를 사용하는 새로운 함수를 선언해 주어야한다.
    ```js
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get({link});
                // ...
            } catch (e) {
                // ...
            }
            setLoading(false);
        };
        fetchUsers(); 
    }, []);
    ```
    * 로딩 상태가 활성화 되었을 때, 그리고 `users` 값이 없을 때, `error`가 발생했을 때 상황에 대한 `return`을 추가작성한다.
    ```jsx
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (    // 나머지 상태에 이상이 없을 경우 읽은 데이터를 불러온다.
        <ul>
        {users.map(user => (
            <li key={user.id}>
            {user.username} ({user.name})
            </li>
        ))}
        </ul>
    );
    ```

* `button`을 추가하여 재요청을 보낸다면, `useEffect` 내에 있는 `fetchUsers()`함수를 빼온다음 `button`의 클릭이벤트로 연결한다.

* `useState` 대신 `useReducer`을 사용해서 구현해본다.
    * `action`의 값은  각각 `LOADING` `SUCCESS` `ERROR` 액션을 처리한다.
        > `useReducer`로 구현될 때 `useState`의 `setState` 함수를 여러번 사용하지 않아도 되는 점과, 로직을 분리함으로써 다른곳에서도 쉽게 재사용할 수 있다.

* `useAsync` 커스텀 Hook을 만들어 사용해본다.
    * `useAsync` 함수는 두가지 파라미터를 받아오며, 첫번째 파라미터는 API요청을 시작하는 함수, 두번째 파라미터는 `deps` 즉 `useEffect`의 `deps`로 설정한다.
        * 비동기 함수에서 파라미터가 필요하며, 그 값이 바뀔 때 새로운 데이터를 불러오고 싶은 경우에 활용할 수 있으나, `Users` 컴포넌트에서는 불필요한 부분이다.
    * `useAsync`에서 반환하는 값은 요청관련 상태와 `fetchData` 함수이며 나중에 데이터를 쉽게 리로딩 해준다.

    * 데이터 나중에 불러오기 : 처음 렌더링 되는 시점부터 API요청을 바로 진행시키는데, 특정 버튼이 주어지고 그 버튼을 눌렀을 때 API요청 시작하게 구현한다.
        * HTTP 메서드를 사용하게 된다면 필요한 시점에만 API를 호출해야하기에 필요할 때에만 요청 할 수 있는 기능이 필요하다.
        * `useAsync`의 세번째 파라미터 `skip`을 추가해 마운트되는 첫 부분에 바로 요청을 보내지 않도록 `if`문으로 제어한다.
        * `users`가 비어있을 경우에 리턴되는 값을 특정버튼으로 만들고, `refetch`를 연결하면 그때 첫 API 요청이 이루어진다.

* 특정 파라미터가 필요한 경우 대처방법
    * `User` 컴포넌트를 추가해 `id` 값에 따라 `props`로 받아와 URL 파라미터에 추가해 재호출되는 경우를 만든다.
    * `Users`에서는 `useState`로 `userId` 상태를 확인하고 `userId`값이 바뀔때마다 `User` 컴포넌트를 가져와 보여준다.