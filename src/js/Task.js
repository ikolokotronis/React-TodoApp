import React, {useEffect, useState} from 'react';
import {removeTask} from "./api/tasks";
import {finishTask} from "./api/tasks";
import Operations from "./Operations";
import {getOperations} from "./api/operations";

function Task(props) {
    const [status, setStatus] = useState('')
    const [showOperationForm, setShowOperationForm] = useState(false)
    const [operationData, setOperationData] = useState([])

    useEffect(()=>{
        setStatus(props.status)
    }, [])

    useEffect(()=>{
        getOperations(props.id,(data)=>{
            setOperationData(data)
        }).then(()=>{
            props.setUpdate(false)
        })
    }, [props.update])

    console.log(operationData)

    function handleShowOperationForm() {
        setShowOperationForm(state=>!state)
    }

    function handleRemoveTask() {
        removeTask(props.id).then(()=>{
            props.setUpdate(true)
        })
    }

    function handleFinish() {
        setStatus("closed")
        finishTask(props.id,props.title,props.description).then(()=>{
            props.setUpdate(true)
        })
    }

    return (
        <>
            <section className={"card mt-5 shadow-sm"}>
                <div className={"card-header d-flex justify-content-between align-items-center"}>
                    <div>
                        <h5>{props.title}</h5>
                        <h6 className={"card-subtitle text-muted"}>{props.description}</h6>
                    </div>
                    <div>
                        {
                            status === "open" && (
                                <>
                                    <button onClick={handleShowOperationForm} className={"btn btn-info btn-sm mr-2"}>
                                        Add operation
                                        <i className={"fas fa-plus-circle ml-1"}/>
                                    </button>

                                    <button onClick={handleFinish} className={"btn btn-dark btn-sm"}>
                                    Finish
                                    <i className={"fas fa-archive ml-1"}/>
                                    </button>
                                </>
                            )
                        }

                        {/* visible only when no operations in task */}
                        {
                            operationData.length === 0&&
                            <button onClick={handleRemoveTask} className={"btn btn-outline-danger btn-sm ml-2"}>
                                <i className={"fas fa-trash false"}/>
                            </button>
                        }
                    </div>
                </div>

                <Operations setUpdate={props.setUpdate} taskID={props.id}  status={props.status}
                            form={showOperationForm} setForm={null}
                            operations={operationData} setOperation={null}/>
            </section>
        </>
    );
}

export default Task;