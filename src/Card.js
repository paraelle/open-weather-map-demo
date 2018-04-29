import React from 'react';
import _ from 'lodash';

import './Card.css';


const cleanName = (name) => {
	return name.split('_').map(_.capitalize).join(' ')
}

const Card = ({name, weather}) => {
	const entry = weather.weather[0]
	return (
		<div className='card'>
			<div className='card__city'>{cleanName(name)}</div>

		  	<div className='card__temp'>{_.round(weather.main.temp, 1)}&deg;C</div>
		  	<div className='card__footer'>
			  	<img className='card__icon' src={`http://openweathermap.org/img/w/${entry.icon}.png`} alt={entry.main}/>
			  	<div className='card__weather-desc'>{entry.description}</div>
		  	</div>
		</div>
	);
}

export default Card;