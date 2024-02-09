import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';

function Carousal(){
    return(
        <> 
  
  <div style={{ display: 'block', width: 2000, padding: 0 }}> 
       
      <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="alpha.png"
            alt="Image One"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
src="alpha2.png"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
src="alpha3.png"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1000}> 
          <img 
            className="d-block w-100"
src="alpha4.png"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
      </Carousel> 
    </div> 
  
       </>
    )
}
export default Carousal