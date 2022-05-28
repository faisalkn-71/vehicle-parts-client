import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user }) => {
    const { email } = user;
    
    
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button className="btn btn-xs">Make Admin</button></td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;