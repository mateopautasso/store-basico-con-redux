import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart } from '../../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const { productsList, totalCount } = useSelector(state => state.cart);

  const handleRemoveProduct = (productId) => dispatch(removeCart(productId));

  return (
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
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>Eliminar</button></td>
              </tr>
            )
          })}
          <h4 className='mt-4'>Monto total: &nbsp;
            {
              productsList.map(product => product.price).reduce((acumulador, totalAcumulado)=>{
                return acumulador + totalAcumulado;
              }, 0)
            }
          </h4>
        </tbody>
      </table>
    </>
  )
}