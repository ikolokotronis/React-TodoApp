import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";
import {getOperations} from "./api/operations";
import NewTask from "./NewTask";
import Task from "./Task";

function App(props) {
    const [taskData, setTaskData] = useState([])
    const [updateData, setUpdateData] = useState(false)
    console.log(taskData)
    useEffect(()=>{
        getTasks((data)=>{
            setTaskData(data)
        }).then(()=>{
            setUpdateData(false)
        })
    }, [updateData])
    return (
        <>
            <NewTask onNewTask={()=>setUpdateData(true)}/>
            {
                taskData.map(task=>{
                    return <Task key={task.id} id={task.id}
                                 title={task.title} description={task.description}
                                 status={task.status} onFinishTask={()=>setUpdateData(true)}
                                 onRemoveTask={()=>setUpdateData(true)}/>
                })
            }
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
