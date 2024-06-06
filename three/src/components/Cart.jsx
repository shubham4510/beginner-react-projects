import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteFromCart } from '../redux/reducers.jsx';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  
  console.log(cartItems);

  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? cartItems.map(item => (
            <CartItem
              key={item.id}
              imgSrc={img1}
              name={"Mac book"}
              price={23212}
              qty={item.qty}
              id={item.id}
              increment={(id) => dispatch(increment(id))}
              decrement={(id) => dispatch(decrement(id))}
              deleteHandler={(id) => dispatch(deleteFromCart(id))}
            />
          )) : <h1>Cart is Empty...</h1>
        }
      </main>
      <aside>
        <h2>Subtotal: ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}</h2>
        <h2>Shipping: $200</h2>
        <h2>Tax: $20</h2>
        <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) + 220}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>

      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  </div>
);

export default Cart;
