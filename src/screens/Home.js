import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

export default function Home() {

  const [search,setSearch] = useState('');
  const [foodCat,setFoodCat] = useState([]);
  const [foodItems,setFoodItems] = useState([]);

  const loadData = async() =>{
    const response = await fetch('http://localhost:5000/api/foodData',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }
    });

    const data = await response.json()
    setFoodItems(data[0])
    setFoodCat(data[1])
    // console.log(data[0],data[1]);
  }

  useEffect(()=>{
    loadData()
  },[])


  return (
    <>
      <div><Navbar /></div>
      <div>
      <div className ="carousel-inner">
    <div className ='carousel-caption' style={{zIndex:"10", width:'40%',margin:'auto'}}>
    <div className ="d-flex justify-content-center  ">
      <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
      {/* <button className ="btn btn-outline-success bg-success" style={{backgroundColor:'success',color:'white'}} type="submit">Search</button> */}
    </div>
    </div>

    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" style={{filter:'brightness(40%)',width:'100%',height:'75vh',backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" style={{filter:'brightness(40%)',width:'100%',height:'75vh',backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?barbeque" style={{filter:'brightness(40%)',width:'100%',height:'75vh',backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>



      {/* <div  style={{backgroundColor:'black',marginTop:'-5px',color:'white'}}> */}
     <div className="container">
     {
        foodCat !==[]
        ? foodCat.map((data)=>{
          return (
            <>
           <div className="row mb-3 m-1">
           <h1 key={data._id} className="fs-3 m-3">
            {data.CategoryName}
            </h1>
            <hr/>
            {foodItems !== [] 
            ? foodItems.filter((item)=> item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())))
            .map(filterItems =>{
              return(
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 m-4" >
                <Cards foodItem = {filterItems}
                options = {filterItems.options[0]}
                ></Cards>
                </div>
              )
            })
             :<div>No Data Found</div>}
           </div>
            </>
          )
        }) 
        : ''
      }
     </div>
      {/* <Cards /> */}
      {/* </div> */}
      <div><Footer/></div>
    </>
  );
}
