import React,{Component} from 'react';
import './App.css'
import {People} from './People'
import Cardlist from './Cardlist';
import Search from './Search';
import Scroll from './Scroll';
class App extends Component {
	constructor(){
		super();
		this.state = {
			People: People,
			searchField:""
		}
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}
	render(){
		const filteredPeople = this.state.People.filter( person => {
			return person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.People.length===0){
			return <h1>Loading . . .  .</h1>
		}else{
			return(
			 <div className="tc">
			 	<h1 className='f1'> Be Superior </h1>
				<Search onChange={this.onSearchChange}/>
				<Scroll>
			 		<Cardlist People={filteredPeople} />
			 	</Scroll>
			 </div>
		)
	}
	}
}
export default App;