import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function TodoList({tasks}) {
	const incompletedTasks = tasks.filter(task => !task.isCompleted);
	const completedTasks = tasks.filter(task => task.isCompleted);

	return (
		<div className="TodoList">
			<ul className="TodoList__list">
				{!tasks.length ? <div>Добавьте вашу первую задачу</div> : ''}
				<TransitionGroup>
					{incompletedTasks.map(task => (
						<CSSTransition
							key={task.id}
							timeout={300}
							classNames="TodoItem"
						>
							<TodoItem task={task}/>
						</CSSTransition>
						))}

					{completedTasks.map(task => (
						<CSSTransition
							key={task.id}
							timeout={300}
							classNames="TodoItem"
						>
							<TodoItem task={task}/>
						</CSSTransition>
						))}
				</TransitionGroup>
			</ul>
		</div>
	);
}

export default TodoList;