import '../App.css';





export default function App() {
 
    const current = new Date();
    const date = `${current.getFullYear()}`;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
  return (

   <div id="header">
  
             <div className="heder">
    
                
  
                <div className="DateName">
 
                <div><h6> {day} , </h6></div> 
             <h6>{date}</h6>
    </div>
    <div className='wallet p-3'>
                <a className='connect' href='http:groupseve.com'>
                    Connect
                </a>
                </div>
    
         </div>
         <hr/>
            <div class="midheader">

                <div class ="middetail"><a className='buyNow' href="http:groupseve.com">Buy now</a>
                <h6>Price</h6>
                <h5>0.3 ALGO</h5></div>
    
             <div className='btn p-3'>
                <button className='text-dark' href='http:groupseve.com'>
                     Purchase
                </button>
             </div>
  
    
    
            </div>
   </div> 
   
     
  );
}