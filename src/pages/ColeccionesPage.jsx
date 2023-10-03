import { Link } from "react-router-dom"

const ColeccionesPage = () => {
  return (
   <>
{/* Coleeción Joyería */}
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084739/samples/animals/MC/CTB-0879-O_f085fg.jpg" className="d-block w-50" style={{height:"500px"}} alt="Anillos" />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to={"/products"}>First slide label</Link></h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0824_ziryje.jpg" className="d-block w-100" alt="Aretes" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0833-O-600x600_impuo5.jpg" className="d-block w-100" alt="Collares" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> <br /><br />

{/* Coleeción Ropa */}
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084739/samples/animals/MC/CTB-0879-O_f085fg.jpg" className="d-block w-50" style={{height:"500px"}} alt="Anillos" />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to={"/products"}>First slide label</Link></h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0824_ziryje.jpg" className="d-block w-100" alt="Aretes" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0833-O-600x600_impuo5.jpg" className="d-block w-100" alt="Collares" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> <br /> <br />

{/* Coleeción Zapatos */}
<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner" style={{height:"500px"}}>
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084739/samples/animals/MC/CTB-0879-O_f085fg.jpg" className="d-block w-50" style={{height:"500px"}} alt="Anillos" />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to={"/products"}>First slide label</Link></h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0824_ziryje.jpg" className="d-block w-100" alt="Aretes" />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to={"/ShoesColection"}>Second slide label</Link></h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1695084776/samples/animals/MC/CTB-0833-O-600x600_impuo5.jpg" className="d-block w-100" alt="Collares" />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to={"/CloseColection"}>Third slide label</Link></h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

   </>
  )
}

export default ColeccionesPage