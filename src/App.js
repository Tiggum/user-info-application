import React from 'react';
import './App.css';
import UserList from './UserList'
import AddUser from './AddUser'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      locations: [],
      currentUser: '',
      currentUserData: {},
      currentLocationData: []

    };
  }

 
  async componentDidMount() {
    const response = await fetch(`http://localhost:3001/users`);
    const json = await response.json();
    this.setState({users: json});
  }


  getUser(e) { 
    let user = this.state.users.filter(each => each.userID === parseInt(this.state.currentUser))
    this.setState({ currentUserData: user})
 }
 

  changeCurrentUser(e) {
    let newValue = e.target.value
    console.log("var newValue:", newValue)
    this.setState({currentUser: newValue})
 } 

  getLocation() {
    let location = this.state.users.filter(each => each.location === this.state.currentUser)
    this.setState({ currentLocationData: location})
  }
  
  render(){
    return (
      <div className="App">
        <UserList users = {this.state.users} currentUserData = {this.state.currentUserData} onClick={this.getUser.bind(this)} onChange={this.changeCurrentUser.bind(this)} onLocationClick={this.getLocation.bind(this)} currentLocationData={this.state.currentLocationData}/>
        <AddUser />
      </div>
    );
  }
  
}

export default App;
