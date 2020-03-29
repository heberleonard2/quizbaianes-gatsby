import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import quiz from "../images/imagem1.png"

import instagram from "../images/instagram.svg"

import "./styles.css"
import "./all.css"

export default () => (
  <>
    <div className="bg-1 ">
      <div className="container">
        <div className="col-lg-12">
          <div className="d-flex   align-items-center pt-4 mb-5">
            <h1 className=" mr-auto logo font-muli">
              <Link className="resetlink" to="/">
                Quiz Baianês
              </Link>
            </h1>

            <Link className="btn btn-outline-light font-muli" to="/">
              Voltar pra home
            </Link>
          </div>
        </div>
        <div className="row d-flex align-items-center p-3">
          <div className="col-lg-6">
            <h1 className="title font-mont">Pera ai</h1>
            <h2 className="subtitle font-muli">
              Essa página ainda ta sendo feita
            </h2>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid img-1" src={quiz} alt="quiz baianes" />
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
