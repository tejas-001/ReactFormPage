import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
// import { onEdit } from '../pages/page1.page'
export const RowComponent = (props) =>{
    // const {id} = props
    const keys = []
    for(var i=0;i<localStorage.length; i++){
        if(localStorage.key(i)!=null){
            keys.push(localStorage.key(i))
        }
    }
    const navigate = useNavigate()
    console.log(keys)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [dob, setdob] = useState('')
    const [address, setAddress] = useState('')
    const obj = { id:`${id}`, firstName:`${firstName}`, lastName: `${lastName}`, age:`${age}`, dob:`${dob}`, address:`${address}`}
    const stringedObj = JSON.stringify(obj)
    sessionStorage.setItem('d',stringedObj)
    // sessionStorage.setItem('key',id )
    return(
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Address</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
               {keys.map(e => {
                   const parsedObj = JSON.parse(localStorage.getItem(`${e}`))
                   return <tbody>
                   <tr>
                   <td>{parsedObj.id}</td>
                   <td>{parsedObj.firstName}</td>
                   <td>{parsedObj.lastName}</td>
                   <td>{parsedObj.age}</td>
                   <td>{parsedObj.dob}</td>
                   <td>{parsedObj.address}</td>

                   <td><button onClick={async()=>{
                       
                    await setId(parsedObj.id);
                    await setFirstName(parsedObj.firstName); 
                    await setLastName(parsedObj.lastName);
                    await setAge(parsedObj.age);
                    await setdob(parsedObj.dob);
                    await setAddress(parsedObj.address);
                    // await navigate('/edit')
                    window.location.reload(false)
                    
                }} type="submit" 
                   class="btn btn-primary">Edit</button>
                   </td>

                   <td><button onClick={()=>{localStorage.removeItem(`${parsedObj.id}`); window.location.reload(false)}} type="danger" 
                   class="btn btn-primary">Delete</button>
                   </td>
                   </tr>
               </tbody>
               }) 
               
               }
            </table>     
    );
}