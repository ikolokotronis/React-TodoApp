import React, {useEffect, useState} from 'react';
import {removeTask} from "./api/tasks";

function Task(props) {
    const [status, setStatus] = useState()
    const [showOperationForm, setShowOperationForm] = useState(false)

    useEffect(()=>{
        setStatus(props.status)
    }, [])

    function handleShowOperationForm() {
        setShowOperationForm(state=>!state)
    }

    function handleRemoveTask() {
        removeTask(props.id).then(()=>{
            props.onRemoveTask()
        })
    }

    function handleFinish() {
        console.log('finish clicked')
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
                        <button onClick={handleRemoveTask} className={"btn btn-outline-danger btn-sm ml-2"}>
                            <i className={"fas fa-trash false"}/>
                        </button>
                    </div>
                </div>

                {/* operations component */}
            </section>
        </>
    );
}

export default Task;