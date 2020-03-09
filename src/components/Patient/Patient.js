import React from 'react';
import './Patient.css'

function Patient(props) {
    let d = new Date(props.event_date)
    const formatted_date = (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear()
    return (
     <tr className="patient_div">
          <td> {props.patient_name} </td>
             <td>
               {props.patient_age}
             </td>
             <td>
               {props.event_code}
             </td>
            <td>
                {formatted_date}
            </td>
            <td>
                 {props.code_category}
            </td>
      
    </tr>
    )
 
  }


  export default Patient