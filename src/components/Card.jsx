import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard } from 'react-bootstrap';
import './Card.css'; 

const Card = ({ title, value }) => {
  return (
    <BootstrapCard className="text-center custom-card">
      <BootstrapCard.Body>
        <BootstrapCard.Title className="custom-card-title">{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="custom-card-value">{value}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Card;
