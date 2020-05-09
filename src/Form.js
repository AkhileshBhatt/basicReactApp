import React from 'react';

// Class component example
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // State variable to hold the "current state of this component"
      name: '',
      job: '',
    };
  }

  // function gets called on any input chnage in the input fields
  handleChange = (event) => {
    const { name, value } = event.target;
    // Changing state of this component by using setState
    this.setState({
      [name]: value,
    });
  };

  // function getting called on submit button click
  submitForm = () => {
    const { addCharacter } = this.props;
    const { name, job } = this.state;
    // A simple validation example before submitting the data
    if (name && job) {
      // checking whether there is data in name and job?
      // calling Grand Parent(App.js) function to change it's state: which will reflec change in App and Table
      addCharacter(this.state);
      this.resetData();
    } else {
      this.setState({
        namePlaceHolder: name ? null : 'Please Enter Name...',
        jobPlaceHolder: job ? null : 'Please Enter Job...',
      });
    }
  };

  // function called to reset data
  resetData = () => {
    this.setState({
      name: '',
      job: '',
      namePlaceHolder: null,
      jobPlaceHolder: null,
    });
  };

  render() {
    const { name, job, namePlaceHolder, jobPlaceHolder } = this.state;

    return (
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          placeholder={namePlaceHolder}
          id='name'
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor='job'>Job</label>
        <input
          type='text'
          placeholder={jobPlaceHolder}
          name='job'
          id='job'
          value={job}
          onChange={this.handleChange}
        />
        <input type='button' value='Submit' onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
