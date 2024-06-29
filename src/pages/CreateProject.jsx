import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CreateProject.css'; 
import logo from '../assets/Logo.png'; 

const CreateProject = () => {
  const [project, setProject] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to save project details
    console.log(project);
  };

  return (
    <Container className="create-project-container">
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
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="reason">
              <Form.Label>Reason</Form.Label>
              <Form.Control 
                as="select" 
                name="reason" 
                value={project.reason} 
                onChange={handleChange}
              >
                <option>For Business</option>
                <option>For Research</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control 
                as="select" 
                name="type" 
                value={project.type} 
                onChange={handleChange}
              >
                <option>Internal</option>
                <option>External</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="division">
              <Form.Label>Division</Form.Label>
              <Form.Control 
                as="select" 
                name="division" 
                value={project.division} 
                onChange={handleChange}
              >
                <option>Filters</option>
                <option>Hardware</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                as="select" 
                name="category" 
                value={project.category} 
                onChange={handleChange}
              >
                <option>Quality A</option>
                <option>Quality B</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control 
                as="select" 
                name="priority" 
                value={project.priority} 
                onChange={handleChange}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control 
                as="select" 
                name="department" 
                value={project.department} 
                onChange={handleChange}
              >
                <option>Strategy</option>
                <option>Development</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                as="select" 
                name="location" 
                value={project.location} 
                onChange={handleChange}
              >
                <option>Pune</option>
                <option>Mumbai</option>
              </Form.Control>
            </Form.Group>
          </Col>
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
        </Row>
        <Row className="mt-3">
          <Col md={4} className="status-text">
            Status: {project.status}
          </Col>
          <Col md={8} className="text-right">
            <Button type="submit" variant="primary">Save Project</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateProject;
