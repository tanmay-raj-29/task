import { useState } from "react";
import { Collapse, Form, Stack } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import classes from './PermissionsTable.module.css';

const CollapsibleTableRow = ({ END_COL, ROW_CELLS, row, index }) => {
    const [show, setShow] = useState(false);

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
        <>
            <tr key={index} style={{ borderBottom: 'unset' }}>
                <td>
                    <button
                        style={{ backgroundColor: 'white', border: "none" }}
                        onClick={() => setShow(!show)}
                    >
                        {show ? <i class="bi bi-dash-circle"></i> : <i class="bi bi-plus-circle"></i>}
                    </button>
                </td>
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
            </tr>
            <tr>
                <td style={{ paddingBottom: 0, paddingTop: 0 }}></td>
                <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={show}>
                        <div>
                            <p>
                                All aspects in {row.role} module
                            </p>
                            <Stack style={{ paddingLeft: "60px" }} direction="horizontal" gap={5}>
                                <div>
                                    <p>
                                        Access Control
                                    </p>
                                    <Form.Check type="radio" id={`check-api-type`}>
                                        <Form.Check.Input type="radio" isValid name="group1" />
                                        <Form.Check.Label style={{ color: "black" }}>{`All Access`}</Form.Check.Label>
                                        <Form.Control.Feedback style={{ fontWeight: "100", color: "black" }} > Can access all items</Form.Control.Feedback>
                                    </Form.Check>
                                    <Form.Check type="radio" id={`check-api-type`}>
                                        <Form.Check.Input type="radio" isValid name="group1" />
                                        <Form.Check.Label style={{ color: "black" }}>{`Restricted Access`}</Form.Check.Label>
                                        <Form.Control.Feedback style={{ fontWeight: "100", color: "black" }}>Can access only assigned items or creted items</Form.Control.Feedback>
                                    </Form.Check>
                                </div>
                                <div className="vr" />
                                <div>
                                    <p>
                                        Permissions
                                    </p>
                                    <Form.Check label="View items in access" />
                                    <Form.Check label="Edit items in access" />
                                    <Form.Check label="Create items in access" />
                                    <Form.Check label="Delete items in access" />
                                </div>
                            </Stack>
                        </div>
                    </Collapse>
                </td>
            </tr >
        </>
    );
};

export default CollapsibleTableRow;