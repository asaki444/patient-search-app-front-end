import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { bgcolor } from '@material-ui/system';

const StyledBox = withStyles({
   root: {
      boxShadow: '0 3px 5px 2px gray',
      color: 'white',
      padding:  ' 20px 30px',
      marginTop: '30px',
      borderRadius: 3,
      verticalAlign: 'center',
      backgroundColor: '#e57373'
   }
 })(Box)

 
function Error (props) {

   return(
      <StyledBox>
          {props.message}
      </StyledBox>
   )

}


export default Error;