import React from 'react';

class TodoItem extends React.Component {
	render() {
		return (
			<li > 
				<a href="#" onClick = { this.props.onItemDelete } > Delete </a>
				<span style={{ textDecoration: this.props.done ? 'line-through' : 'none'}}>{ this.props.name }</span>
				<a href="#" onClick = { this.props.onToggleDone }> { this.props.done ? 'Mark as not done' : 'Mark as done' } </a>

			</li>
		);
	}
}

export default TodoItem;