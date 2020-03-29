import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import "./styles.css"
import "./all.css"

export default () => (
  <>
    <div className="bg-error ">
      <div className="container">
        <div className="col-lg-12">
          <div className="d-flex   align-items-center pt-4 mb-5">
            <h1 className=" mr-auto logo font-muli">
              <Link className="resetlink" to="/">
                Quiz Baianês
              </Link>
            </h1>

            <Link to="/" className="btn btn-outline-light font-muli">
              Voltar
            </Link>
          </div>
        </div>
        <div className="row d-flex align-items-center p-3">
          <div className="col-lg-12">
            <h1 className="title font-mont">Oooops!</h1>
            <h2 className="subtitle font-muli">Essa página não existe</h2>
            <Link className="mybtn font-muli" to="/">
              <span className="icon">
                VOLTAR
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
  </>
)
