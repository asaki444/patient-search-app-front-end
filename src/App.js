import React from 'react';
import './App.css';
import axios from 'axios';
import PatientTable from './components/PatientTable/PatientTable';
import NotFound from './components/NotFound/NotFound';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'event_code', 
      search_text: '',
      patients: []
    };
  }

  handleChange = (event) => {
    const key = event.target.id
    this.setState({ [key]:  event.target.value})
  }


  handleSubmit = (event)=> {
   event.preventDefault();
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
   else{
     
   alert("Please enter text in search field")
   }

  


}


  render () {
    const{
      selected,
      text,
      patients
    }  = this.state;

    return (
      <div className="search_div">
        <h2>Patients Search Web App</h2>
      <form onSubmit={this.handleSubmit}>
          <label>
            Search by:
            <select id="selected" value={selected} onChange={this.handleChange}>
              <option value="event_code">Event Code</option>
              <option value="patient_name">Patient Name</option>
            </select>
          </label>
       
          <input type="text" id="search_text" value={text} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {patients ? <PatientTable patients={patients}/> : <NotFound/>}
  
      </div>
    )
  } 
  
}

export default App;