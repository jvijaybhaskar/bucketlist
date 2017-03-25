import React from 'react';


import Header from './Header';
import TodoList from './TodoList';
import Footer from './FooterContent';

class App extends React.Component {
	render() {
		return (

			<div>
				<div className ='jumbotron'> 
					<div className = "container">
						<Header /> 
						<TodoList />
					</div> 
				</div>
				<Footer />
			</div>

		);

	
	}
}

export default App;