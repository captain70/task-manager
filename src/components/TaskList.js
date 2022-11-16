import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, filteredTasks, setEditTask }) => {
	return (
		<div className='task-container'>
			<ul className='task-list'>
				{filteredTasks.map((task, id) => (
					<Task
						key={id}
						task={task}
						setTasks={setTasks}
						tasks={tasks}
						setEditTask={setEditTask}
					/>
				))}
			</ul>
		</div>
	);
};

export default TaskList;
