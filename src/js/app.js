import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import {getTasks} from "./api/tasks";
import {getOperations} from "./api/operations";
import NewTask from "./NewTask";
import Task from "./Task";

function App(props) {
    const [taskData, setTaskData] = useState([])
    const [updateData, setUpdateData] = useState(0)

    useEffect(()=>{
        getTasks((data)=>{
            setTaskData(data)
        })
    }, [updateData])
    console.log(taskData)
    return (
        <>
            <NewTask onNewTask={()=>setUpdateData(state=>state+1)}/>
            {
                taskData.map(task=>{
                    return <Task key={task.id} title={task.title}
                                 description={task.description}
                                 status={task.status} onRemoveTask={null}/>
                })
            }
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
