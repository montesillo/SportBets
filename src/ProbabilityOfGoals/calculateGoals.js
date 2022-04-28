import React, {useState, useEffect} from "react";

//const goalsCalculate = React.createContext();

function calculateGoals(){

    return(
        <div>
            <p>Goles esperados local: {goals.local}</p>
            <p>Goles esperados visita: {goals.visit}</p>
            <p>Goles totales: {goals.total}</p>
        </div>
    )
}

export {calculateGoals};