import { useEffect, useState } from "react"

const useProductDetails = productId => {
    console.log(productId)
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://fathomless-plateau-95313.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    return [product, setProduct];
   
}

export default useProductDetails;