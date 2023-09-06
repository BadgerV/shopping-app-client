import './splash.css';
import image from '/assets/image1.jpeg';
;

const Splash = () => {
  return (
   <>
     <div className="SplashAlpha">
       <div className="SplashContainer">
       <div className='large_image' style={{ backgroundImage: `url(${image})`}}>
       <div className="largeImage_container">
           <div className="largeImage_text">THE BEST OF SKKN</div>
           <span className="largeImage_subText">A minimalistic, travel-friendly case sized for the 9-product ritual</span>
           <div className="buttonNew">SHOP NOW</div>
       </div>
       </div>
       </div>
     </div>
 </>
  )
  
}

export default Splash