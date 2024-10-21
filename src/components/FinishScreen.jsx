import React from 'react';

const FinishScreen = ({ dispatch, points, maxPossiblePoints }) => {
  // Calculate percentage score
  const percentage = (points / maxPossiblePoints) * 100;

  // Determine feedback message based on score
  const feedbackMessage =
    percentage === 100
      ? 'Excellent! Perfect score!'
      : percentage >= 75
      ? 'Great job! You did really well!'
      : percentage >= 50
      ? 'Good effort! Keep practicing.'
      : 'Don’t worry, try again and improve!';

  return (
    <>
      <style>
        {`
          .finish_screen {
              padding: 3rem;
              text-align: center;
              color: #fff;
              background-color: #17202a;
              border-radius: 10px;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
              width: 100%;
              max-width: 600px;
              margin: 2rem auto;
          }

          .finish_screen h2 {
              font-size: 2.5rem;
              margin-bottom: 1.5rem;
              color: #28a745;
          }

          .feedback_message {
              font-size: 1.8rem;
              margin-bottom: 2rem;
          }

          .score {
              font-size: 2.2rem;
              margin-bottom: 1rem;
          }

          .score span {
              color: #28a745; /* Green color for positive feeling */
          }

          .percentage {
              font-size: 1.5rem;
              margin-bottom: 2.5rem;
          }

          .percentage span {
              color: #3498db; /* Blue for percentage display */
          }

          .btn {
              padding: 0.8rem 2.5rem;
              background-color: #28a745;
              border: none;
              color: #fff;
              border-radius: 5px;
              font-size: 1.2rem;
              cursor: pointer;
              transition: background-color 0.3s ease;
          }

          .btn:hover {
              background-color: #218838;
          }
        `}
      </style>

      <div className="finish_screen">
        <h2>Quiz Complete!</h2>
        <p className="feedback_message">{feedbackMessage}</p>
        <p className="score">
          Your Score: <span>{points}</span> / {maxPossiblePoints}
        </p>
        <p className="percentage">
          Percentage: <span>{Math.round(percentage)}%</span>
        </p>
        <button className="btn" onClick={() => dispatch({ type: 'restart' })}>
          Restart Quiz
        </button>
      </div>
    </>
  );
};

export default FinishScreen;
