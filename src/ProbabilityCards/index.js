import React, {useState, useEffect} from "react";

function ProbabilityCards(){
    const [localCardsFavor, setLocalCardsFavor] = useState('');
    const [localCardsAgainst, setLocalCardsAgainst] = useState('');
    const [visitCardsFavor, setVisitCardsFavor] = useState('');
    const [visitCardsAgainst, setVisitCardsAgainst] = useState('');
    const [cardsYellow, setCardsYellow] = useState('');
    const [cardsRed, setCardsRed] = useState('');

    useEffect(() => {
        let cardsLocal = (parseFloat(localCardsFavor) + parseFloat(localCardsAgainst));
        let cardsVisit = (parseFloat(visitCardsFavor) + parseFloat(visitCardsAgainst));
        let cardsSum = (cardsLocal + cardsVisit) / 2;
        let cardsReferee = cardsSum + parseFloat(cardsYellow);
        let cardsTotal = cardsReferee / 2;

        isNaN(cardsTotal) ? document.getElementById("cards").innerHTML = 0 : document.getElementById("cards").innerHTML = cardsTotal;
    });

    return(
        <div className="Cards">
            <h1>Tarjetas esperadas en el partido</h1>
            <div>
                <p>Equipo Local</p>
                <label>Promedio de tarjetas a favor</label>
                <input
                onChange={event => setLocalCardsFavor(event.target.value)}
                type="number"></input>
                <label>Promedio de tarjetas en contra</label>
                <input
                onChange={event => setLocalCardsAgainst(event.target.value)}
                type="number"></input>
            </div>
            <div>
                <p>Equipo Visitante</p>
                <label>Promedio de tarjetas a favor</label>
                <input
                onChange={event => setVisitCardsFavor(event.target.value)}
                type="number"></input>
                <label>Promedio de tarjetas en contra</label>
                <input
                onChange={event => setVisitCardsAgainst(event.target.value)}
                type="number"></input>
            </div>
            <div>
                <p>Árbitro</p>
                <label>Promedio de tarjetas amarillas</label>
                <input
                onChange={event => setCardsYellow(event.target.value)}
                type="number"></input>
                <label>Promedio de tarjetas rojas</label>
                <input
                onChange={event => setCardsRed(event.target.value)}
                type="number"></input>
            </div>
            <div>
                <p>Tarjetas esperadas:</p>
                <p id="cards"> </p>
            </div>
        </div>
    )
}

export {ProbabilityCards};