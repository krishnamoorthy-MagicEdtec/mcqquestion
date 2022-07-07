import { useState, useEffect } from "react";
import Question from "./Question";

import Actions from "./Actions";
import "./Mcqscreen2.css";
import { useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// Maths
//"1  12+345+67+89 ?"
// 513 
//"2  98-76+54-32= ?"
// 44
//"3  67+92+454+54 ?"
// 667
//"4  123435-98787 ?"
// 24,648 
//"5  789-123-98 ? "
// "568"

// Social

// "1 Which is Biggest state ?"
// "Rajastan"
// "2 How many countries are there in the world ?"
//  "195"
//  "3 How many states in India ?",
//  "28"
//  "4 Which is small state ?",
//   "Goa"
//   "5 Whic is Biggest country"
//   "Russia" 

//  Science

//"1 How many bones are   in the human body ?"
//  "206"
//  " 2 What does DNA stand for ?"
//  "Deoxyribonucleic acid"
//  "3 A small bone in the body ?"
//  "ear bone"
//  "4 National Science Day ?"
//  "28 February"
//  "5 How many pollution types ?"
//   "4"
const data = [
  {
    id: 1,
    title: " 1 One Km is how many centimeters ?",
    answer:"100000",
    backgroundColor: "#9ad9db",
    options: [
      {
        checked: false,
        value: "100000",
      },
      {
        checked: false,
        value: "10000",
      },
      {
        checked: false,
        value: "1000",
      },
      {
        checked: false,
        value: "100",
      },
    ],
  },
 
  {
    id: 2,
    title: "2 Which is Biggest state ?",
    answer:"Rajastan",
    backgroundColor: "#a8d7ae",
    options: [
      {
        checked: false,
        value: "Karnataka",
      },
      {
        checked: false,
        value: "Rajastan",
      },
      {
        checked: false,
        value: "Uttar Pradhesh",
      },
      {
        checked: false,
        value: "Andra Pradhesh",
      },
    ],
  },
  {
    id: 3,
    title: "3 How many countries are there in the world ?",
    answer:"195",
    backgroundColor: "#acace3",
    options: [
      {
        checked: false,
        value: "195",
      },
      {
        checked: false,
        value: "210",
      },
      {
        checked: false,
        value: "150",
      },
      {
        checked: false,
        value: "200",
      },
    ],
  },
  {
    id: 4,
    title: "4 How many states in India ?",
    answer:"28",
    backgroundColor: "#e3c6a1",
    options: [
      {
        checked: false,
        value: "28",
      },
      {
        checked: false,
        value: "29",
      },
      {
        checked: false,
        value: "30",
      },
      {
        checked: false,
        value: "31",
      },
    ],
  },
  {
    id: 5,
    title: "5 Which is small state ?",
    answer:"Goa",
    backgroundColor:"#e7b5cc",
    options: [
      {
        checked: false,
        value: "Punjab",
      },
      {
        checked: false,
        value: "Goa",
      },
      {
        checked: false,
        value: "Haryana",
      },
      {
        checked: false,
        value: "Delhi",
      },
    ],
  },

];
function App() {
  const [questions, setQuestions] = useState();
  const [question, setQuestion] = useState(data[0]);
  const [review, setReview] = useState(false);
  const [index, setIndex] = useState(1)
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setQuestions(data);

  }, []);

  const handleQuestion = (number) => {
    setIndex(number);
    const obj = questions.find((item) => item.id === number);
    setQuestion(obj);
  };

  const updateSelected = (idx) => {
    question.options[idx].checked = true;
    questions.forEach((item) => {
      if (item.id === question.id) {
        item = question;
      }
    });
    setQuestions(questions);
  };

  const getClass = (idx)=> {
    if(idx === index){
      return "active";
    }
    return ''
  }
  return (
    <div>
      <nav class="row navbar navbar-light bg-light d-flex justify-content-around">
        <div class="col-md-5 offset-md-5">
          <h1>MCQ-{location.state.category}</h1>
        </div>
        <div class="col">
          <h1>{location && location.state.userName}</h1>
        </div>
      </nav>

      <div className="container ">
        <div className="qtn offset-md-5 p-2">
        <button
          type="button"
          className={`btn btn-primary mx-2 ${getClass(1)}`}
          onClick={() => handleQuestion(1)}
        >
          Question 1
        </button>
        <button
          type="button"
          className={`btn btn-primary mx-2 ${getClass(2)}`}
          onClick={() => handleQuestion(2)}
        >
          Question 2
        </button>
        <button
          type="button"
          className={`btn btn-primary mx-2 ${getClass(3)}`}
          onClick={() => handleQuestion(3)}
        >
          Question 3
        </button>
        <button
          type="button"
          className={`btn btn-primary mx-2 ${getClass(4)}`}
          onClick={() => handleQuestion(4)}
        >
          Question 4
        </button>
        <button
          type="button"
          className={`btn btn-primary mx-2 ${getClass(5)}`}
          onClick={() => handleQuestion(5)}
        >
          Question 5
        </button>
        </div>
        <Question
          selected={question}
          updateSelected={(idx) => updateSelected(idx)}
          review={review}
        />
        {
          !review && <Actions page={question.id} handleAction={(e) => handleQuestion(e)} questions={questions} review={()=> setReview(true)} />
        
        }
        
      </div>
    </div>
  );
}

export default App;
