import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedbackButtons.styled';

export const FeedbackButtons = ({
  onHandleClickGood,
  onHandleClickNeutral,
  onHandleClickBad,
}) => (
  <ButtonContainer>
    <Button type="button" onClick={onHandleClickGood}>
      Good
    </Button>
    <Button type="button" onClick={onHandleClickNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={onHandleClickBad}>
      Bad
    </Button>
  </ButtonContainer>
);
FeedbackButtons.propTypes = {
  onHandleClickGood: PropTypes.func.isRequired,
  onHandleClickNeutral: PropTypes.func.isRequired,
  onHandleClickBad: PropTypes.func.isRequired,
};
