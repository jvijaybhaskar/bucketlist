import React from 'react';
import { Button } from 'react-bootstrap';

class TodoInput extends React.Component {
	handleSubmit(event){
		event.preventDefault();
		console.log("method called" + this.refs.input.value);
		this.props.onAddItem(this.refs.input.value);
		this.refs.input.value = "";
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className ="form-inline">
				<input type="text" ref="input" className="form-control" aria-describedby="emailHelp" placeholder="Enter your bucket list items" />
				<Button onClick = {this.handleSubmit.bind(this)}>Add</Button>
			</form>
		);
	}
}

export default TodoInput;