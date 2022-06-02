import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/Login/SignUp';
import Products from './Pages/Home/Products';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProduct from './Pages/Dashboard/MyProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';


function App() {
  return (
    <div className="px-12">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='products/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myProduct' element={<MyProduct></MyProduct>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
        </Route>
        <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <ToastContainer />
    </div>
  );
}

export default App;
