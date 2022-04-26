import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import classes from "./SideBar.module.css";

const sideBarItems = [
    {
        text: 'Projects',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        text: 'Classroom',
        icon: <i className='bx bx-star'></i>,
        to: '/started',
        section: 'started'
    },
    {
        text: 'Permissions',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'
    },
]

const SideBar = () => {
    return <div className={classes.sidebar}>
        <ButtonGroup vertical>
            {
                sideBarItems.map((item, index) => (<button variant="light">
                    <div key={index}>
                        {item.text}
                    </div>
                </button>
                ))
            }
        </ButtonGroup>
    </div>;
};

export default SideBar;