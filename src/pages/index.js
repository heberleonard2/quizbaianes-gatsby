import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import quiz from "../images/imagem1.png"
import celular from "../images/celular.png"

import instagram from "../images/instagram.svg"

import "./styles.css"
import "./all.css"

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Quiz Baianês</title>
      <meta
        name="description"
        content="Descubra o quanto de baianes você consegue falar com o nosso quiz"
      />
      <meta
        name="keywords"
        content="quiz, bahia, baianês, jogos da bahia, quiz baianês"
      />
      <meta name="author" content="Héber Leonard" />
    </Helmet>
    <div className="bg-1 ">
      <div className="container">
        <div className="col-lg-12">
          <div className="d-flex   align-items-center pt-4 mb-5">
            <h1 className=" mr-auto logo font-muli">
              <Link className="resetlink" to="/">
                Quiz Baianês
              </Link>
            </h1>

            <Link to="/sugestoes" className="btn btn-outline-light font-muli">
              Sugestões
            </Link>
          </div>
        </div>
        <div className="row d-flex align-items-center p-3">
          <div className="col-lg-6">
            <h1 className="title font-mont">Você sabe falar baianês?</h1>
            <h2 className="subtitle font-muli">
              Nosso quiz é perfeito para você descobrir.
            </h2>
            <Link className="mybtn font-muli" to="/perguntas">
              <span className="icon">
                VUMBORA
                <i
                  style={{ paddingLeft: "5px" }}
                  className=" fas fa-long-arrow-alt-right "
                ></i>
              </span>
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid img-1" src={quiz} alt="quiz-baianes" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-2">
      <div className="container">
        <div className="title-2 font-mont ">O DIALETO BAIANÊS</div>
        <p className="font-muli subtitle-2">
          Um dos elementos centrais da identidade baiana e motivo de orgulho
          para muitos baianos.
          <br />
          Tem como costume abreviar palavras e acabar criando outras com
          significado que pode ser até diferente do inicial.
        </p>
        <p className="font-muli text-link">
          Fonte:{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Dialeto_baiano"
            target="_blank"
          >
            Wikipedia - Dialeto Baiano
          </a>
        </p>
      </div>
    </div>

    <div className="bg-3">
      <div className="container">
        <div className="row d-flex align-items-center p-3">
          <div className="col-lg-6">
            <img className="img-fluid img-2" src={celular} alt="score" />
          </div>
          <div className="col-lg-6">
            <h1 className="title-3 font-mont">
              Descubra o seu score e compartilhe com seus amigos
            </h1>

            <Link
              to="/perguntas"
              style={{ backgroundColor: "#3ABBC4" }}
              className="mybtn font-muli"
            >
              <span class="icon">
                VUMBORA
                <i
                  style={{ paddingLeft: "5px" }}
                  className=" fas fa-long-arrow-alt-right "
                ></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-4">
      <div className="container">
        <div className="col-lg-12">
          <div className="d-flex  flex-md-row align-items-center mt-5 mb-5   ">
            <h1 className="my-2 mr-auto footer-logo font-muli">Quiz Baianês</h1>
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
      </div>
    </div>
  </>
)
