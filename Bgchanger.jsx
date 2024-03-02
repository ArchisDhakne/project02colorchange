import { useState } from 'react'

function Change(){
  
      const [color,setColor]= useState("gray");

return(

<div className="container bg-gray w-full h-screen" style={{backgroundColor:color}}>

<div className=" shadow-lg rounded-xl fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
 
 <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

<button
onClick={()=>setColor("red")}
 className="outline-none px-4 py-1 rounded-full text-white "
style={{backgroundColor:"red"}}
>Red</button>

<button 
onClick={()=>setColor("green")}
className="  px-3 py-1 rounded-xl"
style={{backgroundColor:"green"}}>Yellow</button>

<button 
onClick={()=>setColor("black")}
className="  px-3 py-1 rounded-xl"
style={{backgroundColor:"black"}}>Yellow</button>

<button 
onClick={()=>setColor("blue")}
className="  px-3 py-1 rounded-xl"
style={{backgroundColor:"blue"}}>Yellow</button>

<button 
onClick={()=>setColor("yellow")}
className="  px-3 py-1 rounded-xl"
style={{backgroundColor:"yellow"}}>Yellow</button>

</div>
</div>
</div>
 
)

}

export default Change;