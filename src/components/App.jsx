import React from "react";
import { useState} from "react";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";


export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // }

  const[good, setStateGood] = useState('');
  const[neutral, setStateNeutral] = useState('');
  const[bad, setStatebad] = useState('');
  // const[countTotalFeedback, setTotalFedback] =setState('');

  const handleIncreament = (key) => {
    switch (key) {
      case "good":
        setStateGood(state => Number(state)+1);
        break;
      case "neutral":
        setStateNeutral(state => Number(state)+1);
          break;
      case "bad":
        setStatebad(state => Number(state)+1);
          break;
      default:
        break;
    }

  }
  

const countTotalFeedback = () => Number(good + neutral + bad);
       


const countPositiveFeedbackPercentage = () => Math.round((good / (good+neutral+bad)) * 100)

  // countPositiveFeedbackPercentage = () =>
  //   Math.round((this.state.good / this.countTotalFeedback()) * 100)
    const options = ['good',"neutral","bad"];
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}
      >
        <Section title={"Please Leave Feedback"}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleIncreament}
        />
        </Section>
        {countTotalFeedback() <= 0 ? <Notification message="Not Feedback given"/>:
        <>
        <Section title="Statistic">
        <Statistic 
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}
        />
        </Section>
        </>
        }
      </div>
      )};
