import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

// Functional component example with hooks
const App = () => {
  // use of useState hook: 'characters' is state variable, 'setCharacters' is function to manipulate it and can be called anywhere
  // and empty array inside useState() is the initial value of characters.
  // for any manipulation of characters >> setCharacters will be used.
  const [characters, setCharacters] = useState([]);

  // To understand JSX: use of variable is also shown
  const varForJSX = 'I am getting passed to JSX';
  const simpleJSX = (
    <h7>
      {' '}
      This is simple JSX with one js variable 'name' : {varForJSX} ---> Data
      from var
    </h7>
  );

  // Function to call setCharacters on addition and removal of characters.
  const callSetCharacters = (charOrIndex, add) => {
    if (add) setCharacters([...characters, charOrIndex]);
    // during addition call: charOrIndex is the new character
    else
      setCharacters([
        ...characters.filter((chrtr, idx) => idx !== charOrIndex),
      ]); // during removal call: charOrIndex is index of removed character
  };

  return (
    <div className='container'>
      <h1>Let's Build Basic React App!</h1>
      <h5>
        We will learn: JSX, Props, State, Class and Functional Component, Child
        Component, Communication between components, conditional rendering,
        inline styling and useState() React hook
      </h5>
      ===================================================================================================================
      <br /> {/* We can use HTML tags too */}
      Below line is rendering a simple JSX:
      <br />
      {simpleJSX} {/* Using simple JSX  declared above */}
      ===================================================================================================================
      <h5>
        Will show table of Users below:{' '}
        {characters && characters.length /* conditional rendering */ ? (
          /* communication between componets using props: charData is being passed to Table */
          <Table charData={characters} removeCharacter={callSetCharacters} />
        ) : (
          <span style={{ color: '#F5B7B1' }}>
            No User Data entered yet! Enter Name and Job to see the data in the
            Table.
          </span>
        )}
      </h5>
      ===================================================================================================================
      <h5>Here is the form to enter user details:</h5>
      {/* communication between componets using props: addCharacter is being passed to Form(Child), where on invoking 
          it will add character to character state variable of this App component(Parent) */}
      <Form addCharacter={(char, add) => callSetCharacters(char, add)} />
      {/* extra parameter 'add' added to diffrentiate the addition call from removal */}
    </div>
  );
};

export default App;
