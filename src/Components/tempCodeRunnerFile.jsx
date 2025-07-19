// import {  useSelector } from "react-redux";
// import { addToCart } from "../CreateSlice";
// import { MdDeleteSweep } from "react-icons/md";
// import { favRemove } from "../CreateSlice";
// import {useDispatch} from "react-redux"
// const Favourites = () => {
//   const dispatch = useDispatch();
//   const favData = useSelector((state) => state.myCart.favourite);
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Favourites</h1>

   
//       <div
//         style={{
//           display: "flex",
//           overflow: "scroll",
//           width: "100%",
//           gap: "40px",
//           justifyContent: "space-around",
//           flexDirection: "row",
//           height: "100%",
//         }}
//       >
//         {favData.length === 0 ? (
//           <h3>No Favourite Products Added</h3>
//         ) : (
//           favData.map((key) => (
//             <div
//               className="favMainDiv"
//               key={key.id}
//               style={{
//                 border: "1px solid red",
//                 borderRadius: "10px",
//                 width: "300px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//                 gap: "15px",
//                 flexWrap: "wrap",
//                 padding: "20px",
//               }}
//             >
//               <MdDeleteSweep
//                 style={{ cursor: "pointer", fontSize: "40px", color: "red" }}
//                 onClick={() => {
//                   dispatch(favRemove({ id: key.id }));
//                 }}
//               />

//               <img src={key.images} width="180" alt={key.productName} />
//               <h5>{key.productName}</h5>
//               <h3>₹{key.price}</h3>
//               <div>
//                 {/* <Button
//             style={{
//               backgroundColor: "#eaeaea",
//               padding: "10px 50px",
//               textTransform: "uppercase",

//               color: "#000",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={() =>
//               dispatch(
//                 addToCart({
//                   id: key.id,
//                   productName: key.productName,
//                   category: key.category,
//                   images: key.images,
//                   price: key.price,
//                 })
//               )
//             }
//           >
//             Add to Cart
//           </Button> */}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//     </>
//   );
// };

// export default Favourites;









