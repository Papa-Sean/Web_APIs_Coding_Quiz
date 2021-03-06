import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Thanks for playing! My thoughts about your coding knowledge:  <strong>{props.quizResult}</strong> Keep up the good work!
      </div>
    </CSSTransitionGroup>
  );
} 

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;