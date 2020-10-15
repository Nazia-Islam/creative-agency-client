import React from 'react';
import './ListTable.css';
//fa-pencil-square-o

const ListTable = ({service}) => {

    const handleUpdate = e => {
        const data = {service}
        fetch('http://localhost:5000//updateSatus', {
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
                <div class="form-group">
                    <select id="status-select">
                        <option selected="selected">{service.status}</option>
                        <option className="bg-danger">Pending</option>
                        <option className="bg-warning">On going</option>
                        <option className="bg-success">Done</option>
                    </select>
                </div>
            </td>
            <td><button onClick={handleUpdate}>Update</button></td>
        </tr>
    );
};

export default ListTable;