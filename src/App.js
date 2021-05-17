// React
import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import Grid from '@material-ui/core/Grid';
 import { Container } from '@material-ui/core';
// Styles
import "./App.css";

let globalEndCronometer = false;
let i = 0;

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
    const [cronometer, setCronometer] = useState(0);
    const classes        = useStyles();

//JS
    async function chronometerStart(){
      globalEndCronometer = false;
      while ((globalEndCronometer===false)){
        // console.log("value of endCronometer is ");console.log(globalEndCronometer);
        setCronometer(i + 1);
        // console.log("cronometer value " + cronometer)
        i = i + 1;
        await delay(1);
      }
      return 0 ;
    }

    function chronometerPause(){
      globalEndCronometer = true;
    }

    function chronometerEnd(){
      // console.log("entro al end cronometer ");
      globalEndCronometer = true;
      // console.log(globalEndCronometer);
      i = 0;
      setCronometer(0);
    }
    
    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }
  // function probarApi(){
  //   console.log("Estamos en react probaremos la api")
  //   fetch('http://localhost:3000/notes')
  //   .then(response => response.json())
  //   .then(data => this.setState({ totalReactPackages: data.total }));
  // }
 
  return (
      <Grid container spacing={250} className={classes.grid}>
        <Container className={classes.container}>
            <h1> APP DE CRONOMETRO</h1>
            <h1>{cronometer}</h1>
                <Button  className={classes.button} onClick={() => chronometerStart()}>START</Button>
                <Button  className={classes.button} onClick={() => chronometerPause()}>PAUSE</Button>
                <Button  className={classes.button} onClick={() => chronometerEnd()}>END</Button>
            {/* <button onClick={probarApi()}>PROBAR API</button> */}
        </Container>
      </Grid>
  );
}

// export default withAuthenticator(App);
export default App;
