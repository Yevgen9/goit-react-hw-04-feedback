
import React, { useEffect, useState } from "react";

import Controls from "./Controls";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodIncrement = () => {
    setGood((prevState) => prevState + 1);
  };

  const neutralIncrement = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const badIncrement = () => {
    setBad((prevState) => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    const total = countTotalFeedback();

    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  // useEffect(() => {
  //     const totalFeedback = countTotalFeedback();
  //     const positivePercentage = countPositiveFeedback();
  // })

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedback();

  return (
    <div>
      <h1>Please leave feedback</h1>

      <Controls
        onIncrement={goodIncrement}
        onNeutralIncrement={neutralIncrement}
        onBadIncrement={badIncrement}
      />

      <Section>
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotalFeedback={totalFeedback}
            onPositivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
