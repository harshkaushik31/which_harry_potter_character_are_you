import { useState } from "react"
import { questions } from "./constants/questions"
import axios from 'axios';
import { ClipLoader } from 'react-spinners'

function App() {

  const quizQuestions = questions.quiz.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const currentQuestion = quizQuestions[currentIndex];

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        answer
      }
    ]

    setAnswers(updatedAnswers);

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      submitQuiz(updatedAnswers);
    }
  }

  const submitQuiz = async (finalAnswers) => {
    setLoading(true);

    try {
      const base_url = import.meta.env.VITE_API_URL;
      const res = await axios.post(
        `${base_url}/api/v1/get-charachter`,
        { questions: finalAnswers }
      );


      console.log(res.data);

      setResult(res.data.charachter);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  if (loading) {
    return (
      <div className="bg-[#0e1a40] min-h-screen flex flex-col items-center justify-center text-[#936b2d]" >
        <h1>Analysing your personality...</h1>
        <ClipLoader
        color="#936b2d"
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }

  if (result) {
    return (
      <div className="bg-[#0e1a40] min-h-screen flex flex-col items-center justify-center hp-title text-[#936b2d]">
        <h1 className="text-4xl mb-4">You are</h1>
        <h2 className="text-5xl font-bold">{result}</h2>
      </div>
    )
  }

  return (
    <>
      <div className="bg-[#0e1a40] min-h-screen p-6 body-text text-[#936b2d]">
        <h1 className="text-4xl text-center mb-4 hp-title text-[#936b2d]">
          {questions.quiz.title}
        </h1>

        <p className="text-center text-xl mb-8">
          {questions.quiz.description}
        </p>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl mb-6">
            {currentQuestion.question}
          </h2>

          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className="bg-[#1b2a6b] hover:bg-[#273c9b] p-4 rounded-lg text-left"
              >
                {option}
              </button>
            ))}
          </div>

        </div>

      </div>

    </>
  )
}

export default App
