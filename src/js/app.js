import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";
import NewTask from "./NewTask";
import Task from "./Task";

function App(props) {
    const [taskData, setTaskData] = useState([]);
    const [updateData, setUpdateData] = useState(false);
    useEffect(()=>{

        getTasks((data)=>{
            setTaskData(data);
        }).then(()=>{
            setUpdateData(false);
        })


    }, [updateData]);
    return (
        <>
            <NewTask setUpdate={(bool)=>setUpdateData(bool)}/>
            {
                taskData.map(task=>{
                    return <Task key={task.id} id={task.id} update={updateData} setUpdate={(bool)=>setUpdateData(bool)}
                                 title={task.title} description={task.description}
                                 status={task.status}/>
                })
            }
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
