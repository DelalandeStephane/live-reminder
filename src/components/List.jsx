import React from 'react';
import ItemList from './ItemList';

function List ({lives, deleteLive}){
    const LiveList = lives.map((live) => {
        return <ItemList key={live.id}  live={live} handleClick={deleteLive} />
    })
        return LiveList;
}

export default List ;