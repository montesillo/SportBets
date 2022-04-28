import React, {useState, useEffect} from "react";

function ProbabilityCorners(){
    const [localCorners, setLocalCorners] = useState('');
    const [localCornersFavor, setLocalCornersFavor] = useState('');
    const [localCornersAgainst, setLocalCornersAgainst] = useState('');
    const [visitCorners, setVisitCorners] = useState('');
    const [visitCornersFavor, setVisitCornersFavor] = useState('');
    const [visitCornersAgainst, setVisitCornersAgainst] = useState('');

    useEffect(() => {
        let cornersLocal = (parseFloat(localCorners) + parseFloat(visitCorners)) / 2;
        let cornersVisit = (parseFloat(localCornersFavor) + parseFloat(visitCornersAgainst));
        let cornersTotal = (cornersLocal + cornersVisit)/2;
        
        let cornersLocalDos = (parseFloat(localCorners) + parseFloat(visitCorners) + parseFloat(localCornersAgainst)) / 3;
        let cornersVisitDos = (parseFloat(localCornersFavor) + parseFloat(visitCornersAgainst) + parseFloat(visitCornersFavor));
        let cornersTotalDos = (cornersLocalDos + cornersVisitDos)/3;

        let cornersTotalTres = (cornersLocalDos + cornersVisitDos)/2;

        isNaN(cornersTotal) ? document.getElementById("corners").innerHTML = 0 : document.getElementById("corners").innerHTML = cornersTotal;
        isNaN(cornersTotal) ? document.getElementById("cornersDos").innerHTML = 0 : document.getElementById("cornersDos").innerHTML = cornersTotalDos;
        isNaN(cornersTotal) ? document.getElementById("cornersTres").innerHTML = 0 : document.getElementById("cornersTres").innerHTML = cornersTotalTres;
    });

    return(
        <div className="Corners">
            <h1>Corners esperados en el partido</h1>
            <div>
                <p>Equipo Local</p>
                <label>Promedio de corners por partido</label>
                <input
                onChange={event => setLocalCorners(event.target.value)}
                type="number"></input>
                <label>Promedio de corners a favor</label>
                <input
                onChange={event => setLocalCornersFavor(event.target.value)}
                type="number"></input>
                <label>Promedio de corners en contra</label>
                <input
                onChange={event => setLocalCornersAgainst(event.target.value)}
                type="number"></input>
            </div>
            <div>
                <p>Equipo Visitante</p>
                <label>Promedio de corners por partido</label>
                <input
                onChange={event => setVisitCorners(event.target.value)}
                type="number"></input>
                <label>Promedio de corners a favor</label>
                <input
                onChange={event => setVisitCornersFavor(event.target.value)}
                type="number"></input>
                <label>Promedio de corners en contra</label>
                <input
                onChange={event => setVisitCornersAgainst(event.target.value)}
                type="number"></input>
            </div>
            <div>
                <p>Corners esperados:</p>
                <p id="corners"> </p>
                <p>Corners esperados según yo:</p>
                <p id="cornersDos"> </p>
                <p>Corners de forma arriesgada:</p>
                <p id="cornersTres"> </p>
            </div>
        </div>
    )
}

export {ProbabilityCorners};