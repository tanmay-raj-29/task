import classes from "./icon.module.css";

const Icon = (props) => {
    return <i className={`${classes.icon} ${props.class}`}></i>
};

export default Icon;