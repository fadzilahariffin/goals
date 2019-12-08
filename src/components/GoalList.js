import React from 'react';
import '../styles/App.css'

const GoalList = props =>{
    return(
        <div className="container mt-4">
            {
                props.goals.length > 0 ?
                <ul className="list-group">
                    {
                        props.goals.map((goal) => {
                            return <li key={goal.id} className="list-group-item">{goal.text}</li>
                        })
                    }
                </ul>
                : null

            }
                
        </div>
    );
}

export default GoalList;