import React, {useState, useEffect}  from "react";

function ProbabilityOfGoals(){
    const [localLeague, setLocalLeague] = useState('');
    const [visitLeague, setVisitLeague] = useState('');
    const [goalsForLocal, setGoalsForLocal] = useState('');
    const [goalsAgainstLocal, setGoalsAgainstLocal] = useState('');
    const [goalsForVisit, setGoalsForVisit] = useState('');
    const [goalsAgainstVisit, setGoalsAgainstVisit] = useState('');
    const goals = [
        {
            local: 0,
            visit: 0,
            total: 0
        }
    ]

    useEffect(() => {
        goals.local = (goalsForLocal/localLeague)*(goalsAgainstVisit/localLeague)*localLeague;
        goals.visit = (goalsForVisit/visitLeague)*(goalsAgainstLocal/visitLeague)*visitLeague;
        goals.total = goals.local + goals.visit;
        console.log("local " + goals.local)
        console.log("visita " + goals.visit)
        console.log("total " + goals.total)
        isNaN(goals.local) ? document.getElementById("local").innerHTML = 0 : document.getElementById("local").innerHTML = goals.local;
        isNaN(goals.visit) ? document.getElementById("visit").innerHTML = 0 : document.getElementById("visit").innerHTML = goals.visit;
        isNaN(goals.total) ? document.getElementById("total").innerHTML = 0 : document.getElementById("total").innerHTML = goals.total;
        
    });
    
    return(
        <div className="Goals">
            <h1>Goles esperados en el partido</h1>
            <div>
                <p>Promedio de goles en la liga</p>
                <label>Local</label>
                <input
                onChange={event => setLocalLeague(event.target.value)}
                type="number"
                >
                </input>
                <label>Visita</label>
                <input
                onChange={event => setVisitLeague(event.target.value)}
                type="number">
                </input>
            </div>
            <div>
                <p>Promedio de goles del local</p>
                <label>A favor</label>
                <input
                onChange={event => setGoalsForLocal(event.target.value)}
                type="number"
                >
                </input>
                <label>En contra</label>
                <input
                onChange={event => setGoalsAgainstLocal(event.target.value)}
                type="number">
                </input>
            </div>
            <div>
                <p>Promedio de goles del visitante</p>
                <label>A favor</label>
                <input
                onChange={event => setGoalsForVisit(event.target.value)}
                type="number"
                >
                </input>
                <label>En contra</label>
                <input
                onChange={event => setGoalsAgainstVisit(event.target.value)}
                type="number">
                </input>
            </div>
            <div>
                <p>Goles esperados local:</p>
                <p id="local"> </p>
                <p>Goles esperados visita:</p>
                <p id="visit"> </p>
                <p>Goles totales: </p>
                <p id="total"></p>
            </div>
        </div>
    );
}

export {ProbabilityOfGoals};