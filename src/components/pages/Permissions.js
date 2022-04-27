import { Container, Form, Stack, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PermissionsTable from '../../permissions/PermissionsTable';
import Icon from '../UI/icon';
import classes from './Permissions.module.css';
import { TABLE_HEAD_DATA, TABLE_ROW_DATA } from './PermissionsData';

const Permissions = () => {
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
        </Stack>
        <hr className={classes.line} />
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
                <span className={classes.sync}>
                    <i class="bi bi-arrow-repeat"></i>
                    <p>
                        Last synced 15 mins ago
                    </p>
                </span>

            </div>
            <PermissionsTable TABLE_HEAD_DATA={TABLE_HEAD_DATA} TABLE_ROW_DATA={TABLE_ROW_DATA} />
        </div>
    </Container>
};

export default Permissions;