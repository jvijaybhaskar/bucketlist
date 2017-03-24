import React from 'react';


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
			this.setState({items: newItems , currentStatus: "New state added" });

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
				<ul> 
					{ this.state.items.map(item => <TodoItem name={item.name} done={item.done} onItemDelete={this.handleItemDelete.bind(this, item)} onToggleDone = {this.handleToggleDone.bind(this, item)}/>)}
				</ul>


				<TodoStatus status={this.state.currentStatus} onStatusClear={this.handleStatusClear.bind(this)}/>

				{/*<span > {this.state.currentStatus} </span>*/}

				
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<hr/>
				<span> Pending Feature list</span>
 				<ul>
 					<li> Done:Delete list item </li>
 					<li> Done:Update status based on action </li>
 					<li> Edit bucket list </li>
					<li> Auto hide status</li>
					<li> Persist/Update list in backend</li>
					<li> Improve look and feel</li>
					<li> </li>
				</ul>


			</div>
		);
	}
}

export default TodoList;