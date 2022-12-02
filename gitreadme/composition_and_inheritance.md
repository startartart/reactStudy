# 합성(구성) vs 상속

> React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 사이의 코드를 **재활용**하는 걸 권장한다.

* 방지 : 일부 컴포넌트는 자식을 미리 알수 없다. 대표적으로 "박스"로 나타나는 `Sidebar`나 `Dialog`와 같은 컴포넌트가 있다.
    * `props.children`: 부모요소로부터 받은 `props`의 전체 자식요소를 받아온다.
    * 다른 방법으로 자신만의 컨벤션을 활용한다. 예로
    ```js
    return (
        <SplitPane 
        left={<Contacts />} 
        right={<Chat />}
        />
    );
    ```
    부모 컴포넌트에서 전달할 `props`의 `left`와 `right`는 `SplitPane` 컴포넌트에서
    ```js
    function SplitPane(props) {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {props.left}
                </div>
                <div className="SplitPane-right">
                    {props.right}
                </div>
            </div>
        );
    }
    ```
    다음과 같이 나타낼 수 있다.

* 특수화 : 컴포넌트 사이 특수한 경우가 존재하고 하위 컴포넌트에서부터 상위 컴포넌트까지 계단식으로 구성된다고 볼 수 있다.

**sign_up_dialog.js**
1. 상위 컴포넌트 `SignUpDialog`는 자식 컴포넌트 `Dialog`로부터 `title`, `message`요소를 건넨다.
2. `Dialog` 컴포넌트 내 자식 컴포넌트 `FancyBorder`로부터 `color`요소를 건네고 `props.title`과 `props.message`, `props.children`를 받아온다.
3. `FancyBorder` 컴포넌트는 전체 요소 `props.children`를 받아온다.
    