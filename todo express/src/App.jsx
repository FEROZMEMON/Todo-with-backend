import axios from 'axios'
import React, { useEffect } from 'react'


const App = () => {

useEffect(()=>{

  axios.get("http://localhost:3000/api/v2")
  .then((res)=>{
 console.log(res.data);
  })
  .catch((err)=>{
 console.log(err);
  })



}, [] )

  return (
    <>
   
    <div>App</div>
   
    </>
  )
}


export default App