import React from 'react';
import PropTypes from 'prop-types';
// import { Button, ButtonContainer } from './FeedbackButtons.styled';

export const Statistics = ({ onGood, onNeutral, onBad, total, positive }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {onGood}</li>
      <li>Neutral: {onNeutral}</li>
      <li>Bad: {onBad}</li>
    </ul>
    <p>Total:{total}</p>
    <p>Positive feedback: {positive}%</p>
  </div>
);

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
