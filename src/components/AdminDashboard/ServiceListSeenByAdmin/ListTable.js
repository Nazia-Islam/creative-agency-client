import React from 'react';
import './ListTable.css';
import { useState } from 'react';


const ListTable = ({service}) => {
    const currentStatus = service.status;
    const [dropdown, setDropdown] = useState(currentStatus);

    const handleDropdownChange = e => {
        setDropdown(e.target.value);
    }

    const handleUpdate = e => {
        const data = {"id" : service._id, "email": service.email, "status" : dropdown}
        fetch('http://localhost:5000/updateSatus', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
    })
    }
    return (
        <tr>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.serviceTitle}</td>
            <td>{service.projectDescription}</td>
            <td>
                <div>
                    {(currentStatus=== "Pending") && <select id="status-pending" value={dropdown} onChange={handleDropdownChange}>
                        <option value="Pending" className="bg-danger">Pending</option>
                        <option value="On going" className="bg-warning">On going</option>
                        <option value="Done" className="bg-success">Done</option>
                    </select>}
                    {(currentStatus=== "On going") && <select id="status-ongoing" value={dropdown} onChange={handleDropdownChange}>
                    <option value="Pending" className="bg-danger">Pending</option>
                    <option value="On going" className="bg-warning">On going</option>
                    <option value="Done" className="bg-success">Done</option>
                </select>}
               { (currentStatus=== "Done") && <select id="status-done" value={dropdown} onChange={handleDropdownChange}>
                <option value="Pending" className="bg-danger">Pending</option>
                <option value="On going" className="bg-warning">On going</option>
                <option value="Done" className="bg-success">Done</option>
            </select>  }              
                </div>
            </td>
            <td><button className="my-btn btn btn-outline-dark" onClick={handleUpdate}>Update</button></td>
        </tr>
    );
};

export default ListTable;