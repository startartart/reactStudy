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