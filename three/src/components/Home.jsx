import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSOCYi2t90H7H3KcMUh8qsdsXNSppvXfqEQ&s";

const Home = () => {

  const dispatch = useDispatch();
  
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
  ];

  const addToCart = (options) => {
    toast.success("Added to cart")
    dispatch({ type: "addToCart", payload: options });
  }


  return (
    <div className="home">
      {
        productList.map((item) => (
          <ProductCard key={item.id} price={item.price} imgSrc={item.imgSrc} name={item.name} id={item.id} handler={addToCart}/>
        ))
      }
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,id,price,imgSrc,quantity:1})}>Add to Cart</button>
  </div>
);

export default Home;
