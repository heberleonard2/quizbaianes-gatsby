import React, { useState, useEffect } from "react"
import api from "../../services/api"
import instagram from "../../img/instagram.svg"
import { Link } from "gatsby"
import "./styles.css"

export default function Perguntas({ history }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [myAnswer, setMyAnswer] = useState("null")
  const [answer, setAnswer] = useState("null")
  const [questions, setQuestions] = useState("")
  const [options2, setOptions2] = useState([])
  const [score, setScore] = useState(0)
  const [response, setResponse] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [medidor, setMedidor] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPerguntas() {
      setDisabled(true)
      setLoading(true)
      const response = await api.get("/perguntas")
      setLoading(false)
      setResponse(response.data)
      const questions = await response.data[currentQuestion].question
      setQuestions(questions)
      const answer = await response.data[currentQuestion].answer
      setAnswer(answer)
      const options = await response.data[currentQuestion].options
      setOptions2(options)
    }
    loadPerguntas()
  }, [currentQuestion])

  async function nextQuestionHandler() {
    if (myAnswer === answer) {
      setScore(score + 12.5)
    }

    setCurrentQuestion(currentQuestion + 1)
  }
  function finishQuestionHandler() {
    if (myAnswer === answer) {
      setScore(score + 12.5)
    }
    if (score >= 70) {
      setMedidor("ééé pai, ta manjando.")
    } else if (score < 40) {
      setMedidor("Pivete, tu errou quase tudo.")
    } else {
      setMedidor("Pivete, sabe um pouquinho, mas precisa melhorar.")
    }
    setIsEnd(true)
  }
  function checkAnswer(answer2) {
    setMyAnswer(answer2)
    setDisabled(false)
  }

  if (isEnd) {
    return (
      <>
        <div className="bg-perguntas ">
          <div className="container ">
            <h1 className="title-score">Seu Score</h1>
            <div className="box-score shadow-sm">
              <h3 className="texto-score">Você acertou</h3>
              <h2 className="score">{score}%</h2>
            </div>
            <h3 className="texto-score">{medidor}</h3>
            <Link to="/">
              {" "}
              <button class="botao-score">Refazer</button>
            </Link>

            <div className="centro">
              <h6 className="criador">Criado por Héber Leonard</h6>
              <a
                target="_blank"
                href="https://www.instagram.com/heber_leonard/"
              >
                <img className="instagram" src={instagram} alt="instagram" />
              </a>{" "}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="bg-perguntas">
          <div className="container flex-box2  animated">
            <span className="questao-p">
              {loading ? (
                <h3 className="title-perguntas">
                  <div className="loadingio-spinner-ellipsis-bv51xdi86p">
                    <div className="ldio-b4c3kdybjnc">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </h3>
              ) : (
                <>
                  <Link to="/">
                    <button className="voltarinicio"> Voltar pro inicio</button>
                  </Link>
                  <h3 className="nivel-perguntas">
                    Questão {currentQuestion + 1}{" "}
                    <span> /{response.length}</span>
                  </h3>

                  <h3 className="title-perguntas">
                    Então fala: <br />
                    <span className="bold-question">"{questions}"</span>
                  </h3>
                  {options2.map(options => (
                    <p
                      className={`${
                        myAnswer === options
                          ? "questions-perguntas-select shadow-sm "
                          : "questions-perguntas shadow-sm"
                      }`}
                      onClick={() => checkAnswer(options)}
                    >
                      {options}
                    </p>
                  ))}
                  {currentQuestion < response.length - 1 && (
                    <button
                      disabled={disabled}
                      className="botao cada"
                      onClick={nextQuestionHandler}
                    >
                      Continuar
                    </button>
                  )}

                  {currentQuestion === response.length - 1 && (
                    <button
                      disabled={disabled}
                      onClick={finishQuestionHandler}
                      className="botao cada"
                    >
                      Acabar o baba
                    </button>
                  )}
                </>
              )}
            </span>
          </div>
        </div>
      </>
    )
  }
}
