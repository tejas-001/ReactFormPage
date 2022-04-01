import { useEffect, useState } from "react";
import { RowComponent } from "../components/tablerow.component";

const Page1 = (props) => {
const [id, setId] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [dob, setdob] = useState('')
const [address, setAddress] = useState('')
 const onSubmit = () => {
     localStorage.setItem(`${id}`,JSON.stringify({ id:`${id}`, firstName:`${firstName}`, lastName:`${lastName}`, age:`${age}`, dob:`${dob}`, address:`${address}`}))

 }
 useEffect(()=>{},[])
 return (
        <div>
            <h1>
                Page 1
            </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputid1" className="form-label">ID</label>
                    <input onChange={(e)=>{
                        setId(e.target.value)
                    }} type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName1" className="form-label">First Name</label>
                    <input onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName1" className="form-label">Last Name</label>
                    <input onChange={(e)=>{
                        setLastName(e.target.value)
                    }} type="text" className="form-control" id="exampleInputLastName1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age1" className="form-label"> Age </label>
                    <input onChange={(e) => {
                        setAge(e.target.value)
                    }} type="text" className="form-control" id="age1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dob1" className="form-label"> DOB </label>
                    <input onChange={(e)=>{
                        setdob(e.target.value)
                    }} type="date" className="form-control" id="dob1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address1" className="form-label" >Address</label>
                    <input onChange={(e)=>{
                        setAddress(e.target.value)
                    }} type="textbox" className="form-control" id="address1" />
                </div>
                <button  onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <RowComponent />
                   
            
           
            
            
        </div>
    );
}
export default Page1