import React from 'react';

class TodoInput extends React.Component {
	handleSubmit(event){
		event.preventDefault();
		//console.log("method called" + this.refs.input.value);
		this.props.onAddItem(this.refs.input.value);
		this.refs.input.value = "";
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="input"/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoInput;