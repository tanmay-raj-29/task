import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import SideBar from './SideBar';
import classes from "./Layout.module.css";

const Layout = (props) => {
    return <>
        <NavBar />

        <Row>
            <Col sm={2} md={2} lg={2}>
                <SideBar />
            </Col>
            <Col sm={10} md={10} lg={10}>
                <div className={classes.main}>
                    <Container>
                        {props.children}
                    </Container>
                </div>
            </Col>
        </Row>
    </>
};

export default Layout;