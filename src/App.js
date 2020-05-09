import React from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

// Class component example
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  // To understand JSX: use of variable is also shown
  varForJSX = 'I am getting passed to JSX';
  simpleJSX = (
    <h7>
      {' '}
      This is simple JSX with one js variable 'name' : {this.varForJSX} --->
      Data from var
    </h7>
  );

  addCharacter = (char) => {
    const { characters } = this.state;
    this.setState({ characters: [...characters, char] });
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((char, idx) => idx !== index),
    });
    console.log(characters);
  };

  render() {
    const { characters } = this.state;

    return (
      <div className='container'>
        <h1>Let's Build Basic React App!</h1>
        <h5>
          We will learn: JSX, Props, State, Class and Functional Component,
          Child Component, Communication between components, conditional
          rendering, inline styling
        </h5>
        ===================================================================================================================
        <br /> {/* We can use HTML tags too */}
        Below line is rendering a simple JSX:
        <br />
        {this.simpleJSX} {/* Using simple JSX  declared above */}
        ===================================================================================================================
        <h5>
          Will show table of Users below:{' '}
          {characters && characters.length /* conditional rendering */ ? (
            /* communication between componets using props: charData is being passed to Table */
            <Table
              charData={characters}
              removeCharacter={this.removeCharacter}
            />
          ) : (
            <span style={{ color: '#F5B7B1' }}>
              No User Data entered yet! Enter Name and Job to see the data in
              the Table.
            </span>
          )}
        </h5>
        ===================================================================================================================
        <h5>Here is the form to enter user details:</h5>
        {/* communication between componets using props: addCharacter is being passed to Form(Child), where on invoking 
          it will add character to character state variable of this App component(Parent) */}
        <Form addCharacter={(char) => this.addCharacter(char)} />
      </div>
    );
  }
}

export default App;
