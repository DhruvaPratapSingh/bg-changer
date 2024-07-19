import {useState } from "react"

const Changer = (props) => {
    const [color,setcolor]=useState(props.name)
    const onclick=()=>{
     document.body.style.backgroundColor=color;
     setcolor(color)
    }
  return (
    <div>
      <button onClick={onclick}>{props.name}</button>
    </div>
  )
}

export default Changer
