import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import './ProjectListing.css';
import logo from '../assets/Logo.png';
import Sidebar from '../components/Sidebar';

const ProjectListing = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/Project');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const updateProjectStatus = async (projectId, newStatus) => {
        try {
            await axios.put(`/api/Project/${projectId}`, { status: newStatus });
            setProjects(prevProjects =>
                prevProjects.map(project =>
                    project.projectId === projectId ? { ...project, status: newStatus } : project
                )
            );
        } catch (error) {
            console.error(`Error updating project status to ${newStatus}:`, error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching projects: {error.message}</p>;

    return (
        <>
            <div className="header">
                <h2>Project Listing</h2>
                <img src={logo} alt="Logo" className="background-logo" />
            </div>
            <Sidebar />
            <div className="container mt-4">
                <div className='search-sort'>
                    <input type="text" placeholder="Search" className="form-control mb-3" />
                    <DropdownButton id="dropdown-basic-button" title="Sort by">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
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
                                <td className="table-text">{project.department}</td>
                                <td className="table-text">{project.location}</td>
                                <td className="table-text">{project.status}</td>
                                <td>
                                    <Button
                                        className="mr-1 rounded-button rounded-button-primary"
                                        onClick={() => updateProjectStatus(project.projectId, 'Running')}
                                    >
                                        Start
                                    </Button>
                                    <Button
                                        className="mr-1 rounded-button rounded-button-secondary"
                                        onClick={() => updateProjectStatus(project.projectId, 'Closed')}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        className="rounded-button rounded-button-danger"
                                        onClick={() => updateProjectStatus(project.projectId, 'Cancelled')}
                                    >
                                        Cancel
                                    </Button>
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
