import React , {Component} from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

 class App extends Component{
	constructor()
  {
  	super()
  	this.state={
  		robot : [],
		searchfield : " "
         }
  	} 

  	componentDidMount(){
  		fetch("https://jsonplaceholder.typicode.com/users")
  		.then(response=> response.json())
  		.then(users=> this.setState({robot:users}));
  	
  	}

  	onSearchChange= (event) =>  {
  		this.setState({ searchfield: event.target.value })
  	   	}

  render()  {
  		 const filteredrobot=this.state.robot.filter(robot=>{
  	 	 	return  robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  	 	 })
  	 	
			return(
		<div className="tc">
			<h1 className='f1'>RoboFriends</h1>
			<Searchbox searchChange={this.onSearchChange}/>
			<Scroll>
			  	<Cardlist robot={filteredrobot} />
			 </Scroll>
		</div>
		);
	}

}



export default App;
