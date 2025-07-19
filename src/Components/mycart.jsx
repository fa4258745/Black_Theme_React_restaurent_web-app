import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "../css/style.css"
const MyCart = () => {
  const cartData = useSelector((state) => state.myCart.cart);
  const ans = cartData.map((key) => {
    return (
      <>

        <tr>
          <td>
            <img src={key.images} width="100" height="100" />
          </td>
          <td>{key.productName}</td>
          <td>{key.quantity}</td>
          <td style={{ fontSize: "20px",padding:"10px" }}>
            <FaPlus />;{key.qnty}
            <FaMinus />;
          </td>
          <td>{key.price}</td>
          <td>{key.qnty * key.price}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1 className="heading">My cart Products</h1>
      <hr />
      <thead >
        <tr >
          <th>#</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>total price</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
    </>
  );
};
export default MyCart;









