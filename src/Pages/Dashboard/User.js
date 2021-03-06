import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://fathomless-plateau-95313.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error("Failed to make an admin!!");
                }
               return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Successfully make an admin!!")
                    window.location.reload();
                }



            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <h1 className='font-bold text-secondary'>Admin</h1>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;