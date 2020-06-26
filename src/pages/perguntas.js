import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import api from "../../services/api"
import instagram from "../images/instagram.svg"
import { Link } from "gatsby"
import bgScore from "../images/bg-score.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "./all.css"

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
        <div className="bg-1-quiz">
          <div className="container">
            <div className="col-lg-12">
              <div className="d-flex  flex-md-row align-items-center    mb-3   ">
                <h1 className="my-2 mr-auto logo-blue font-muli">
                  <Link to="/" className="resetlink-blue">
                    Quiz Baianês
                  </Link>
                </h1>
                <Link style={{ color: "gray" }} className="btn font-muli">
                  <i to="/" className=" fas fa-long-arrow-alt-left "></i> Voltar
                  pro início
                </Link>
              </div>
            </div>
            <div className="row d-flex align-items-center p-3">
              <div className="col-lg-6">
                <h1 className="title font-mont" style={{ color: "#3abbc4" }}>
                  Nós te avaliamos
                </h1>
                <div className="resultado shadow-sm font-mont ">
                  <span style={{ fontSize: "30px" }}>
                    VOCÊ ACERTOU
                    <br />
                  </span>
                  {score}%
                </div>
                <Link to="/" className="mybtn font-muli">
                  <span className="icon" style={{ color: "white" }}>
                    REFAZER
                    <i
                      style={{ paddingLeft: "5px" }}
                      className=" fas fa-long-arrow-alt-right "
                    ></i>
                  </span>
                </Link>

                <div className="d-flex  flex-md-row align-items-center justify-content-center mt-5 mb-5   ">
                  <a
                    className="btn  font-muli"
                    href="https://www.instagram.com/heber_leonard/"
                    target="_blank"
                  >
                    <span className="roxo">
                      Criado por Héber Leonard{" "}
                      <img
                        src={instagram}
                        class="fab fa-instagram"
                        alt="instagram"
                      ></img>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block ">
                <img
                  className="img-fluid"
                  style={{ width: "95%", float: "right" }}
                  src={bgScore}
                  alt="background-score"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Quiz Baianês - Perguntas</title>
          <meta
            name="description"
            content="Descubra o quanto de baianes você consegue falar com o nosso quiz"
          />

          <meta name="author" content="Héber Leonard" />
        </Helmet>
        <div className="bg-1-quiz">
          <div className="container">
            {loading ? (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div className="loadingio-spinner-ellipsis-bv51xdi86p">
                  <div className="ldio-b4c3kdybjnc">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="col-lg-12">
                  <div className="d-flex  flex-md-row align-items-center    mb-3   ">
                    <h1 className="my-2 mr-auto logo-blue font-muli">
                      Questão {currentQuestion + 1}/{response.length}
                    </h1>
                    <Link
                      to="/"
                      style={{ color: "gray" }}
                      className="btn font-muli"
                    >
                      <i className=" fas fa-long-arrow-alt-left "></i> Voltar
                      pro início
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h2 className="subtitle font-muli">
                    <span className="title-pergunta">
                      Você sabe falar baianês?
                    </span>
                  </h2>
                  <h1 className="title-quiz font-mont">
                    {" "}
                    Então fala: "{questions}"
                  </h1>
                </div>
                <div className="row d-flex align-items-center p-3 font-muli">
                  {options2.map(options => (
                    <div className="col-lg-6 ">
                      <p
                        className="question-perguntas shadow-sm"
                        className={`${
                          myAnswer === options
                            ? "questions-perguntas-select shadow-sm "
                            : "questions-perguntas shadow-sm"
                        }`}
                        onClick={() => checkAnswer(options)}
                      >
                        {options}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="col-lg-12">
                  <div className="d-flex align-items-center justify-content-center">
                    {currentQuestion < response.length - 1 && (
                      <button
                        disabled={disabled}
                        onClick={nextQuestionHandler}
                        className="mybtn-quiz font-muli"
                      >
                        <span className="icon">
                          CONTINUAR
                          <i
                            style={{ paddingLeft: "5px" }}
                            className=" fas fa-long-arrow-alt-right "
                          ></i>
                        </span>
                      </button>
                    )}

                    {currentQuestion === response.length - 1 && (
                      <button
                        disabled={disabled}
                        onClick={finishQuestionHandler}
                        className="mybtn-quiz font-muli"
                      >
                        <span className="icon">
                          FINALIZAR
                          <i
                            style={{ paddingLeft: "5px" }}
                            className=" fas fa-long-arrow-alt-right "
                          ></i>
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="container">
                  <div className="d-flex  flex-md-row align-items-center justify-content-center mt-5 mb-5   ">
                    <a
                      className="btn  font-muli"
                      href="https://github.com/heberleonard2/quizbaianes-gatsby/"
                      target="_blank"
                    >
                      <span className="roxo">
                        GitHub <i class="fab fa-github"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}
