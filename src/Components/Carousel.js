import React from 'react'


export default function Carousel() {
  return (
    <>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:'contain !important'}} data-bs-ride="carousel">
  <div className ="carousel-inner">
    <div className ='carousel-caption' style={{zIndex:"10"}}>
    <form className ="d-flex">
      <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className ="btn btn-outline-success bg-success" style={{backgroundColor:'success',color:'white'}} type="submit">Search</button>
    </form>
    </div>

    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" style={{filter:'brightness(30%)',width:'100%',height:'80vh',backgroundPosition:'center',backgroundSize:'cover'}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" style={{filter:'brightness(30%)',width:'100%',height:'75vh',backgroundPosition:'center',backgroundSize:'cover'}}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?barbeque" style={{filter:'brightness(30%)',width:'100%',height:'75vh',backgroundPosition:'center',backgroundSize:'cover'}}  className="d-block w-100" alt="..."/>
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
    </>
  )
}
