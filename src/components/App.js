import React, { useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      //return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id ? { ...user, active: !user.active } : user
      //   )
      // };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  // state 상태, dispatch 액션발생함수, reducer 상태변경함수, initialState 초기상태

  const { users } = state;
  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   reset();
  //   nextId.current += 1;
  // }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        // username={username}
        // email={email}
        // onChange={onChange}
        // onCreate={onCreate}
      />
      <UserList users={users}/>
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;