import React, {useState} from 'react';
import Header from './layouts/header';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

const App = () => {

  const [Goals,setGoals] = useState([])

  const addNewGoalHandler = (newGoal) => {
    // setGoals(Goals.concat(newGoal));
    setGoals((prevGoals) =>  prevGoals.concat(newGoal));
    console.log(Goals);
  }

  return (
    <>
      <Header />
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={Goals}/>
    </>
  );
}

export default App;
