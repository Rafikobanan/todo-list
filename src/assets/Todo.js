import React from 'react';
import './Todo.scss';

export default function Todo() {
	return (

		<div className="Todo">
			<div className="container">
				<h1 className="BigTitle">Todo list</h1>
				<div className="TodoForm">
					<input type="text" className="TodoForm__input" placeholder="What do you want to add?"/>
					<svg className="TodoForm__button">
						<use xlinkHref="#add"/>
					</svg>
				</div>
				<div className="TodoList">
					<ul className="TodoList__list">
						<li className="TodoItem">
							<div className="TodoItem__container">
								<input type="checkbox" className="TodoItem__checkbox"/>
								<div className="TodoItem__text">Купить хлеб</div>
							</div>
							<svg className="TodoItem__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="TodoItem">
							<div className="TodoItem__container">
								<input type="checkbox" className="TodoItem__checkbox"/>
								<div className="TodoItem__text">Навести близких</div>
							</div>
							<svg className="TodoItem__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="TodoItem">
							<div className="TodoItem__container">
								<input type="checkbox" className="TodoItem__checkbox"/>
								<div className="TodoItem__text">Пройти собеседование</div>
							</div>
							<svg className="TodoItem__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="TodoItem TodoItem_completed">
							<div className="TodoItem__container">
								<input type="checkbox" className="TodoItem__checkbox"/>
								<div className="TodoItem__text">Погулять с собакой</div>
							</div>
							<svg className="TodoItem__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</div>

	)
}
