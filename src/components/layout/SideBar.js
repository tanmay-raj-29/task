import { Stack } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import { sideBarItems } from "./SideBarItem";

const SideBar = () => {
    return <div className={classes.sidebar}>
        <Stack>
            {sideBarItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    className={classes["sidebar-item"]}
                    activeClassName={classes.active}
                >
                    <div className={classes.icon}>
                        {item.icon}
                    </div>
                    {item.text}
                </NavLink>
            ))}
        </Stack>
    </div>;
};

export default SideBar;