import React from 'react';
import PropTypes from 'prop-types';
// import { Button, ButtonContainer } from './FeedbackButtons.styled';

export const Title = ({ message }) => <h1>{message}</h1>;

Title.propTypes = {
  message: PropTypes.string.isRequired,
};
