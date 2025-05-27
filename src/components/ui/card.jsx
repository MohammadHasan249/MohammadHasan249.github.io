import React from 'react';
import PropTypes from 'prop-types';

// Minimal Card component
const Card = ({ className, children, ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Minimal CardHeader component
const CardHeader = ({ className, children, ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Minimal CardContent component
const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Card, CardHeader, CardContent }; 