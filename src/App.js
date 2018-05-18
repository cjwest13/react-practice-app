import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age :28},
      {name: 'CJ', age: 25},
      {name: 'Anna', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DONT DO THIS this.state.persons[0].name = 'Clifton';
    this.setState({
      persons: [
		    {name: 'Max', age :28},
		    {name: newName, age: 25},
		    {name: 'Anna', age: 26}
	    ]
    } )
  }

  nameChangedHandler = (event) => {
	  this.setState({
		  persons: [
			  {name: 'Max', age :28},
			  {name: event.target.value, age: 25},
			  {name: 'Anna', age: 26}
		  ]
	  } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'

    };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style={style}
            onClick={() => this.switchNameHandler('CliftonOMG')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Clifton!!!')}
            changed={this.nameChangedHandler}> My hobbies Racing! </Person>
          <Person
            name={this.state.persons[2].name}
                  age={this.state.persons[2].age}/>
      </div>
    );
      // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Does this work now?'));
  }
}
export default App;
