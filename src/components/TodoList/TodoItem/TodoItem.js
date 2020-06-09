import React, { useContext } from 'react';
import './TodoItem.scss';
import IconButton from '../../UI/IconButton/IconButton';
import { TodoContext } from '../../../context/todoContext';

function TodoItem({task}) {
	const {toggleTask, removeTask} = useContext(TodoContext);

	const cls = [
		'TodoItem',
	];

	if (task.isCompleted) {
		cls.push('TodoItem_completed');
	}

	return (
		<li className={cls.join(' ')}>
			<div className="TodoItem__container">
				<input type="checkbox" checked={task.isCompleted} onChange={() => toggleTask(task.id)} className="TodoItem__checkbox"/>
				<div className="TodoItem__text">{task.text}</div>
			</div>
			<IconButton onClick={() => removeTask(task.id)} className="TodoItem__button" icon="bin"/>
		</li>
	);
}

export default TodoItem;