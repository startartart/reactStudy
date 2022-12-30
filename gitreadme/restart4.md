# Restart 4

* `useMemo` Hook을 이용해 성능최적화를 한다.
    * 연산된 값을 재사용하는 방법이다.

* 함수를 만들어서 활성 사용자 수를 세는 경우
    ```js
    function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
    }
    ```
    * 다음 코드를 통해 활성 사용자수를 변수 `count`에 넣어 이 값을 나타낼 때, `input` 폼에 받은 입력에 변화가 일어날 경우에도 호출되는 자원 낭비가 일어난다.
    * 여기서 `useMemo` Hook 함수를 사용하여 성능을 최적화 시킨다.
        > `Memo`는 `memoized`를 의미하며 이전에 계산 한 값을 재사용한다는 의미를 가진다.

* `useMemo` 사용
    ```js
    // 기존 사용
    const count = countActiveUsers(users);

    // useMemo 사용
    const count = useMemo(() => countActiveUsers(users), [users]);
    ```
    * 첫번째 파라미터에는 연산할 함수, 두번째 파라미터에는 deps배열 즉, 이 배열안에 있는 내용이 바뀔 때 함수가 호출되고, 바뀌지 않는다면 연산한 값을 재사용하게 된다.
