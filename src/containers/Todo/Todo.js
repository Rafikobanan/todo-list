import React, {useState, useEffect} from 'react';
import BigTitle from '../../components/UI/BigTitle/BigTitle';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import {TodoContext} from '../../context/todoContext';
import storage from '../../components/storage/storage';

function Todo() {
	const [tasks, setTasks] = useState(storage());

	useEffect(() => {
		storage(tasks);
	}, [tasks]);

	const addTask = (text) => {
		setTasks([
			...tasks,
			{id: Date.now(), text, isCompleted: false}
		]);
	};

	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleTask = (id) => {
		setTasks(tasks.map((task) => {
			if (task.id === id) task.isCompleted = !task.isCompleted;

			return task;
		}));
	}

	return (
		<TodoContext.Provider value={{
			addTask, removeTask, toggleTask
		}}>
			<div className="Todo">
				<div className="container">
					<BigTitle title="Todo list"/>
					<TodoForm />
					<TodoList tasks={tasks}/>
				</div>
			</div>
		</TodoContext.Provider>
	);
}

export default Todo;