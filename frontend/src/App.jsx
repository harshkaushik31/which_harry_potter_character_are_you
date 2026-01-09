import { useState } from "react"
import { questions } from "./constants/questions"

function App() {

  const [question, setQuestion] = useState(questions.quiz.questions)

  const [responseQuestion, setResponseQuestion] = useState()


  return (
    <>
      <div className="bg-[#0e1a40]">
        <div className="flex text-white items-center justify-center text-4xl p-4">
          {questions.quiz.title}
        </div>

        <div className="flex text-white items-center justify-center text-2xl m-4 p-4">
          {questions.quiz.description}
        </div>

        <div className="text-white">
          {
            question.map((item) => (
              <div key={item.id}>
                <label>
                  <div>{item.question}</div>
                  <select>
                    {
                      item.options.map((option,index) => (
                        <option value={option} key={index}>{option}</option>
                      ))
                    }
                  </select>
                </label>

              </div>
            ))
          }
        </div>


      </div>

    </>
  )
}

export default App
