import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function TaskComponent({ task }) {
  return (
    <div>
      <p>
        Nombre: { task.name }
      </p>
      <p>
        Apellido: { task.lastname }
      </p>
      <p>
        Email: { task.email }
      </p>
      <p>
      Contacto: { task.mode ? 'En Línea' : 'No Disponible' }
      </p>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;