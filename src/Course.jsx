import ProptType from 'prop-types'
import { useEffect, useState  } from 'react';
function Course(props){
    
    // let purchased = false;
    const [purchased , setpurchased] = useState(false)
    function BuyNow(discount){
        console.log(props.courseName ," purchased",discount," % percentage");
        setpurchased(true);
        console.log(purchased);
     }
       useEffect(()=>{
    //    console.log("Inside useeffect called")
      
       }
    )
     const [disc , setdisc ] = useState(false)
     const [newprice , setnewprice ] = useState(props.coursePrice)
    function offerdprice(amt){
            console.log(newprice)
            setnewprice(newprice-amt)
            setdisc(true)
    }
          return(
        props.courseName && <div className="card">
            <img src={props.image} alt="" />
            <h3> {props.courseName}</h3>
            <p> {newprice} </p>
            <button onClick={()=>offerdprice(10) }>Offer</button>
            <p>{disc ? `offerApplied` : `ApplyOffer` }</p>
            <span className="span1" >
            <button  onClick={()=>BuyNow(props.coursePrice < 50 ? 10 : 20 )}>Buy Now</button>
            <button onClick={()=>props.display(props.id)}>Delete</button>
            </span>
            
            <p>{purchased ? "Already Purchased" : "Get it Now"}</p>
        </div>
    );
    }

Course.ProptTypes = {
    courseName: ProptType.string.isRequired,
}
export default Course