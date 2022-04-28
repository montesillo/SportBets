import logo from './logo.svg';
import './App.css';
import {ProbabilityOfGoals} from "./ProbabilityOfGoals";
import {ProbabilityCorners} from "./ProbabilityCorners";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ProbabilityOfGoals/>
      <ProbabilityCorners/>
    </React.Fragment>
  );
}

export default App;
