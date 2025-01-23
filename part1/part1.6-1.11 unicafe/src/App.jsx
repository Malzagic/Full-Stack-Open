import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Statistic = ({ text, good, neutral, bad, total, avarage, positive }) => {
  return (
    <>
      <h2>{text}</h2>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        {/* Version from part 1.7 Step 2 */}
        <li>all {total}</li>
        <li>avarage {avarage}</li>
        <li>positive {positive} %</li>
      </ul>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //* Version from part 1.7 Step 2
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      {/* Version from part 1.6 setp 1 */}
      <Header text="give feedback" />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Statistic
        text="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        // Version from part 1.7 Step 2
        total={total}
        avarage={average}
        positive={positivePercentage}
      />
    </div>
  );
};

export default App;
