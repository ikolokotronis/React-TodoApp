import React, {useState} from 'react';
import {addTimeToOperation, deleteOperation} from "./api/operations";

function Operation(props) {
    const [inputTimeSpent, setInputTimeSpent] = useState('');
    const [showButtons, setShowButtons] = useState(false);
    const [showForm, setShowForm] = useState(true);
    function handleShowForm() {
        setShowForm(false);
        setShowButtons(true);
    }

    function handleHideForm(e) {
        e.preventDefault();
        setShowForm(true);
        setShowButtons(false);
    }

    function handleAddTime(e) {
        e.preventDefault();
        setShowForm(true);
        setShowButtons(false);
        addTimeToOperation(props.id, props.description, parseInt(inputTimeSpent) + parseInt(props.timeSpent))
            .then(()=>{
                props.setUpdate(true);
            })
    }

    function handleDeleteOperation(e) {
        e.preventDefault();
        setShowForm(true);
        setShowButtons(false);
        deleteOperation(props.id).then(()=>{
            props.setUpdate(true);
        })
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    {props.description}
                    <span className="badge badge-success badge-pill ml-2">
                        {props.timeSpent > 0 && props.timeSpent+"m"}
                    </span>
                </div>


                <form hidden={showForm}>
                    <div className="input-group input-group-sm">
                        <input type="number"
                               value={inputTimeSpent}
                               onChange={(e)=>setInputTimeSpent(e.target.value)}
                               className="form-control"
                               placeholder="Spent time in minutes"
                               style={{"width": "12rem"}}/>
                        <div className="input-group-append">
                            <button onClick={handleAddTime} className="btn btn-outline-success"><i className="fas fa-save"/></button>
                            <button onClick={handleHideForm} className="btn btn-outline-dark"><i className="fas fa-times false"/></button>
                        </div>
                    </div>
                </form>


                <div hidden={showButtons}>
                    <button onClick={handleShowForm} className="btn btn-outline-success btn-sm mr-2">
                        Add time
                        <i className="fas fa-clock ml-1"/>
                    </button>

                    <button onClick={handleDeleteOperation} className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"/></button>
                </div>
            </li>

        </>
    );
}

export default Operation;