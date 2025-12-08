import {useEffect, useState } from 'react'
function useFetch(url){

    const [Courses,setcourses] = useState(false);
    const [Error ,seterror] = useState(null);
         useEffect(()=>{
            setTimeout(()=>{console.log("useeffect called")
                 fetch(url)
                 .then(response => {
                  console.log(response)
                  return response.json()
                 }).then(data => setcourses(data))
                 .catch((error)=> seterror(error.message))},2000)
         } );
    
    return [Courses , Error];
}
export default useFetch;
