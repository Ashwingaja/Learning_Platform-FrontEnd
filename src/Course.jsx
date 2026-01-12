import ProptType from 'prop-types'
import { useState  } from 'react';
function Course(props){
    
    // let purchased = false;
    const [disc , setdisc ] = useState(false)
     const [newprice , setnewprice ] = useState(props.coursePrice)
    function offerdprice(amt){
            console.log(newprice)
            setnewprice(newprice-amt)
            setdisc(true)
    }
    function BuyNow(discount){
        console.log(props.courseName ," purchased",discount," % percentage");
        props.onPurchase(props.courseName);
     }
     function accessCourse(){
        let lang = props.courseName.toLowerCase();
        if (lang === 'javascript') lang = 'js';
        const url = `https://www.w3schools.com/${lang}/`;
        window.open(url, '_blank');
     }
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
            <button onClick={()=>offerdprice(10) } disabled={disc}>Offer</button>
            <p>{disc ? `offerApplied` : `ApplyOffer` }</p>
            <span className="span1" >
            {props.isPurchased ? (
                <button onClick={accessCourse}>Access Course</button>
            ) : (
                <button  onClick={()=>BuyNow(props.coursePrice < 50 ? 10 : 20 )}>Buy Now</button>
            )}
            <button onClick={()=>props.display(props.id)}>Delete</button>
            </span>
            
            <p>{props.isPurchased ? "Purchased" : "Get it Now"}</p>
        </div>
    );
    }

Course.ProptTypes = {
    courseName: ProptType.string.isRequired,
    isPurchased: ProptType.bool.isRequired,
    onPurchase: ProptType.func.isRequired,
}
export default Course