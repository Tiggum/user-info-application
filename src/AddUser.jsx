import React from 'react'

function AddUser(props){
    
    return(
        <form action='http://localhost:3001/addUser' method='post'>
            <input type= "text" id='firstName' name='firstName' placeholder='First Name'/>
            <input type= "text" id= 'lastName' name='lastName' placeholder='Last Name'/>
            <input type= "text" id= 'location' name='location' placeholder= 'Location'/>
            <input type= "number" id='yearsAsAUser' name='yearsAsAUser' placeholder= 'Years as a User'/>
            <input type= "number" id='userID' name='userID' placeholder= 'userID'/>
            <input type='submit'/>
        </form>
    )
}


export default AddUser