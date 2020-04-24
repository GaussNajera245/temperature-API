import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';

const Card = (props) => {
    let status = <h2 style={{textAlign:"center"}}>NO SIGNAL</h2>;
    let bkc = "#000000";
    const key = typeof(props.temp) !== "undefined";
    let sensorID = "";

    if( key ){
      const {temp} = props.temp;
      sensorID = props.temp.sensorID;

      if(temp && temp<=37.5) {
          bkc = '#41c847';
          status = (
          <>
              <Typography variant="h5" style={{fontWeight: 700, textAlign:"center"}}>
                  No fever detected
              </Typography>
              <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
                  {temp} °C
              </Typography>
          </>
          )
      }
      else if(temp && temp>=37.5){
        bkc = '#e41414';
        status = (
        <>
            <Typography variant="h5" style={{fontWeight: 700, textAlign:"center"}}>
                Fever detected, Careful !!!
            </Typography>
            <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
                {temp} °C
            </Typography>
        </>
        )
      }
      else if(typeof(props.temp) !== "undefined"){
        bkc = "#9c9696";
        status = (
        <>
          <Typography variant="h6" style={{fontWeight: 700, textAlign:"center"}}>
              Waiting for temperature reading...
          </Typography>
        </>
      )}
    }

    return (
      <Grid item xs={6} style={{textAlign:"start", padding:6, height:"46.5vh"}}>
        <Paper style={{height:"100%", backgroundColor: bkc, color:"white"}}>

        { key && <>
          <Typography variant="h4" style={{textAlign:"start", padding:15}}>
            Thermometer {sensorID}
          </Typography>
        </>}
            <br /> <br /> <br />
          {status}
        </Paper>
      </Grid>
    )
}
 
export default Card;