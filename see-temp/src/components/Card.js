import React, { useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';

const Card = ({id, temp}) => {

    const [currentColor, setColor] = useState('#9c9696');
    let status;

    if(temp && temp<=37.5){
        setColor('#41c847');
        status = (
        <>
            <Typography variant="h5" style={{fontWeight: 700, textAlign:"center"}}>
                No fever detected
            </Typography>
            <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
                {temp}
            </Typography>
        </>
        )

        setTimeout(()=>{
            setColor('#9c9696');
            status = (<>
                <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
                    Waiting for temperature Reading...
                </Typography>
            </>)
        },3000);
    }


    return (
      <Grid item xs={6} style={{textAlign:"start", padding:6, height:"46.5vh"}}>
        <Paper style={{height:"100%", backgroundColor: currentColor, color:"white"}}>
          <Typography variant="h4" style={{textAlign:"start", padding:15}}>
            Termometer {id}
          </Typography>
            <br /> <br /> <br />
          <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
            Waiting for temperature Reading...
          </Typography>

        </Paper>
      </Grid>
    )
}
 
export default Card;