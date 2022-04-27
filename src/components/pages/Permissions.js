import { Container, Form, Stack } from 'react-bootstrap';
import { NavLink, Route } from 'react-router-dom';
import PermissionsTable from '../permissions/PermissionsTable';
import Icon from '../UI/icon';
import classes from './Permissions.module.css';
import { TABLE_HEAD_DATA, TABLE_ROW_DATA } from './PermissionsData';
import PermissionsRole from "./PermissionsRole";

const Permissions = () => {
    const START_COL = <Form.Check
        type="radio"
    />;

    const END_COL = <i class="bi bi-eye"></i>;

    return <Container>
        <Stack className={classes.stack} direction="horizontal" gap={2}>
            <NavLink
                to="/permissions/role"
                activeClassName={classes.active}
                className={classes["stack-item"]}
            >
                <span className={classes.icon}>
                    <i class="bi bi-wifi"></i>
                </span>
                Permissions
            </NavLink>
            <div className="vr" />
            <NavLink
                to="/permissions/approval"
                exact
                activeClassName={classes.active}
                className={classes["stack-item"]}
            >
                <span className={classes.icon}>
                    <i class="bi bi-grid-3x3"></i>
                </span>
                Approval Matrix
            </NavLink>
            <div className="bg-light border ms-auto"></div>
            <span className={classes.sync}>
                <i class="bi bi-arrow-repeat"></i>
                <p>
                    Last synced 15 mins ago
                </p>
            </span>
        </Stack>

        <hr className={classes.line} />
        <Route path='/permissions/role' exact>
            <div className={classes.table}>
                <div className={classes["table-options"]}>
                    <button>
                        <i class="bi bi-plus"></i>
                        Add role
                    </button>
                    <span className={classes["table-options"]}>
                        <Icon class="bi bi-pen" />
                    </span>
                    <span className={classes["table-options"]}>
                        <Icon class="bi bi-trash" />
                    </span>

                </div>
                <PermissionsTable START_COL={START_COL} END_COL={END_COL} TABLE_HEAD_DATA={TABLE_HEAD_DATA} TABLE_ROW_DATA={TABLE_ROW_DATA} ROW_CELLS={["role", "access", "members", "updated"]} />
            </div>
        </Route>
        <Route path='/permissions/role/:id' exact>
            <PermissionsRole />
        </Route>
    </Container>
};

export default Permissions;