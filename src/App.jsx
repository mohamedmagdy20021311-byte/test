// import { useDispatch,useSelector } from "react-redux"
// import { fetchData } from "../features/calcs/fetchDataSlice"
// function App(){
//  const dispatch = useDispatch()
//  const {result,loading,error} = useSelector((state)=>state.fetchData)
//  const temp = result?.main?.temp
//  console.log(temp)
//  console.log(result)

import { useEffect, useState } from "react"

//   return(
//     <div>
//       <button onClick={ ()=>dispatch(fetchData())}>fetch</button>
//       <p>{temp}</p>

//     </div>

//   )
// }

// export default App



function App(){
  const [productsData,setProductData] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://fakestoreapi.com/products')
      const data =await response.json()
      setProductData(data) 
    }
    fetchData()
  },[])

  console.log(productsData)
  return (
    <div className=" flex flex-col items-center gap-5 ">
      <button onClick={()=>document.documentElement.classList.toggle("dark")}>change mood</button>
      {productsData.map((product)=>{
        return(
          <div key={product.id} className=" w-80 my-5 border text-justify bg-gradient ">
            <img src={product.image} className=" w-full h-40 p-2"/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>

          </div>
        )
      })}


    </div>
  )
}

export default App