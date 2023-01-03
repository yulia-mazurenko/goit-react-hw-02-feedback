import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedbackName => {
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((total, value) => total + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = `${
      (this.state.good * 100) / this.countTotalFeedback()
    }`;
    return `${Math.round(Number(totalFeedback))}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}
