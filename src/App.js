import React, { useState } from "react";
import "./App.css";

function getSVG(grade) {
  switch (grade) {
    case "C":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
        </svg>
      );
    case "E":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
        </svg>
      );
    case "A":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm0-3.998l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z" />
        </svg>
      );
    case "F":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
        </svg>
      );
  }
}

function App() {
  const [grades, setGrade] = useState([
    { grade: "F", count: 0 },
    { grade: "E", count: 0 },
    { grade: "C", count: 0 },
    { grade: "A", count: 0 }
  ]);
  const [showResult, setShowResult] = useState(false);
  const [question, setQuestion] = useState("");

  if (showResult) {
    return (
      <div className="App">
        <div className="Header">
          <input
            type="text"
            onChange={e => setQuestion(e.currentTarget.value)}
            value={question}
          />
        </div>
        <div className="Flex">
          {grades.map(grade => {
            return (
              <div key={grade.grade} className={"Smile " + grade.grade}>
                <div>{grade.count}</div>
              </div>
            );
          })}
        </div>
        <div className="Footer">
          <button
            onClick={() => {
              setShowResult(false);
            }}
          >
            Dölj resultat
          </button>
          <button
            onClick={() => {
              setGrade([
                { grade: "F", count: 0 },
                { grade: "E", count: 0 },
                { grade: "C", count: 0 },
                { grade: "A", count: 0 }
              ]);
              setShowResult(false);
            }}
          >
            Nollställ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {question && (
        <div className="Header">
          <h1>{question}</h1>
        </div>
      )}
      <div className="Flex">
        {grades.map(grade => {
          return (
            <button
              className={"Smile " + grade.grade}
              key={grade.grade}
              onClick={() => {
                const newGrades = [...grades];
                newGrades.find(g => g.grade === grade.grade).count += 1;
                setGrade(newGrades);
              }}
            >
              <div>{getSVG(grade.grade)}</div>
            </button>
          );
        })}
      </div>
      <div className="Footer">
        <button
          onClick={() => {
            setShowResult(true);
          }}
        >
          Visa resultat
        </button>
      </div>
    </div>
  );
}

export default App;
