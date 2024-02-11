import Carousel from 'react-bootstrap/Carousel';

function Client(){
    return(
      <>
        <section className="p-5 bg-light" id="customers">
            <div className="container">
              <div className="row text-center">
                <div className="col">
                  <h1>
                    <span className="text-warning">Our </span>
                    <span className="text-success">Happy </span>
                    <span className="text-primary">Clients </span>
                  </h1>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="carousel slide" id="customer-carousel" data-bs-ride="carousel">
                   
                    <Carousel>
                    <Carousel.Item interval={2500}>
                        <div className="row text-center">
                          <div className="col-md-4 animate__animated animate__zoomIn delay-1s">
                            <img src="b1.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-2s">
                            <img src="b2.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John William</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-3s">
                            <img src="b3.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John smith</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                        <div className="row text-center">
                          <div className="col-md-4 animate__animated animate__zoomIn delay-1s">
                            <img src="card1.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-2s">
                            <img src="card2.jpeg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John William</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-3s">
                            <img src="card3.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John smith</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item interval={2500}>
                        <div className="row text-center">
                          <div className="col-md-4 animate__animated animate__zoomIn delay-1s">
                            <img src="card4.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-2s">
                            <img src="card5.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John William</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                          <div className="col-md-4 animate__animated animate__zoomIn delay-3s">
                            <img src="card6.jpg" alt="" className="img-fluid rounded-circle w-50"/>
                            <h2>John smith</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque facilis expedita qui voluptatibus debitis labore, tempore ea quisquam libero.</p>
                          </div>
                        </div>
                        </Carousel.Item>
                      
                    
                      </Carousel>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
    )
}
export default Client