import { useState } from "react"
import {
  assessmentQuestions,
  tobaccoQuestion,
} from "./data/questions"

const businessTypes = [
  "Restaurant / Café",
  "Hotel",
  "Caterer",
  "Cloud Kitchen",
  "Canteen / Institutional Food Service",
  "E-commerce / Online Food Seller",
  "Manufacturer / Processor",
  "Retailer / Distributor",
  "Home-Based Food Business",
  "Other",
]

const turnoverOptions = [
  "Up to ₹1.5 Crore",
  "₹1.5–₹50 Crore",
  "Above ₹50 Crore",
  "Not Sure",
]

function App() {
  const [screen, setScreen] = useState(1)

  const [businessType, setBusinessType] = useState("")
  const [turnover, setTurnover] = useState("")

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const [tobaccoAnswer, setTobaccoAnswer] = useState("")

  // --------------------------------------------------
  // QUESTION ANSWER HANDLER
  // --------------------------------------------------

  const handleAnswer = (value) => {
    const question = assessmentQuestions[currentQuestion]

    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }))

    setTimeout(() => {
      if (currentQuestion < assessmentQuestions.length - 1) {
        setCurrentQuestion((previous) => previous + 1)
      } else {
        setScreen(4)
      }
    }, 180)
  }

  // --------------------------------------------------
  // SCREEN 4 — TOBACCO FLAG
  // --------------------------------------------------

  if (screen === 4) {
    return (
      <main className="app">
        <div className="container">

          <header className="brand">
            <span className="brand-name">
              PRAKRITVA™
            </span>

            <span className="brand-divider">
              •
            </span>

            <span>
              FSSAI COMPLIANCE ASSISTANCE
            </span>
          </header>

          <section className="assessment-screen">

            <div className="screen-top">

              <button
                className="back-button"
                type="button"
                onClick={() => {
                  setCurrentQuestion(
                    assessmentQuestions.length - 1
                  )

                  setScreen(3)
                }}
              >
                ← Back
              </button>

              <span className="progress">
                SPECIAL FLAG
              </span>

            </div>

            <div className="flag-badge">
              ⚠️ SPECIAL REGULATORY FLAG
            </div>

            <h1 className="assessment-title">
              One more
              <br />
              important question
            </h1>

            <p className="assessment-intro">
              This question is separate from your
              10-point preliminary assessment.
            </p>

            <div className="question-card tobacco-card">

              <div className="question-meta">

                <span className="question-number">
                  SPECIAL QUESTION
                </span>

                <span className="importance">
                  NOT PART OF SCORE
                </span>

              </div>

              <h2>
                {tobaccoQuestion.title}
              </h2>

              <p className="question-text">
                {tobaccoQuestion.question}
              </p>

              <p className="question-guidance">
                {tobaccoQuestion.guidance}
              </p>

            </div>

            <div className="answer-list">

              {tobaccoQuestion.answers.map((answer) => (

                <button
                  key={answer.value}
                  type="button"
                  className={`answer-button ${
                    tobaccoAnswer === answer.value
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    setTobaccoAnswer(answer.value)

                    setTimeout(() => {
                      setScreen(5)
                    }, 180)
                  }}
                >

                  <span
                    className={`answer-dot ${
                      answer.value
                    }`}
                  />

                  <span>
                    {answer.label}
                  </span>

                  {tobaccoAnswer === answer.value && (
                    <span className="answer-check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

            <p className="assessment-note">
              This answer is recorded as a separate
              regulatory flag and does not affect your
              preliminary score.
            </p>

          </section>
        </div>
      </main>
    )
  }

  // --------------------------------------------------
  // SCREEN 5 — TEMPORARY PLACEHOLDER
  // --------------------------------------------------

  if (screen === 5) {
    return (
      <main className="app">
        <div className="container">

          <header className="brand">
            <span className="brand-name">
              PRAKRITVA™
            </span>

            <span className="brand-divider">
              •
            </span>

            <span>
              FSSAI COMPLIANCE ASSISTANCE
            </span>
          </header>

          <section className="result-placeholder">

            <div className="success-icon">
              ✓
            </div>

            <p className="eyebrow">
              ASSESSMENT COMPLETE
            </p>

            <h1>
              Thank you.
            </h1>

            <p className="subtitle">
              Your preliminary assessment has been
              completed successfully.
            </p>

            <div className="placeholder-card">

              <strong>
                Result screen coming next
              </strong>

              <p>
                We'll calculate your preliminary
                assessment and show the areas that
                may need attention.
              </p>

            </div>

          </section>

        </div>
      </main>
    )
  }

  // --------------------------------------------------
  // SCREEN 3 — 10 QUESTION ASSESSMENT
  // --------------------------------------------------

  if (screen === 3) {
    const question =
      assessmentQuestions[currentQuestion]

    const selectedAnswer =
      answers[question.id]

    const progress =
      ((currentQuestion + 1) /
        assessmentQuestions.length) *
      100

    return (
      <main className="app">
        <div className="container">

          <header className="brand">
            <span className="brand-name">
              PRAKRITVA™
            </span>

            <span className="brand-divider">
              •
            </span>

            <span>
              FSSAI COMPLIANCE ASSISTANCE
            </span>
          </header>

          <section className="assessment-screen">

            <div className="screen-top">

              <button
                className="back-button"
                type="button"
                onClick={() => {

                  if (currentQuestion > 0) {
                    setCurrentQuestion(
                      (previous) => previous - 1
                    )
                  } else {
                    setScreen(2)
                  }

                }}
              >
                ← Back
              </button>

              <span className="progress">
                03 / 04
              </span>

            </div>

            <p className="eyebrow">
              FOOD SAFETY CHECK
            </p>

            <h1 className="assessment-title">
              Preliminary Food
              <br />
              Safety Assessment
            </h1>

            <p className="assessment-intro">
              Answer a few questions about your
              current food-safety practices.
            </p>

            <div className="question-progress">

              <div className="question-progress-header">

                <span>
                  Question {currentQuestion + 1} of{" "}
                  {assessmentQuestions.length}
                </span>

                <span>
                  {Math.round(progress)}%
                </span>

              </div>

              <div className="progress-track">

                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            <div className="question-card">

              <div className="question-meta">

                <span className="question-number">
                  QUESTION {question.id}
                </span>

                <span className="importance">
                  {question.importance}
                </span>

              </div>

              <h2>
                {question.title}
              </h2>

              <p className="question-text">
                {question.question}
              </p>

              <p className="question-guidance">
                {question.guidance}
              </p>

            </div>

            <div className="answer-list">

              {question.answers.map((answer) => (

                <button
                  key={answer.value}
                  type="button"
                  className={`answer-button ${
                    selectedAnswer === answer.value
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleAnswer(answer.value)
                  }
                >

                  <span
                    className={`answer-dot ${
                      answer.value
                    }`}
                  />

                  <span>
                    {answer.label}
                  </span>

                  {selectedAnswer === answer.value && (
                    <span className="answer-check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

            <p className="assessment-note">
              Your answers are used only to generate
              a preliminary assessment.
            </p>

          </section>
        </div>
      </main>
    )
  }

  // --------------------------------------------------
  // SCREEN 2 — BUSINESS INFORMATION
  // --------------------------------------------------

  if (screen === 2) {
    return (
      <main className="app">
        <div className="container">

          <header className="brand">
            <span className="brand-name">
              PRAKRITVA™
            </span>

            <span className="brand-divider">
              •
            </span>

            <span>
              FSSAI COMPLIANCE ASSISTANCE
            </span>
          </header>

          <section className="form-screen">

            <div className="screen-top">

              <button
                className="back-button"
                type="button"
                onClick={() => setScreen(1)}
              >
                ← Back
              </button>

              <span className="progress">
                02 / 04
              </span>

            </div>

            <p className="eyebrow">
              ABOUT YOUR BUSINESS
            </p>

            <h1 className="form-title">
              Tell us about
              <br />
              your business
            </h1>

            <div className="section-divider" />

            <div className="question">

              <h2>
                1. What is your main food business
                activity?
              </h2>

              <div className="option-list">

                {businessTypes.map((type) => (

                  <button
                    key={type}
                    type="button"
                    className={`option-button ${
                      businessType === type
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setBusinessType(type)
                    }
                  >

                    <span>
                      {type}
                    </span>

                    {businessType === type && (
                      <span>
                        ✓
                      </span>
                    )}

                  </button>

                ))}

              </div>

            </div>

            <div className="question turnover-question">

              <h2>
                2. Approximate annual turnover
              </h2>

              <div className="turnover-grid">

                {turnoverOptions.map((option) => (

                  <button
                    key={option}
                    type="button"
                    className={`option-button ${
                      turnover === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setTurnover(option)
                    }
                  >

                    <span>
                      {option}
                    </span>

                    {turnover === option && (
                      <span>
                        ✓
                      </span>
                    )}

                  </button>

                ))}

              </div>

            </div>

            <p className="helper-text">
              We use your business activity and
              turnover to guide the applicable
              FSSAI pathway.
            </p>

            <button
              type="button"
              className="primary-button continue-button"
              disabled={!businessType || !turnover}
              onClick={() => {
                setCurrentQuestion(0)
                setScreen(3)
              }}
            >
              CONTINUE
              <span>→</span>
            </button>

          </section>
        </div>
      </main>
    )
  }

  // --------------------------------------------------
  // SCREEN 1 — WELCOME
  // --------------------------------------------------

  return (
    <main className="app">
      <div className="container">

        <header className="brand">
          <span className="brand-name">
            PRAKRITVA™
          </span>

          <span className="brand-divider">
            •
          </span>

          <span>
            FSSAI COMPLIANCE ASSISTANCE
          </span>
        </header>

        <section className="welcome">

          <p className="eyebrow">
            FOOD SAFETY COMES FIRST
          </p>

          <h1>
            Understand what your
            <br />
            food business may need.
          </h1>

          <p className="subtitle">
            Take our free preliminary food-safety
            check and understand your potential
            FSSAI requirements.
          </p>

          <div className="hero-card">

            <div className="shield">
              ✓
            </div>

            <h2>
              Free preliminary check
            </h2>

            <p>
              Simple questions.
              <br />
              Takes only 2–3 minutes.
            </p>

          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() => setScreen(2)}
          >
            START FREE CHECK
            <span>→</span>
          </button>

          <div className="trust-row">

            <span>
              ✓ Free
            </span>

            <span>
              ✓ Simple
            </span>

            <span>
              ✓ No obligation
            </span>

          </div>

          <p className="disclaimer">
            This is a preliminary self-assessment
            and does not constitute an official FSSAI
            inspection, certification or legal
            determination.
          </p>

        </section>

      </div>
    </main>
  )
}

export default App