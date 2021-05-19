// React
import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import Grid from '@material-ui/core/Grid';
 import { Container } from '@material-ui/core';
// Styles
import "./App.css";

let endCronometer = false;
let i = 0;
let j= 0;
let k = 0;

function App() {
//Styles
    const useStyles = makeStyles({
      button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
      grid: {
        background: 'linear-gradient(45deg, #552586 30%, #804FB3 90%)',
        height    : "1000px",
        width     : "100%",
        
      },
      container: {
        height    : "400px",
        width     : "50%"
      }
    });
   

  
//Hooks
    const [cronometerHr, setCronometerHr] = useState(0);
    const [cronometerMin, setCronometerMin] = useState(0);
    const [cronometerSec, setCronometerSec] = useState(0);
    const [auxHr,setAuxHr] = useState("0");
    const [auxMin,setAuxMin] = useState("0");
    const [auxSec,setAuxSec] = useState("0");
    
  
    const classes        = useStyles();

//JS
//START Chronometer Start & associated functions :
    async function chronometerStart(test,secP,minP,hrP){
      endCronometer = false;
      while ((endCronometer===false)){
          // console.log("value of endCronometer is ");console.log(endCronometer);
          if ((!test) & (i!=secP)) {
              setCronometerSec(i + 1)
          }
          // console.log("cronometer value " + cronometer)
          i = i + 1;
          if (!test){
            cleanAuxs();
            noTestingF(secP,minP,hrP);
          }
          // console.log("resultado divi");console.log(i%secP)
          generalF(secP,minP,hrP)
          if (!test){
            await delay(1);
          }
      }
      return 0 ;
    }

    function cleanAuxs(){
      if (i>9){
        setAuxSec("")
      }
      if (j>9){
        setAuxMin("")
      }
      if (k>9){
        setAuxHr("")
      }
    }

    function noTestingF(secP,minP,hrP){
      if (i%secP==0){
        setCronometerMin(j+1)
      }
      if ((j%minP==0) & (j>0)){ 
        setCronometerHr(k+1)   
      }     
      if (i==secP){              
        setCronometerSec(0);setAuxSec(0)
      }
      if (j==minP){             
         setCronometerMin(0);setAuxMin(0)
      }
    }

    function generalF(secP,minP,hrP){
      if (i%secP==0){
        j=j+1
      }
      if ((j%minP==0) & (j>0)){
        k=k+1
      }
      if (i==secP){
        i=0 
      }
      if (j==minP){
         j=0 
      }
    }
//END Chronometer Start & associated functions :






    function chronometerPause(){
      endCronometer = true;
    }

    function chronometerEnd(){
      // console.log("entro al end cronometer ");
      endCronometer = true;
      // console.log(endCronometer);
      let sec=""
      let min=""
      let hr=""
      let send = ""
      if (i<=9){  
        sec = "0"+i.toString();
      }
      else{ 
        sec = i.toString();
      }
      if (j<=9){  
        min ="0"+j.toString();
      }
      else{  
        min = j.toString(); 
      }
      if (k<=9){  
        hr ="0"+k.toString();
      }
      else{  
        hr = j.toString(); 
      }
      hr = k.toString(); 
      send = hr+":"+min+":"+sec;
      console.log("enviar vale ") ;console.log(send)
      i = 0;
      j = 0;
      k = 0;
      setCronometerSec(0);
      setCronometerMin(0);
      setCronometerHr(0);

      probarApi(send);
    }
    
    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }

    function probarApi(send){
      console.log("Estamos en react probaremos la api dx")

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: 24, duration: send })
    };

      console.log("requestopt valen")
      console.log(requestOptions);

      fetch('http://localhost:8070/chronometers',requestOptions)
      .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    }
 
  return (
      <Grid container spacing={250} className={classes.grid}>
        <Container className={classes.container}>
            <h1> APP DE CRONOMETRO</h1>
            <h1>{auxHr}{cronometerHr}:{auxMin}{cronometerMin}:{auxSec}{cronometerSec}</h1>
                <Button  className={classes.button} onClick={() => chronometerStart(false,12,12,12)}>START</Button>
                <Button  className={classes.button} onClick={() => chronometerPause()}>PAUSE</Button>
                <Button  className={classes.button} onClick={() => chronometerEnd()}>END</Button>
            {/* <button onClick={() => probarApi()}>PROBAR API</button> */}
        </Container>
      </Grid>
  );
}

// export default withAuthenticator(App);
export default App;
