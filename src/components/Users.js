import React, {useState, useEffect, useReducer} from "react";
import axios from 'axios'

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
        }
}

function Users() {
    // useState를 사용
    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // const fetchUsers = async () => {
    //     try {
    //         setError(null);
    //         setUsers(null);
    //         setLoading(true);
    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //         );
    //         setUsers(response.data);
    //     } catch (e) {
    //         setError(e);
    //     }
    //     setLoading(false);
    // };

    // useReducer을 사용
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        erorr: null
    });

    const {loading, data: users, error} = state;

    const fetchUsers = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
            );
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
      };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred</div>;
    if (!users) return null;
    return (
        <div>
            <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
            </ul>
            <button onClick={fetchUsers}>Reload</button>
        </div>
    );
}

export default Users;