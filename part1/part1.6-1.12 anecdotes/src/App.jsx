import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomIndex);
  };

  // Version 1.13 step 2
  const votesHandler = () => {
    const newVote = [...votes];
    newVote[selected] += 1;

    setVotes(newVote);
  };
  // ***

  const highestVote = votes.indexOf(Math.max(...votes));

  return (
    <>
      {/* Version 1.14 step 3 */}
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      {/*  */}
      <div>{anecdotes[selected]}</div>
      {/* Version 1.13 step 2 */}
      <div>has {votes[selected]} votes</div>
      {/*  */}
      <div>
        {/* Version 1.13 step 2 */}
        <button onClick={votesHandler}>Vote</button>
        {/*  */}
        <button onClick={nextAnecdote}>Next anecdotes</button>
      </div>
      {/* Version 1.14 step 3 */}
      <div>
        <h2>Anecdote with most votes</h2>
        {Math.max(...votes) > 0 ? (
          <p>{anecdotes[highestVote]}</p>
        ) : (
          <p>No votes yet</p>
        )}
      </div>
      {/*  */}
    </>
  );
};

export default App;
