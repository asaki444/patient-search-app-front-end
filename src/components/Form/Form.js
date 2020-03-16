import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const StyledButton = withStyles({
  root: {
    background: '#efefef',
    alignItems: 'bottom'
  }
})(Button)

const StyledTextField = withStyles({
  root: {
    marginLeft: "10px",
    marginRight: "10px"
  }
})(TextField)

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event_code: '',
      patient_name: '',
      date: '',
      patients: []
    };
  }

  
  
  handleChange = (event) => {
    const key = event.target.id
    this.setState({[key]: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const {selected, search_text} = this.state;
    if (search_text !== "") {
      axios
        .get(`http://localhost:3000/patients/${selected}/${search_text}.json`)
        .then(response => {
          this.setState({patients: response.data.patients})
        })
        .catch(function (error) {
          console.log(error);
        })

    
  }
  }
  render() {
    const {selected, text, patients} = this.state;

    return (
          <form className="field-spacing" onSubmit={this.handleSubmit}>     
          <StyledTextField label="Event Code" />
          <StyledTextField  label="Patient Name" />
          <StyledTextField id="date-field" InputLabelProps={{ shrink: true }} label="date" type="date"/>
  
          <StyledButton id="button-search" label="search" type="submit" value="Search">
            Search
            </StyledButton>
       
              
        </form>
   
     
  
    )
  }

}

export default Form;