import React from 'react';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting ='';
let cssStyle ={ };


if(curDate >=1 && curDate <12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}else if (curDate >=12 && curDate <18){
  greeting = 'Good Afternoon'
  cssStyle.color = 'Orange';
}else{
  greeting = 'Good Night';
  cssStyle.color = 'black';

}

function Heading(){
    return <h1>Hello Sir/Ma'am, <span style={cssStyle}> {greeting} </span> </h1>
};
export default Heading;