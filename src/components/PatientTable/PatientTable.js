import React from 'react';
import Patient from '../Patient/Patient';
import './PatientTable.css'

function PatientTable (props) {
   
    return(
       <table className="patient_table">
           <tbody>
           <tr>
               <th>
                   Name:
               </th>
                <th>
                    Age:
                </th>
                <th>
                    Event Code:
                </th>
                <th>
                    Event Date:
                </th>
                <th>
                    Code Category:
                </th>
           </tr>
       {props.patients.map( patient => <Patient 
        patient_name={patient.patient_name} 
        patient_age={patient.patient_age} 
        event_code={patient.event_code}
        event_date={patient.event_date}
        code_category={patient.code_category}
        />) }
        </tbody>
       </table>
    )
}

export default PatientTable;