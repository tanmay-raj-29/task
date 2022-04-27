import { Container, Navbar } from 'react-bootstrap';
import classes from "./NavBar.module.css";

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
                        <i class={`bi bi-person-circle ${classes.icon}`}></i>
                    </span>
                    <Navbar.Text className={classes.name}>
                        Kishore
                    </Navbar.Text>
                    <span>
                        <i class={`bi bi-bell ${classes.icon}`}></i>
                    </span>
                    <span>
                        <i class={`bi bi-question-circle ${classes.icon}`}></i>
                    </span>

                </Navbar.Collapse>
            </ Container>
        </Navbar>
    )
};

export default NavBar;