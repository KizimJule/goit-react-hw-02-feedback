// import { Feedback } from './feedback/Feedback';
import React, { Component } from 'react';

import { FeedbackOptions } from './feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from './feedback/Statistics/Statistics';
import { Section } from './feedback/Section/Section';
import { Notification } from './feedback/Notification/Notification';

export class App extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleClickGood = () => {
  //   this.setState(prevStateGood => {
  //     return {
  //       good: prevStateGood.good + 1,
  //     };
  //   });
  // };
  // handleClickNeutral = () => {
  //   this.setState(prevStateNeutral => {
  //     return {
  //       neutral: prevStateNeutral.neutral + 1,
  //     };
  //   });
  // };
  // handleClickBad = () => {
  //   this.setState(prevStateBad => {
  //     return {
  //       bad: prevStateBad.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    // if (good === 0) {
    //   return 0;
    // }
    const result = this.countTotalFeedback();
    const positiveFeedback = (good * 100) / result;
    return Math.round(positiveFeedback);
  };

  handleFeedback = event => {
    if (event === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (event === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          padding: 30,
          gap: 20,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
