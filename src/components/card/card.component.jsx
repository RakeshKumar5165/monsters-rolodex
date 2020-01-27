import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
        <div className='card'>
            <img alt='monster' src={`https://robohash.org/${(props.monster.id + 1) % 10}/?set=set2&size=90x90`} />
            <div className='container'>
                <h2>{props.monster.name}</h2>
                <h6>{props.monster.email}</h6>
            </div>
        </div>
    );
}