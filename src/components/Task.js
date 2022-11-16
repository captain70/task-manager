import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

const Task = ({ task, tasks, setTasks, setEditTask }) => {
	const deleteHandler = ({ id }) => {
		setTasks(tasks.filter((item) => item.id !== id));
	};

	const completeHandler = (task) => {
		setTasks(
			tasks.map((item) => {
				if (item.id === task.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	const updateHandler = ({ id }) => {
		const findTask = tasks.find((item) => item.id === id);
		setEditTask(findTask);
	};

	return (
		<div className='task'>
			<button onClick={() => completeHandler(task)} className='complete-btn'>
				{task.completed ? (
					<i>
						<ImRadioChecked />
					</i>
				) : (
					<i>
						<ImRadioUnchecked />
					</i>
				)}
			</button>

			<li className={`task-item ${task.completed ? 'completed' : ''}`}>
				{task.text}
			</li>
			{task.completed ? null : (
				<button onClick={() => updateHandler(task)} className='edit-btn'>
					<i>
						<FaEdit />
					</i>
				</button>
			)}
			<button onClick={() => deleteHandler(task)} className='trash-btn'>
				<i>
					<FaTrash />
				</i>
			</button>
		</div>
	);
};

export default Task;
