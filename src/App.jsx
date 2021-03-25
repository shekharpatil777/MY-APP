import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import add from "./Calc";
import {sub,div} from "./Calc";
import Sdata from "./Sdata";
import Card from "./Cards"

const App = ()=> (
    <>
        <h1 className="heading_style"> List of top 5 Netflix series</h1>
         {Sdata.map((val,index)=>{

         console.log(index);
        return(
            <Card 
            key ={val.id}
            imgsrc={val.imgsrc}
            title = {val.title}
            sname={val.sname}
            link={val.link}
            />
         );
        }
         )}
         </>
  );


export default App;