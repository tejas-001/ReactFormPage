import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function FormComponent() {
    // const key = sessionStorage.getItem('key')
    if(sessionStorage.length!==0){
    var data = JSON.parse(sessionStorage.getItem('d'))
    }
    else{
        data = {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            dob: '',
            address: ''
        }
    }
    const navigate = useNavigate()
   var state = {
       id: '',
       firstName: '',
       lastName: '',
       age: '',
       dob: '',
       address: ''
   }

    const onSubmit = async() => {
        state.id = document.getElementById('InputId').value;
        state.firstName = document.getElementById('exampleInputFirstName1').value;
        state.lastName = document.getElementById('exampleInputLastName1').value;
        state.age = document.getElementById('age1').value;
        state.dob = document.getElementById('dob1').value;
        state.address = document.getElementById('address1').value;
        localStorage.setItem(`${state.id}`,JSON.stringify({ id:`${state.id}`, firstName:`${state.firstName}`, lastName:`${state.lastName}`, age:`${state.age}`, dob:`${state.dob}`, address:`${state.address}`}))
        // await sessionStorage.clear()
        // await navigate('/')
        window.location.reload(false)
    }
    useEffect(()=>{},[])
     
  return (
    <div className='form-div' style={{margin : 75 + `px`}} >
         <h1>
                Page 1
            </h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="InputId" className="form-label">ID</label>
                    <input 
                   type="text" name='Id'className="form-control" id="InputId" defaultValue={data.id} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName1" className="form-label">First Name</label>
                    <input 
                    
                    type="text" name='firstName' 
                    className="form-control" id="exampleInputFirstName1" defaultValue={data.firstName} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName1" className="form-label">Last Name</label>
                    <input  type="text" name='lastName' className="form-control" id="exampleInputLastName1" defaultValue={data.lastName} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age1" className="form-label"> Age </label>
                    <input  type="text" name='age'  className="form-control" id="age1" defaultValue={data.age} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dob1" className="form-label"> DOB </label>
                    <input  type="date" name='dob'  className="form-control" id="dob1" defaultValue={data.dob} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address1" className="form-label" >Address</label>
                    <input type="textbox" name='address'  className="form-control" id="address1" defaultValue={data.address} />
                </div>
                <button  onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  );
}
