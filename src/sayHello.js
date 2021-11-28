import React from "react";

function Hello(){
    const sayHello = () => {
        console.log("hello");
      };
    return(
        <div>
            <h2>This is the hello component</h2>
            <button onCLick={sayHello}>Say hello</button>
        </div>
    );
}

export default Hello;