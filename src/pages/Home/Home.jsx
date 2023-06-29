import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { logOut } from "../../reducers/user/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { ProductList } from "../../components/product-list";
import { getDataAxios } from "../../services/axios";
import productsInLocal from "./productsInLocal.json"

export function Home () {

    const { fullName } = useSelector(store => store.user);
    const { totalCount } = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState(null)

    const handleSubmit = ()=>{
        dispatch(logOut())
        navigate('./')
    }

    useEffect(()=>{
        const requestProducts  = async ()=>{
            const res = await getDataAxios('GET', 'http://localhost:3000/products');
            let data = res.data;
            if(res.name === "AxiosError") {
              data = productsInLocal.products;
            }
            setProducts(data)
        }
        requestProducts()
    }, [])

    return(
        <>
        <div className="d-flex py-4">
            <Link className="btn btn-info mx-2" to="/home">Home</Link>
            <div className="ms-auto">
                <Link className="btn btn-primary position-relative" to="/cart">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalCount}
                    <span className="visually-hidden">products in cart</span>
                    </span>
                </Link>
            </div>
        </div>
            <h2>Hola {fullName}</h2>
            <button className="btn btn-primary" onClick={handleSubmit}>Cerrar sesión</button>
            <hr className="mb-5 mt-4"/>
            {
               products && <ProductList products={products}/>
            }
        </>
    )
}