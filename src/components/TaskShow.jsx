import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({task, onDelete,onUpdate}) {
       
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(task.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    const handleSumbit = (id,updatedTitle,updatedTaskDesc) => {
        setShowEdit(false);
        onUpdate(id,updatedTitle,updatedTaskDesc);
    }

    return ( 
        <div className="task-show">
            {showEdit 
            ? 
            <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSumbit}/>
            : <>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div className="btn-controller">
                    <button className="task-btn task-delete" onClick={handleDeleteClick}>Sil</button>
                    <button className="task-btn task-edit" onClick={handleEditClick}>Güncelle</button>
                </div>
            </>}


        </div> 
    );
}

export default TaskShow;