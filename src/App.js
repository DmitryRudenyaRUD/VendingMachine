import React from 'react';
import {Showcase, ContainerControlPanel} from './Containers';
import style from './Components/Component.module.scss'

export default function App() {
    return (
        <div className={style.app}>
            <Showcase/>
            <ContainerControlPanel />
        </div>
    );
}

