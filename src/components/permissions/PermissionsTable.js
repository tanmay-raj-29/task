import { Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './PermissionsTable.module.css';

const PermissionsTable = ({ TABLE_HEAD_DATA, TABLE_ROW_DATA }) => {
    return <Table>
        <thead>
            <tr className={classes["table-head"]}>
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
};

export default PermissionsTable;