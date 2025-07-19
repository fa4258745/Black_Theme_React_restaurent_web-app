




import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus, FaRupeeSign } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { qntyDec, qntyInc, proRemove } from "./CreateSlice";
import { MdDelete } from "react-icons/md";
const MyCart = () => {
  const cartData = useSelector((state) => state.myCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let TotalAmount = 0;

  const ans = cartData.map((item) => {
    TotalAmount += item.qnty * item.price;



    return (
      <tr key={item.id}>
        <td>
          <img src={item.images} width="100" height="100" style={{ borderRadius: "10px" }} />
        </td>
        <td>{item.category}</td>
        <td>{item.qnty}</td>
        <td className="qty-cell">
          <FaMinus
            className="qty-icon"
            onClick={() => dispatch(qntyDec({ id: item.id }))}
          />
          {item.qnty}
          <FaPlus
            className="qty-icon"
            onClick={() => dispatch(qntyInc({ id: item.id }))}
          />
        </td>
        <td>₹ {item.price}</td>
        <td>₹ {item.qnty * item.price}</td>
        <td>
          <MdDelete 
            className="delete-icon"
            onClick={() => dispatch(proRemove({ id: item.id }))}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <style>{`
        h1 {
          text-align: center;
          color: #C0392B;
          margin-top: 20px;
        }

        .table {
          background-color: #fff;
          border: 2px solid #EB1414;
          margin: 20px auto;
          width: 90%;
          border-radius: 10px;
          overflow: hidden;
        }

        thead {
          background-color: #EB1414;
          color: white;
          font-size: 18px;
        }

        tbody tr {
          text-align: center;
          vertical-align: middle;
        }

        .qty-cell {
          font-size: 20px;
          color: #EB1414;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .qty-icon {
          cursor: pointer;
          color: #C0392B;
          font-size: 18px;
        }

        .delete-icon {
          color: #EB1414;
          font-size: 30px;
          cursor: pointer;
        }

        td {
          border: 1px solid #EB1414;
        }

        h2 {
          text-align: center;
          font-size: 28px;
          color: #C0392B;
          margin-bottom: 10px;
        }
      `
      }</style>

<div className="paymentDesign" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",flexDirection:"column",backgroundColor:"#333333",color:"white"}}>

      <h1 className="text-4xl fw-bold text-white heading">My Cart Products</h1>
      <h2>
        <FaRupeeSign  className="text-white" /> {TotalAmount}
      </h2>
      <div>

       <button
          onClick={()=> {
            navigate("/PaymentPlaced");
          }}
          style={{
            background: "#1F1F1F",
            color: "white",
            padding: "10px 30px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Pay{TotalAmount}
        </button>
      </div>
</div>

      
     
      <hr />

      <Table className="table" bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Update Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>

      </Table>

    </>
  );
};

export default MyCart;
