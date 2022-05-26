import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import axiosPrivate from '../api/axiosPrivate';




const useMyProduct = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {

        const getMyProduct = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyProduct(data);

            }
            catch (error) {
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth)
                    navigate('/login');

                }

            }
        }

        getMyProduct();

    }, [user])

    return [myProduct, setMyProduct]


}

export default useMyProduct;