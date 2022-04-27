import { Container, Form, Stack, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Icon from '../UI/icon';
import classes from './Permissions.module.css';
import { TABLE_HEAD_DATA, TABLE_ROW_DATA } from './PermissionsData';

const Permissions = () => {
    return <Container>
        <Stack className={classes.stack} direction="horizontal" gap={2}>
            <NavLink
                to="/permissions"
                exact
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
            <Table>
                <thead>
                    <tr>
                        {TABLE_HEAD_DATA.map((heading, index) => {
                            const headCellClass = [classes["table-cell-center"]];
                            if (index <= 1) headCellClass.pop();
                            return (
                                <th className={headCellClass} key={index}>{heading}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROW_DATA.map((row, index) => {
                        const rowCellClass = [classes["table-button"]];
                        if (row.access === "All Access") {
                            rowCellClass.pop();
                            rowCellClass.push(classes["all-access"]);
                        }
                        return (
                            <tr key={index}>
                                <td>
                                    <Form.Check
                                        type="radio"
                                        id={index}
                                    />
                                </td>
                                <td>
                                    <NavLink
                                        to="/permissions/teacher"
                                        className={classes["role"]}
                                        exact
                                    >
                                        {row.role}
                                    </NavLink>
                                </td>
                                <td><button className={rowCellClass}>{row.access}</button></td>
                                <td className={classes["table-cell-center"]}>{row.members}</td>
                                <td className={classes["table-cell-center"]}>{row.updated}</td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    </Container>
};

export default Permissions;