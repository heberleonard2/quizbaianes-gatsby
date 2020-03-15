import React from "react"
import { Link } from "gatsby"
import logo from "../../img/logobaianes.png"
import "./styles.css"

export default () => (
  <>
    <div className="bg-home">
      <div className="container flex-box">
        <img className="logo " alt="quiz-baianes" src={logo} />
        <div className="content shadow">
          <h1 className="titulo">Você sabe falar baianês? </h1>
          <h2 className="subtitulo">
            Responda nosso quiz ai que a gente vai ver se tu sabe mesmo
          </h2>
          <Link to="/perguntas">
            <button class="botao">SIMBORA</button>
          </Link>
        </div>
      </div>
    </div>
  </>
)
