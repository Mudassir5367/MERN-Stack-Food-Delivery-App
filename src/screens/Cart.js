import React from 'react'
import { useCart, useDispatchCart } from '../Components/ContextReducer';
// import trash from '../trash.svg'

export default function Cart() {
    const data = useCart()
    const dispatch = useDispatchCart();
    if(data.length === 0){
        return(
            <>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </>
        )
    }
    const totalPrice = data.reduce((total,food)=> total + food.price,0)
  return (
    <>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md '>
        <table className='table table-hover'>
        <thead className='text-success fs-4'>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
            </tr>
        </thead>

        <tbody>
            {data.map((food,index)=>(
                <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{food.name}</td>
                    <td>{food.qlty}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td><button type='button' className='btn p-0'><img src = '' alt='delete' onClick={()=>{dispatch({type:'REMOVE',index:index})}}></img></button></td>
                </tr>
            ))}
        </tbody>
        </table>
        <div>
            <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
            <button className='btn bg-success mt-5'>Check Out</button>
        </div>
      </div>
    </>
  )
}
