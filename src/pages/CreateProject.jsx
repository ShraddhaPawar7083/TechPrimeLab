import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './CreateProject.css'; 
import logo from '../assets/Logo.png'; 
import Sidebar from '../components/Sidebar';

const CreateProject = () => {
  const initialProjectState = {
    theme: '',
    reason: '',
    type: '',
    division: '',
    category: '',
    priority: '',
    department: '',
    location: '',
    startDate: '',
    endDate: '',
    status: 'Registered'
  };

  const [project, setProject] = useState(initialProjectState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleDropdownChange = (field, value) => {
    setProject(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post('/api/project', project); 
      setSuccess(true);
      setProject(initialProjectState);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (newStatus) => {
    setLoading(true);
    setError(null);

    try {
      setProject({ ...project, status: newStatus });
      await axios.put('/api/project/status', { projectId: project.projectId, status: newStatus });
      setSuccess(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const dropdownOptions = {
    reason: ['Business', 'Dealership', 'Transport'],
    type: ['Internal', 'External'],
    division: ['Filters', 'Compressor', 'Pumps', 'Glass', 'Water Heater'],
    category: ['Quality A', 'Quality B', 'Quality C', 'Quality D'],
    priority: ['High', 'Medium', 'Low'],
    department: ['Strategy', 'Finance', 'Quality', 'Maintenance', 'Stores'],
    location: ['Pune', 'Mumbai', 'Delhi'],
  };

  return (
    <Container className="create-project-container">
      <Sidebar />
      <Row className="header-row text-white align-items-center p-3">
        <Col md={8}>
          <h1>Create Project</h1>
        </Col>
        <Col md={4} className="text-center">
          <img src={logo} alt="Logo" className="dashboard-logo" />
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-3">
          <Col md={12}>
            <Form.Group controlId="projectTheme">
              <Form.Control 
                type="text" 
                placeholder="Enter Project Theme" 
                name="theme" 
                value={project.theme} 
                onChange={handleChange} 
              />
            </Form.Group>
          </Col>
          <Col md={12} className="text-right">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Saving...' : 'Save Project'}
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="reason">
              <Form.Label>Reason</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-reason" className="custom-dropdown-toggle">
                  {project.reason || 'Select Reason'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.reason.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('reason', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-type" className="custom-dropdown-toggle">
                  {project.type || 'Select Type'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.type.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('type', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="division">
              <Form.Label>Division</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-division" className="custom-dropdown-toggle">
                  {project.division || 'Select Division'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.division.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('division', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-category" className="custom-dropdown-toggle">
                  {project.category || 'Select Category'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.category.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('category', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-priority" className="custom-dropdown-toggle">
                  {project.priority || 'Select Priority'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.priority.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('priority', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-department" className="custom-dropdown-toggle">
                  {project.department || 'Select Department'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.department.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('department', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date as per Project Plan</Form.Label>
              <Form.Control 
                type="date" 
                name="startDate" 
                value={project.startDate} 
                onChange={handleChange} 
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="endDate">
              <Form.Label>End Date as per Project Plan</Form.Label>
              <Form.Control 
                type="date" 
                name="endDate" 
                value={project.endDate} 
                onChange={handleChange} 
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-location" className="custom-dropdown-toggle">
                  {project.location || 'Select Location'}
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu">
                  {dropdownOptions.location.map(option => (
                    <Dropdown.Item 
                      key={option} 
                      onClick={() => handleDropdownChange('location', option)}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4} className="status-text">
            Status: {project.status}
          </Col>
        </Row>
        {/* <Row className="mt-3">
          <Col md={12}>
            <Button
              className="mr-1 rounded-button rounded-button-primary"
              onClick={() => handleStatusChange('Running')}
              disabled={loading}
            >
              Start
            </Button>
            <Button
              className="mr-1 rounded-button rounded-button-secondary"
              onClick={() => handleStatusChange('Closed')}
              disabled={loading}
            >
              Close
            </Button>
            <Button
              className="rounded-button rounded-button-danger"
              onClick={() => handleStatusChange('Cancelled')}
              disabled={loading}
            >
              Cancel
            </Button>
          </Col>
        </Row> */}
        {error && <Row className="mt-3"><Col md={12} className="text-danger">{error.message}</Col></Row>}
        {success && <Row className="mt-3"><Col md={12} className="text-success">Project saved successfully!</Col></Row>}
      </Form>
    </Container>
  );
};

export default CreateProject;
