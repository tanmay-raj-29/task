import { Table } from 'react-bootstrap';
import CollapsibleTableRow from './CollapsibleTableRow';
import classes from './PermissionsTable.module.css';
import TableRow from './TableRow';

const PermissionsTable = (props) => {
    return <Table>
        <thead>
            <tr className={classes["table-head"]}>
                {props.TABLE_HEAD_DATA.map((heading, index) => {
                    const headCellClass = [classes["table-cell-center"]];
                    if (index <= 1) headCellClass.pop();
                    return (
                        <th className={headCellClass} key={index}>{heading}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
            {props.TABLE_ROW_DATA.map((row, index) => {
                if (props.START_COL) return <TableRow {...props} key={index} row={row} index={index} />;
                else return <CollapsibleTableRow {...props} key={index} row={row} index={index} />;
            })}
        </tbody>
    </Table>
};

export default PermissionsTable;