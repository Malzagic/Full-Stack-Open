import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

// Its from step 3 but I am using it from the beginning
const Statistic = ({ text, good, neutral, bad, total, avarage, positive }) => {
  return (
    <>
      <h2>{text}</h2>
      {/* Version 1.9 step 4 */}
      {total > 0 ? (
        // <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        //   {/* Version from part 1.7 Step 2 */}
        //   {/* <li>good {good}</li>
        //   <li>neutral {neutral}</li>
        //   <li>bad {bad}</li>
        //   <li>all {total}</li>
        //   <li>avarage {avarage} %</li>
        //   <li>positive {positive} %</li> */}
        //   {/* Version 1.10 step 5 */}
        //   {/* <StatisticLine text="good" value={good} />
        //   <StatisticLine text="neutral" value={neutral} />
        //   <StatisticLine text="bad" value={bad} />
        //   <StatisticLine text="all" value={total} />
        //   <StatisticLine text="avarage" value={avarage} />
        //   <StatisticLine text="positive" value={positive} /> */}
        // </ul>
        // Version 1.11 step 6
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="avarage" value={avarage} />
          <StatisticLine text="positive" value={positive} />
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

// Version from 1.10 step 5
const StatisticLine = ({ text, value }) => {
  return (
    // Version 1.10 step 5
    // <li>
    //   {text} {value} {text === "positive" ? "%" : ""}
    // </li>
    // Version 1.11 step 6
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === "positive" ? "%" : ""}
      </td>
    </tr>
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
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      {/* Version from part 1.6 setp 1 */}
      <Header text="give feedback" />
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      {/* Its from step 3 but I am using it from the beginning */}
      <Statistic
        text="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        // Version from part 1.7 Step 2
        total={total}
        // additional fixed value Version 1.11 step 6
        avarage={average.toFixed(1)}
        positive={positivePercentage.toFixed(1)}
      />
    </div>
  );
};

export default App;
