import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'jaskd', name: 'Max', age :28},
      {id: 'wqjnq', name: 'CJ', age: 25},
      {id: '2131', name: 'Anna', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

	  this.setState( {persons: persons });
  };

  deletePersonHandler = (personIndex) => {
      //both makes copies of the state persons array
      //const persons = this.state.persons.slice();
      //spreads out array items to a list
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});

  };

    /**
     * A function that determines that if the
     * showPersons variable is true/false in the state,
     * then set the showPersons variable using the setState syntax
     * to the opposite of doesShow local variable
     */
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  };

  render() {
    //Inline styling
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    //Prefer way of outputing condition content
    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
                })}
            </div>
        );
        //Changing background of color
        style.backgroundColor ='red';
    }

    //representing classes in the App.css file
    //dynamically adding and assigning css classes
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes =['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red'. 'bold']
    }


    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
      </div>
    );
      // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Does this work now?'));
  }
}
export default App;
