 export const RowComponent = (props) =>{
    // const {id} = props
    const keys = []
    for(var i=0;i<localStorage.length; i++){
        if(localStorage.key(i)!=null){
            keys.push(localStorage.key(i))
        }
    }
    console.log(keys)
    
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
                   <td><button type="submit" 
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