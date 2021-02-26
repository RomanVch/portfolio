import React from 'react';
import './myWorks.scss';


export const MyWorks = () => {
    return (
        <div className={"myWork"}>
            <h2 className={"myWork__title"}>Мои работы</h2>
            <div className={"myWork_blocks"}>
            <div className={"myWork__block"}>
                <div><img src={"https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png"}/></div>
                <button>смотреть</button>
                <h3>название проекта</h3>
                <p>краткое описание</p>
            </div>
            <div className={"myWork__block myWork__block--double"}>
                <div><img src={"https://smartlanding.biz/wp-content/uploads/2015/03/kartinki-zaglushki.png"}/></div>
                <button>смотреть</button>
                <h3>название проекта</h3>
                <p>краткое описание</p>
            </div>
            </div>
        </div>
    );
}

