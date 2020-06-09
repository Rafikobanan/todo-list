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

	const keyDownHandler = (e) => {
		if (e.keyCode !== 13) return;

		clickHandler();
	};

	return (
		<div className="TodoForm">
			<input onKeyDown={keyDownHandler} type="text" onChange={(e) => setText(e.target.value)} value={text} className="TodoForm__input" placeholder="What do you want to add?"/>
			<IconButton onClick={clickHandler} className="TodoForm__button" icon="add"/>
		</div>
	);
}

export default TodoForm;