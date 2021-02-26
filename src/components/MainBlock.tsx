import React from 'react';
import './MainBlock.scss';


export const MainBlock=()=> {
    return (
<div className={"mainBlock"}>
    <div className={"mainBlock__paragraphBlock"}>
    <p className={"mainBlock__paragraph"}>
        Салют!
    </p>
    <p className={"mainBlock__paragraph"}>Меня зовут Лобов Роман</p>
    <p className={"mainBlock__paragraph"}>Я front-end Разработчик</p>
    </div>
    <img src={"https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png"}/>
</div>

    );
}

