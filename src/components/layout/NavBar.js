import { Container, Navbar } from 'react-bootstrap';
import classes from "./NavBar.module.css";
import Icon from "../UI/icon";

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className={classes.navText} href="#home">
                    <span>
                        Classroom
                    </span>
                    <span>
                        Manager
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <span>
                        <Icon class="bi bi-person-circle" />
                    </span>
                    <Navbar.Text className={classes.name}>
                        Kishore
                    </Navbar.Text>
                    <span>
                        <Icon class="bi bi-bell" />
                    </span>
                    <span>
                        <Icon class="bi bi-question-circle" />
                    </span>

                </Navbar.Collapse>
            </ Container>
        </Navbar>
    )
};

export default NavBar;