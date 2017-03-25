import React from 'react';
import { ListGroup } from 'react-bootstrap';



import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoStatus from './TodoStatus';



class TodoList extends React.Component {

	constructor() {
		super();
		this.state = {
			items:[],
			currentStatus:""
		};
	}

	handleAddItem(name) {
		console.log("TodoList handleAddItem", name);
		if(name != ""){
			const newItems = this.state.items.concat({name:name, done:false});
			this.setState({items: newItems , currentStatus: "New wish added to list" });

		} else {
			this.state.currentStatus = "";	
		}
		console.log(this.state.currentStatus)
	}

	handleToggleDone(item){
		console.log(item);

		const newItems = this.state.items.slice();
		newItems[newItems.indexOf(item)].done = !item.done;

		this.setState({items: newItems, currentStatus: item.done ? "Congradulations!!" : "Work harder!!" });

	}

	handleItemDelete(item){
		console.log(item);

		const newItems = this.state.items.slice();
		var itemIndex = newItems.indexOf(item);
		if(itemIndex != -1) {
			newItems.splice(itemIndex, 1);
		}
		console.log('State length', this.state.items.length);
		console.log('post delete length', newItems.length);
		
		this.setState({items: newItems, currentStatus: "Sucessfully Deleted"});

	}

	handleStatusClear(){

		this.setState({currentStatus: ""});
	
	}

	render() {
	
		return ( 
			<div>

				<TodoInput onAddItem={this.handleAddItem.bind(this)} />		
				<hr className="my-4"/>		
				<ListGroup> 
					{ this.state.items.map(item => <TodoItem name={item.name} done={item.done} onItemDelete={this.handleItemDelete.bind(this, item)} onToggleDone = {this.handleToggleDone.bind(this, item)}/>)}
				</ListGroup>


				<TodoStatus status={this.state.currentStatus} onStatusClear={this.handleStatusClear.bind(this)}/>

				{/*<span > {this.state.currentStatus} </span>*/}
			</div>
		);
	}
}

export default TodoList;