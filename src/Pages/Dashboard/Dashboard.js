import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h1 className='text-3xl font-bold text-center text-secondary'>Welcome to Dashboard</h1>
          <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for=" dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Profile</Link></li>
            
            { !admin 
             && 
             <>
             <li><Link to='/dashboard/review'>Add Review</Link></li>
            <li><Link to='/dashboard/myProduct'>My Order</Link></li>
             </>

            }
           
            { admin 
            && 
            <> 
            <li><Link to='/dashboard/users'>All User</Link></li>
            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
            <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
            </>
              
              }

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;