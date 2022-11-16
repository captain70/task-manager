/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';

const allStatus = ['all', 'active', 'completed'];
const App = () => {
	const [inputText, setInputText] = useState('');
	const [tasks, setTasks] = useState([]);
	const [status, setStatus] = useState([]);
	const [filteredTasks, setFilteredTasks] = useState([allStatus]);
	const [editTask, setEditTask] = useState(null);

	useEffect(() => {
		JSON.parse(localStorage.getItem('tasks', setTasks(tasks)));
	}, []);
	useEffect(() => {
		filterHandler(status);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const filterHandler = (status) => {
		if (status === 'completed') {
			setFilteredTasks(tasks.filter((task) => task.completed === true));
		} else if (status === 'active') {
			setFilteredTasks(tasks.filter((task) => task.completed === false));
		} else {
			setFilteredTasks(tasks);
		}
	};

	// local storage
	// const storeTasks = () => {
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	// };

	// const getTasks = () => {
	// 	if (localStorage.getItem('tasks') === null) {
	// 		localStorage.setItem('tasks', JSON.stringify([]));
	// 	} else {
	// 		let stored = JSON.parse(localStorage.getItem('tasks'));
	// 		setTasks(stored);
	// 	}
	// };

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<header className='header'>
					<h1>Today's Task</h1>
				</header>
				<Form
					inputText={inputText}
					tasks={tasks}
					setTasks={setTasks}
					setInputText={setInputText}
					editTask={editTask}
					setEditTask={setEditTask}
					status={allStatus}
					filterHandler={filterHandler}
				/>
				<TaskList
					setTasks={setTasks}
					tasks={tasks}
					filteredTasks={filteredTasks}
					setEditTask={setEditTask}
				/>
			</div>
		</div>
	);
};

export default App;
