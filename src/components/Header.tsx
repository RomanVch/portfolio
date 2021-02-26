import React from 'react';
import './Header.scss';


export const Header=()=> {
    return (
<header className={"header"}>
    <h1 className={"header__logo"}>frontend developer</h1>
    <ul className={"header__ul"}>
        <li className={"header__li"}>Главная</li>
        <div className={"header__separator"}></div>
        <li className={"header__li"}>Скилы</li>
        <div className={"header__separator"}></div>
        <li className={"header__li"}>Работы</li>
        <div className={"header__separator"}></div>
        <li className={"header__li"}>Контакты</li>
    </ul>
</header>
    );
}

