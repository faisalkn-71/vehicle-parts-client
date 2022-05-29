import React, { useState, useEffect } from 'react';
import {useQuery} from 'react-query'
import Loading from '../Shared/Loading';
import User from './User';


const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect( () => {

        fetch('https://fathomless-plateau-95313.herokuapp.com/user', {
            method: 'GET', 
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then (res => res.json())
        .then(data => setUsers(data))
    }, [])
    
    // const { data, isLoading, refetch } = useQuery('user', () => fetch('https://fathomless-plateau-95313.herokuapp.com/user', {
    //             method: 'GET', 
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             },
    //         }).then(res => res.json()));
    // setUsers(data);

    // if (isLoading) {
    //     return <Loading></Loading>;
    // }

    return (
        <div>
            <h2 className="text-2xl">All Users: {users?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index = {index}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;