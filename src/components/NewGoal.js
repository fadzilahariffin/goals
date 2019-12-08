import React,{useState} from 'react';

const NewGoal = props => {


    let [newgoal,setnewgoal] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        const newGoal = {
            id:Math.random().toString(),
            text: newgoal
        }

        props.onAddGoal(newGoal);

        setnewgoal('');

    }

    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={newgoal} onChange={(e)=> {setnewgoal(e.target.value)}}/>
                    </div>
                    <button type="submit" className="col-sm-2 btn btn-primary">Add Goal</button>
                </div>
            </form>
        </div>
    );

}

export default NewGoal;
