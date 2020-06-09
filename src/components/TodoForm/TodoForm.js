import React, { useContext, useState } from 'react';
import './TodoForm.scss';
import IconButton from '../UI/IconButton/IconButton';
import { TodoContext } from '../../context/todoContext';

function TodoForm() {
	const [text, setText] = useState('');
	const {addTask} = useContext(TodoContext);

	const clickHandler = () => {
		if (!text) return;

		addTask(text);
		setText('');
	};

	return (
		<div className="TodoForm">
			<input type="text" onChange={(e) => setText(e.target.value)} value={text} className="TodoForm__input" placeholder="What do you want to add?"/>
			<IconButton onClick={clickHandler} className="TodoForm__button" icon="add"/>
		</div>
	);
}

export default TodoForm;