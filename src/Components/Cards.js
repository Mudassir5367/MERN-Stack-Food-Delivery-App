import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Cards(props) { 
  const dispatch = useDispatchCart() 
  const cartData = useCart()
  const priceRef = useRef()
  const options = props.options;
  const priceOptions = Object.keys(options)
  const [qlty,setQlty] = useState(1)  
  const [size,setSize] = useState('')  

  const handleAddToCart = async() =>{
    await dispatch({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qlty:qlty,size:size})
    console.log(cartData);
  }

  const finalPrice = qlty * parseInt(options[size])*2;
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])

  return (
    <>
       <div className="card mt-3" style={{width: "18rem"}}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:'140px',margin:'auto',objectFit:'fill'}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
            <select className="m-2 h-100 " style={{backgroundColor:'indigo',}} onChange={(e)=> setQlty(e.target.value)}>
            {
                Array.from(Array(6),(e,i)=>{
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })
            }

            </select>

            <select className="m-2 h-100 " style={{backgroundColor:'indigo',}} ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">Rs.{finalPrice}/-</div>
            </div>
        </div>
        <hr></hr>
        <button className={'btn btn-success justify-center w-50 ms-1 '} onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </>
  )
}
