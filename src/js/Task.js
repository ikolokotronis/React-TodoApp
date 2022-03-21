import React from 'react';

function Task(props) {
    return (
        <>
            <section className={"card mt-5 shadow-sm"}>
                <div className={"card-header d-flex justify-content-between align-items-center"}>
                    <div>
                        <h5>Task title</h5>
                        <h6 className={"card-subtitle text-muted"}>Task description</h6>
                    </div>
                    <div>

                        <button className={"btn btn-info btn-sm mr-2"}>
                            Add operation
                            <i className={"fas fa-plus-circle ml-1"}/>
                        </button>

                        <button className={"btn btn-dark btn-sm"}>
                            Finish
                            <i className={"fas fa-archive ml-1"}/>
                        </button>

                        {/* visible only when no operations in task */}
                        <button className={"btn btn-outline-danger btn-sm ml-2"}>
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