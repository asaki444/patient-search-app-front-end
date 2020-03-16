import React from 'react';
import './App.css';
import axios from 'axios';
import NotFound from './components/NotFound/NotFound';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Form from './components/Form/Form';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false
    };
  }


  render() {

    return (
      <div className="search_div">
        <h2>Patients Search Web App</h2>
           <p>
             Use the form below to search for patient information:
             </p>
           <Form />
      </div>
    )
  }

}

export default App;