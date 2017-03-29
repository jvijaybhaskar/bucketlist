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
			draftItems:[],
			deletedItems:[],
			doneItems:[],
			currentStatus:"",
			maxListSize: 5
		};
	}

	handleAddItem(name) {
		console.log("TodoList handleAddItem", name);
		if(name != "" && this.state.items.length < this.state.maxListSize){
			const newItems = this.state.items.concat({name:name, done:false});
			this.setState({items: newItems , currentStatus: "New item added to list" });

		} else {
			
			if(name != "" && this.state.items.length >= this.state.maxListSize){
				const draftItems = this.state.draftItems.concat({name:name, done:false});
				this.setState({currentStatus: "Limit Reached, moving new item to draft", draftItems: draftItems });
				console.log('Items in draft list', this.state.draftItems.length);
			}else{	
				this.setState({currentStatus: "" });
			}

		}
		console.log(this.state.currentStatus)
	}

	handleToggleDone(item){
		console.log(item);

		const newItems = this.state.items.slice();
		newItems[newItems.indexOf(item)].done = !item.done;

		this.setState({items: newItems, currentStatus: item.done ? "Congradulations!!" : "Work harder!!" });

	}

	handleItemDelete(item, listType){
		console.log(item);

		var newItems = [];
		if(listType == 'draft') {
			newItems = this.state.draftItems.slice();
		} else {
			newItems = this.state.items.slice();
		}
		var itemIndex = newItems.indexOf(item);
		if(itemIndex != -1) {
			newItems.splice(itemIndex, 1);
		}
		//console.log('State length', this.state.items.length);
		//console.log('post delete length', newItems.length);
		
		if(listType == 'draft') {
			this.setState({draftItems: newItems, currentStatus: "Sucessfully deleted from Draft lists"});
		} else {
			this.setState({items: newItems, currentStatus: "Sucessfully deleted from Active list"});
		}
		
	}

	handleStatusClear(){

		this.setState({currentStatus: ""});
	
	}

	render() {
	
		return ( 
			<div>

				<TodoInput onAddItem={this.handleAddItem.bind(this)} />		
				<hr className="my-4"/>		

				{/*Current list items*/}

				<div className = { this.state.items.length <= 0 ? "hidden" : "" }>
					<h3> Active Items </h3>
					<ListGroup> 
						{ this.state.items.map(item => <TodoItem name={item.name} done={item.done} onItemDelete={this.handleItemDelete.bind(this, item)} onToggleDone = {this.handleToggleDone.bind(this, item)}/>)}
					</ListGroup>
				</div>

				{/*Draft list items*/}
				<div className = {this.state.draftItems.length <= 0 ?  "hidden" : "" }>
					<h3> Draft Items </h3>
					<ListGroup> 
						{ this.state.draftItems.map(item => <TodoItem name={item.name} done={item.done} type='draft' onItemDelete={this.handleItemDelete.bind(this, item, 'draft')} />)}
					</ListGroup>
				</div>

				<TodoStatus status={this.state.currentStatus} onStatusClear={this.handleStatusClear.bind(this)}/>

				{/*<span > {this.state.currentStatus} </span>*/}
			</div>
		);
	}
}

export default TodoList;