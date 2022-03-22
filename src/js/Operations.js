import React, {useEffect, useState} from 'react';
import {addOperation} from "./api/operations";
import Operation from "./Operation";

function Operations(props) {
    const [showForm, setShowForm] = useState(false)
    const [descriptionText, setDescriptionText] = useState('')

    useEffect(()=>{
        setShowForm(props.form)
    }, [props.form])

    function handleClick(e) {
        e.preventDefault()
        setDescriptionText('')
        setShowForm(false)
        addOperation(props.taskID, descriptionText, 50)
        props.setUpdate(true)

    }

    return (
        <>
            {
                showForm && <div className={"card-body"}>
                                <form>
                                    <div className={"input-group"}>
                                        <input value={descriptionText} onChange={(e)=>setDescriptionText(e.target.value)} type="text" className={"form-control"} placeholder={"Operation description"}/>
                                        <div className={"input-group-append"}>
                                            <button onClick={handleClick} className={"btn btn-info"}>
                                                Add
                                                <i className={"fas fa-plus-circle ml-1"}/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
            }
            <ul className={"list-group list-group-flush"}>
                {
                    props.operations.map(operation=>{
                        return <Operation key={operation.id} id={operation.id} setUpdate={props.setUpdate}
                                          description={operation.description} timeSpent={operation.timeSpent}
                                          status={operation.task.status}/>
                    })
                }
            </ul>
        </>
    );
}

export default Operations;