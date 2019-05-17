import React, { useState } from 'react';
import './App.css';

function App() {
  const [grades, setGrade] = useState([{ "grade": "F", "count": 0 }, { "grade": "E", "count": 0 }, { "grade": "C", "count": 0 }, { "grade": "A", "count": 0 }]);
  const [showResult, setShowResult] = useState(false);

  if (showResult) {
    return (
      <div className="App">
        <div className="Flex">
          {grades.map(grade => {
            return (
              <div key={grade.grade} className={"Smile " + grade.grade}>
                  {grade.count}
              </div>
            )
          })}
        </div>
        <div className="footer">
          <button onClick={() => {
            setShowResult(false)
          }}>
            Dölj resultat
          </button>
          <button onClick={() => {
            setGrade([{ "grade": "F", "count": 0 }, { "grade": "E", "count": 0 }, { "grade": "C", "count": 0 }, { "grade": "A", "count": 0 }]);
            setShowResult(false)
          }}>
            Nollställ
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="Flex">
        {grades.map(grade => {
          return (
            <button className={"Smile " + grade.grade} key={grade.grade} onClick={() => {
              const newGrades = [...grades];
              newGrades.find(g => g.grade === grade.grade).count += 1;
              setGrade(newGrades);
            }}>
            </button>
          )
        })}
      </div>
      <div className="footer">
        <button onClick={() => {
          setShowResult(true)
        }}>Visa resultat</button>
      </div>
    </div>
  );
}

export default App;
