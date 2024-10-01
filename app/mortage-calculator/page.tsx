"use client"
import "./mortage-calculator.scss";
import secondSectionImg from "./images/illustration-empty.svg";
import calculatorImg from "./images/icon-calculator.svg";
import { useState } from "react";

export default function MortageCalculator() {
  const [mortageAmount, setMortageAmount] = useState<number | string>(),
    [mortageTerm, setMortageTerm] = useState<number | string>(),
    [interestRate, setInterestRate] = useState<number | string>(),
    [rep, setRep] = useState<boolean>(false),
    [iO, setIo] = useState<boolean>(false),
    [toResult, setToResult] = useState<boolean>(true);

  function formMethod(formEvent: any) {
    formEvent.preventDefault();
    console.log({
      mortageAmount,
      mortageTerm,
      interestRate,
      rep,
      iO,
    });
    setToResult(!toResult);
  }

  return (
    <>
      <main id="main_mortage_component">
        <form onSubmit={formMethod}>
          <section>
            <div id="first_div">
              <span>
                <h1>Mortage Calculator (dummy form)</h1>
              </span>
              <span>Clear All</span>
            </div>

            <div id="second_div">
              <div>Mortage Amount</div>
              <div>
                <span>
                  <button>
                    £
                  </button>
                </span>
                <span>
                  <input
                    value={mortageAmount}
                    onChange={(t) => setMortageAmount(t.target.value)}
                    type="number"
                    required
                  />
                </span>
              </div>
            </div>

            <div id="third_div">
              <div className="each_component">
                <div>Mortage Term</div>
                <div className="each_inner">
                  <span>
                    <input
                      value={mortageTerm}
                      onChange={(t) => setMortageTerm(t.target.value)}
                      type="number"
                      required
                    />
                  </span>
                  <span>
                    <button>years</button>
                  </span>
                </div>
              </div>
              <div className="each_component">
                <div>Interest Rate</div>
                <div className="each_inner">
                  <span>
                    <input
                      value={interestRate}
                      onChange={(t) => setInterestRate(t.target.value)}
                      type="number"
                      required
                    />
                  </span>
                  <span>
                    <button>%</button>
                  </span>
                </div>
              </div>
            </div>

            <div id="fourth_div">
              <div>Mortage Type</div>
              <div className="each_component">
                <span>
                  <input
                    onChange={(t) => setRep(t.target.checked)}
                    type="checkbox"
                  />
                </span>
                <span>Repayment</span>
              </div>
              <div className="each_component">
                <span>
                  <input
                    onChange={(t) => setIo(t.target.checked)}
                    type="checkbox"
                  />
                </span>
                <span>Interest Only</span>
              </div>
            </div>

            <div id="fifth_div">
              <button>
                <span>
                  <img src={calculatorImg} alt="" />
                </span>
                <span>Calculate Repayment</span>
              </button>
            </div>
          </section>

          <section>
            {toResult ? <InitialSecondDiv /> : <ResultSecondComponent />}
          </section>
        </form>
      </main>
    </>
  );
}

function InitialSecondDiv() {
  return (
    <div className="inner_divison">
      <img src={secondSectionImg} alt="" />
      <div>Results shown here</div>
      <p>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

function ResultSecondComponent() {
  return (
    <div className="result_second_component">
      <b>Your results</b>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div id="second_div">
        <div>
          <p>
            Your monthly repayments
          </p>
          <b id="monthly_repayment">£1,797.74</b>
        </div>
        <hr />
        <div>
          <p>
            Total you'll repay over the term
          </p>
          <b id="repay_over_term">£539,322.94</b>
        </div>
      </div>
    </div>
  );
}
