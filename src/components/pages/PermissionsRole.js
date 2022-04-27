import { Container, Form, Stack } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import PermissionsTable from '../permissions/PermissionsTable';
import Icon from '../UI/icon';
import { TABLE_ROW_DATA } from './PermissionsData';
import classes from './PermissionsRole.module.css';

const PermissionsRole = () => {
    const params = useParams();
    const id = params.id;

    const END_COL = <Form.Check
        type="switch"
        isValid
    />

    return <Container>
        <Stack direction="horizontal" gap={5}>
            <NavLink to="/permissions/role" className={classes["back-button"]}>
                {`<-`}
            </NavLink>
            <span style={{ color: "red" }}>
                {TABLE_ROW_DATA[id].role}
            </span>
            <span>
                <Icon class="bi bi-pen" />
            </span>
        </Stack>

        <Container className={classes["table-options"]}>
            <Stack className={classes.stack} direction="horizontal" gap={2}>
                <NavLink
                    to="/permissions/role"
                    activeClassName={classes.active}
                    className={classes["stack-item"]}
                >
                    Access Control
                </NavLink>
                <div className="vr" />
                <NavLink
                    to="/permissions/approval"
                    exact
                    activeClassName={classes.active}
                    className={classes["stack-item"]}
                >
                    Assigned Members
                </NavLink>
            </Stack>
            <hr className={classes.line} />
            <PermissionsTable END_COL={END_COL} TABLE_HEAD_DATA={TABLE_ROW_DATA[0].accessTableHead} TABLE_ROW_DATA={TABLE_ROW_DATA[id].accessTableRow} ROW_CELLS={["role", "access", "summary", "updated"]} />
        </Container>

    </Container>
};

export default PermissionsRole;