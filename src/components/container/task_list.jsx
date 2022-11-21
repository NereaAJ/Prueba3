import React from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponents = () => {

    const defaultTask = new Task('Nerea', 'Álvarez', 'example@gmail.com', true);

    return (
        <div>
            <h1>
                Datos:
            </h1>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponents;
