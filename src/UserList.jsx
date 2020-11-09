import React from 'react'

function UserList(props){
    
    let allUserList = props.users.map(each => <li>{each.firstName} {each.lastName}</li>)

    let locationList = props.currentLocationData.map(each => <li>{each.firstName} {each.lastName}</li> )

    
    

    return(
        <div>
            <input type="text" name="userSearchBox" id="userSearchBox" onChange={props.onChange}/>
            <button onClick={props.onClick}>Search ID</button>
            <button onClick={props.onLocationClick}> View by location </button>
            <ol>
                {allUserList}
            </ol>
            <h1>{ props.currentUserData[0] ? props.currentUserData[0].firstName : ''}</h1> 
            <h3>Location Specific List</h3>
           <ul>
             {locationList}
           </ul>

        </div>
    )

}

export default UserList;