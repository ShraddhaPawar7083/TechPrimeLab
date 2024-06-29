import React from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import './ProjectListing.css';
import logo from '../assets/Logo.png';
import Sidebar from '../components/Sidebar';

const projects = [
    { name: "Line Filter", reason: "Business", type: "Internal", division: "Compressor", category: "Quality A", priority: "High", dept: "Strategy", location: "Pune", status: "Running", startDate: "Jun-21, 2020", endDate: "Jan-01, 2021" },
    { name: "Sticker Management", reason: "Dealership", type: "External", division: "Filters", category: "Quality B", priority: "Low", dept: "Finance", location: "Delhi", status: "Running", startDate: "Jan-01, 2021", endDate: "Jun-31, 2021" },
    { name: "Pumps Connector", reason: "Transport", type: "Internal", division: "Compressor", category: "Quality C", priority: "Medium", dept: "Quality", location: "Mumbai", status: "Registered", startDate: "Feb-01, 2021", endDate: "July-31, 2021" },
    { name: "Wall Reflector", reason: "Business", type: "Vendor", division: "Pumps", category: "Quality A", priority: "High", dept: "Maintenance", location: "Pune", status: "Cancelled", startDate: "Mar-05, 2021", endDate: "Dec-31, 2021" },
    { name: "Tank Filter", reason: "Business", type: "External", division: "Glass", category: "Quality A", priority: "High", dept: "Stores", location: "Mumbai", status: "Registered", startDate: "Jan-01, 2021", endDate: "Nov-20, 2021" },
    { name: "Water Heater", reason: "Dealership", type: "Vendor", division: "Compressor", category: "Quality D", priority: "Low", dept: "Finance", location: "Pune", status: "Cancelled", startDate: "July-01, 2021", endDate: "Nov-20, 2022" },
    { name: "Large Mixer", reason: "Transport", type: "External", division: "Water Heater", category: "Quality A", priority: "Low", dept: "Stores", location: "Delhi", status: "Closed", startDate: "Feb-01, 2021", endDate: "Oct-20, 2021" }
];

const ProjectListing = () => {
    return (
        <>
            <div className="header">
                <h2>Project Listing</h2>
                <img src={logo} alt="Logo" className="background-logo" />
            </div>
            <Sidebar/>
            <div className="container mt-4">
              <div className='search-sort'>
                <input type="text" placeholder="Search" className="form-control mb-3" />
                <span>Sort By: Priority</span>
              </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Reason</th>
                            <th>Type</th>
                            <th>Division</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Dept.</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index}>
                              <td className="table-text">
                                {project.name}<br /><small>{project.startDate} to {project.endDate}</small>
                              </td>
                                <td className="table-text">{project.reason}</td>
                                <td className="table-text">{project.type}</td>
                                <td className="table-text">{project.division}</td>
                                <td className="table-text">{project.category}</td>
                                <td className="table-text">{project.priority}</td>
                                <td className="table-text">{project.dept}</td>
                                <td className="table-text">{project.location}</td>
                                <td className="table-text">{project.status}</td>
                                <td>
                                  <Button className="mr-1 rounded-button rounded-button-primary">Start</Button>
                                  <Button className="mr-1 rounded-button rounded-button-secondary">Close</Button>
                                  <Button className="rounded-button rounded-button-danger">Cancel</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <div className="d-flex justify-content-between align-items-center">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{56}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </>
    );
}

export default ProjectListing;