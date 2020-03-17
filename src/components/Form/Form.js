import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Error from '../Error/Error';


const StyledButton = withStyles({
  root: {
    background: '#efefef',
    alignItems: 'bottom'
  }
})(Button)

const StyledTextField = withStyles({
  root: {
    marginLeft: "10px",
    marginRight: "10px",
    alignItems: 'bottom'
  }
})(TextField)


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'patient_name',
      search_text: '',
      patients: [],
      showError: false
    };
  }

  
  
  handleChange = (event) => {
    console.log(event.target.id)
    const key = event.target.id
    this.setState({[key]: event.target.value,
                  showError: false})
  }
 
  formValidation = () => {
    for(let i in this.state){
       if(this.state[i] !== "" && i !== 'showError'){
         return
       }
    }
     this.setState({
       showError: true
     })
  }


 
    handleSubmit = (event)=> {
      event.preventDefault();
      this.formValidation();
      const {selected, search_text} = this.state;

      if(search_text !== ""){
       axios.get(`http://localhost:3000/patients/${selected}/${search_text}.json`).then( response => {
         console.log(response.data)
          this.setState({
            patients: response.data.patients
          })
       })
       .catch(function (error) {
         console.log(error);
       })
   
      }
    }

  render() {
    const {selected, search_text, showError} = this.state;
   console.log(showError)
    return (
      <>
          <form className="field-spacing" onSubmit={this.handleSubmit}>     
          
         <Select
          native
          value={selected}
          id="selected"
          onChange={this.handleChange}
          label="Search By"
        >
          <option  value="patient_name">Patient Name</option>
          <option  value="event_code">Event Code</option>
        </Select>
        <StyledTextField id="search_text" value={search_text} onChange={this.handleChange}/>
  
          <StyledButton id="button-search" label="search" type="submit" value="Search">
            Search
            </StyledButton>      
        </form>

         {showError && <Error message={"uh oh, looks like nothing is entered"}/>}
    </>
    )
  }

}

export default Form;