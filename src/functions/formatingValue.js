export function formatingValue(secInt,minInt,hrInt){
    let secStr=""
    let minStr=""
    let hrStr=""
    if (secInt<=9){  
      secStr = "0"+secInt.toString();
    }
    else{ 
      secStr = secInt.toString();
    }
    if (minInt<=9){  
      minStr ="0"+minInt.toString();
    }
    else{  
      minStr = minInt.toString(); 
    }
    if (hrInt<=9){  
      hrStr ="0"+hrInt.toString();
    }
    else{  
      hrStr = minInt.toString(); 
    }
    hrStr = hrInt.toString(); 
  return (hrStr+":"+minStr+":"+secStr)
}


