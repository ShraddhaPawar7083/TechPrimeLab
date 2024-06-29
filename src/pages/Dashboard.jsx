import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../assets/Logo.png'; 
import headerBackground from '../assets/Header-bg.png'; 
import './Dashboard.css'; 
import { Container, Row, Col, Card as BootstrapCard } from 'react-bootstrap';
import Card from '../components/Card'; 
import Sidebar from '../components/Sidebar'; 

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Container fluid className="dashboard-container">
        <Row className="header-row text-white align-items-center p-3">
          <Col md={8}>
            <h1>Dashboard</h1>
          </Col>
          <Col md={4} className="text-center">
            <img src={logo} alt="Logo" className="dashboard-logo" />
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center">
          <Col md={2} className="mb-3">
            <Card title="Total Projects" value="8" />
          </Col>
          <Col md={2} className="mb-3">
            <Card title="Closed" value="2" />
          </Col>
          <Col md={2} className="mb-3">
            <Card title="Running" value="3" />
          </Col>
          <Col md={2} className="mb-3">
            <Card title="Closure Delay" value="2" />
          </Col>
          <Col md={2} className="mb-3">
            <Card title="Cancelled" value="3" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <h4>Department wise - Total Vs Closed</h4>
          </Col>
          <Col md={12}>
            <BootstrapCard className="p-3">
              {/* Placeholder for the chart */}
              <div className="chart-placeholder">
                {/* Replace with actual chart component */}
                <img src="../assets/chart-placeholder.png" alt="Chart" />
              </div>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
