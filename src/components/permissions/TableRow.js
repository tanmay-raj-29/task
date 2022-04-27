import { NavLink } from 'react-router-dom';
import classes from './PermissionsTable.module.css';

const TableRow = ({ START_COL, END_COL, ROW_CELLS, row, index }) => {
    const rowCellClass = [classes["table-button"]];
    if (row.access === "All Access") {
        rowCellClass.pop();
        rowCellClass.push(classes["all-access"]);
    }
    else if (row.access === "No Access") {
        rowCellClass.pop();
        rowCellClass.push(classes["no-access"]);
    }

    return (
        <tr key={index}>
            <td>{START_COL}</td>
            <td>
                <NavLink
                    to={`/permissions/role/${index}`}
                    id={index}
                    className={classes["role"]}
                    exact
                >
                    {row[ROW_CELLS[0]]}
                </NavLink>
            </td>
            <td><button className={rowCellClass}>{row[ROW_CELLS[1]]}</button></td>
            <td className={classes["table-cell-center"]}>{row[ROW_CELLS[2]]}</td>
            <td className={classes["table-cell-center"]}>{row[ROW_CELLS[3]]}</td>
            <td>{END_COL}</td>
        </tr>);
};

export default TableRow;