import React, { Component } from 'react';

import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import { AppWrap } from 'components/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = event => {
    const feedbackName = event.target.textContent;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedbackValue =
      this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbackValue;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbackValue = this.countTotalFeedback();
    let positiveFeedbackPercentage = Math.round(
      this.state.good / (totalFeedbackValue / 100)
    );
    positiveFeedbackPercentage = isNaN(positiveFeedbackPercentage)
      ? 0
      : positiveFeedbackPercentage;
    return positiveFeedbackPercentage;
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <AppWrap>
        <SectionTitle title="Please leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.countFeedback}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </AppWrap>
    );
  }
}
