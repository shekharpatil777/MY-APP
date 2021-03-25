import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App.jsx";
import {add,sub,div} from "./Calc";
import Card from "./Cards";
import Sdata from "./Sdata"

console.log(Sdata[0].sname);



ReactDOM.render(
    <App />,document.getElementById("root") 
);
