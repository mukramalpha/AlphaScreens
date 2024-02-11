import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';

function Carousal(){
    return(
        <> 
  
 
  <div style={{ display: 'block', width:2000, padding: 0 }}> 
      <Carousel> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
src="b1.jpg"
            alt="Image One"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="b5.jpg"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="b3.jpg"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100 h-60"
src="b4.jpg"
            alt="Image Two"
          /> 
         
        </Carousel.Item> 
      </Carousel> 
    
        </div>
       </>
    )
}
export default Carousal