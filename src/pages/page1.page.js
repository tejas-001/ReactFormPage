import { useEffect, useState } from "react";
import FormComponent from "../components/form.component";
import { RowComponent } from "../components/tablerow.component";

export const Page1 = (props) => {

//  const onSubmit = () => {
//      localStorage.setItem(`${id}`,JSON.stringify({ id:`${id}`, firstName:`${firstName}`, lastName:`${lastName}`, age:`${age}`, dob:`${dob}`, address:`${address}`}))

//  }
 
 useEffect(()=>{
    
 },[])
 return (
     <div >
       <FormComponent/>
       <RowComponent />
    </div>
    );
}
export default Page1