import React from 'react';
import './Todo.scss';

export default function Todo() {
	return (

		<div className="todo">
			<div className="container">
				<h1 className="todo__title">Todo list</h1>
				<div className="todo-form">
					<input type="text" className="todo-form__input" placeholder="What do you want to add?"/>
					<svg className="todo-form__button">
						<use xlinkHref="#add"/>
					</svg>
				</div>
				<div className="todo-list">
					<ul className="todo-list__list">
						<li className="todo-item">
							<div className="todo-item__container">
								<input type="checkbox" className="todo-item__checkbox"/>
								<div className="todo-item__text">Купить хлеб</div>
							</div>
							<svg className="todo-item__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="todo-item">
							<div className="todo-item__container">
								<input type="checkbox" className="todo-item__checkbox"/>
								<div className="todo-item__text">Навести близких</div>
							</div>
							<svg className="todo-item__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="todo-item">
							<div className="todo-item__container">
								<input type="checkbox" className="todo-item__checkbox"/>
								<div className="todo-item__text">Пройти собеседование</div>
							</div>
							<svg className="todo-item__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
						<li className="todo-item todo-item_completed">
							<div className="todo-item__container">
								<input type="checkbox" className="todo-item__checkbox"/>
								<div className="todo-item__text">Погулять с собакой</div>
							</div>
							<svg className="todo-item__button">
								<use xlinkHref="#bin"/>
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</div>

	)
}
