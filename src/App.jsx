// import { useDispatch,useSelector } from "react-redux"
// import { fetchData } from "../features/calcs/fetchDataSlice"
// function App(){
//  const dispatch = useDispatch()
//  const {result,loading,error} = useSelector((state)=>state.fetchData)
//  const temp = result?.main?.temp
//  console.log(temp)
//  console.log(result)

import axios from "axios";
import { useEffect, useState } from "react";

//   return(
//     <div>
//       <button onClick={ ()=>dispatch(fetchData())}>fetch</button>
//       <p>{temp}</p>

//     </div>

//   )
// }

// export default App

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setProducts(response.data);
      return response.data;
    }
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <div className=" size-60">
            <img src={product.images} alt="" />
          </div>
        );
      })}
    </div>
  );
}
export default App;
