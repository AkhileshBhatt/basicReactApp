import React from 'react';

// Functional component example
const TableHeader = () => {
  return (
    <thead>
      <tr style={{ backgroundColor: 'lightblue' }}>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// Functional component example
const TableBody = (props) => {
  const { charData, removeCharacter } = props;

  // Mapping over the charData to put make table row out of it.
  const rows = charData.map((data, index) => (
    <tr
      key={index}
      style={{ backgroundColor: index % 2 === 0 ? 'lightGrey' : 'white' }} // Conditional styling
    >
      <th>{data.name}</th>
      <th>{data.job}</th>
      <th style={{ backgroundColor: '#eafaf1' }}>
        <button onClick={() => removeCharacter(index)}>Delete</button>
      </th>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

// Functional component example
const Table = (props) => {
  const { charData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      {/* Passing props further down to child component */}
      <TableBody charData={charData} removeCharacter={removeCharacter} />
    </table>
  );
};

export default Table;
