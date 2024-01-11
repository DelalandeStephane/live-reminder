import React from 'react';
import '../styles/ItemList.css';

function ItemList ({live, handleClick}) {
    return (
        <li>
            <div>
                <h2>{live.name}</h2>
                <p>Le {live.date}</p>
                <p>Lieu : {live.place}</p>
                <p>{live.street}, {live.city}</p>
            </div>
            <button className="button-73" role="button" onClick={() => { handleClick(live.id)}}>Delete</button>
        </li>
    )
};

export default ItemList;