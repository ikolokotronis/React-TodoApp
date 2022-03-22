import React, {useState} from 'react';
import {addTask} from "./api/tasks";

function NewTask(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleClick(e) {
        e.preventDefault();
        addTask(title, description, "open").then(()=>{
            props.setUpdate(true)
        })
    }

    return (
        <div className={"card shadow"}>
            <div className={"card-body"}>
                <h1 className={"card-title"}>New task</h1>
                <form>
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               name={"title"}
                               placeholder={"Title"}
                               value={title}
                               onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               name={"description"}
                               placeholder={"Description"}
                               value={description}
                               onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <button onClick={handleClick} className={"btn btn-info"}>
                        Add task
                        <i className={"fas fa-plus-circle ml-1"}/>
                    </button>
                </form>
            </div>

        </div>
    );
}

export default NewTask;