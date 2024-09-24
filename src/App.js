import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function FAQ()
{
  const faqData=[
    {
      question:"Har du seriøst brugt tid på at udvikle en top moderne AI og købt et domæne bare for at være ansvarlig på Rustur dag 2?",
      answer:"Ja"
    },
    {
    question:"Hvad er dette for en side?",
    answer:"Jeg er en top moderne AI, som er blevet udviklet til at bestemme den bedste til at stå for Rustur dag 2. Mine data bygger på alt relevant data." 
    }
  ];

  const [activeIndex,setActiveIndex]=useState(null);

  const handleToggle=(index)=>{
    if(index===activeIndex)
    {
      setActiveIndex(null);
    }
    else
    {
      setActiveIndex(index);
    }
  }

  return (
    <div className="FaqAccordion">
      <h1>FAQ</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="FaqAccordionItem">
          <div className="FaqAccordionTitle" onClick={() => handleToggle(index)}>
            <h2>{faq.question}</h2>
          </div>
          <div className={`FaqAccordionContent ${activeIndex === index ? "active" : ""}`}>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function Home()
{
  return <h1>tutorniels' brandtale </h1>
}

// function GetRandomNumber() {
//   const min=1;
//   const max=3;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
let casenumber = 1;

function DisplayMessageWrongTutor(inputValue) {
  let message;
  

  switch (casenumber) {
    case 1:
      message = `Ej det kan ${inputValue} slet ikke finde ud af`;
      casenumber++;
      break;
    case 2:
      message = `Ej det er en dårlig ide. Syntes ikke i skal stemme på ${inputValue}`;
      casenumber ++;
      break;
    case 3:
      message = `${inputValue}!!! Argh den skal du vidst længere ud på landet med hehehe`;
      casenumber++;
      break; // Added 'break' for case 3
    case 4:
      message = `Tror ${inputValue} vil være bedre som hjælper ;)`;
      casenumber++;
      break; // Added 'break' for case 3
    case 5:
      message = `${inputValue}!!! haha, ej det skal ikke være ${inputValue}, det kunne måske være tutorniels`;
      casenumber=1;
      break; // Added 'break' for case 3
    default:
      message = "Ugyldigt valg";
      break;
  }

  return message;
}


function App() {

  const [inputValue,setInputValue]=useState("");
  const [displayValue,setDisplayValue]=useState("");

  const handleClick=()=>{
    // setDisplayValue(inputValue)

    if(inputValue===""){
      setDisplayValue('I skal skrive en i feltet, f.eks tutorniels')
    }
    else if(inputValue === "tutorniels" || inputValue === "Tutor Niels"|| inputValue === "tutor Niels"|| inputValue === "Tutor niels"|| inputValue === "tutor niels"|| inputValue === "TutorNiels")

    {
      setDisplayValue(
        <>
          Kæft en god ide!! Det er den bedste kandidat til at være ansvarlig for Rustur dag 2 :) !!!
          <br />
          <br />
          Det SKAL I stemme på <br />
          <br />
          <br />
          STEM PÅ TUTORNIELS!!!!!!!
        </>
      );;
    } 

    else
    {
      //const randomNumber = GetRandomNumber();
      const message = DisplayMessageWrongTutor(inputValue);
      setDisplayValue(message);
      //console.log(message);

      //setDisplayValue(`Ej det kan ${inputValue} slet ikke finde ud af`)

    }
  }

  const handleChange= event=>{
    setInputValue(event.target.value)
  }

  const handleEnter = event => {
    if (event.key === 'Enter') {
      handleClick(); // Kald kun handleClick, hvis Enter-tasten er trykket
    }
  };
  
  return (
    <Router>
      <div className="App">
        <nav className="Menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <Home />
              <input
                onChange={handleChange}
                onKeyPress={handleEnter}
                value={inputValue}
                placeholder="Forslå en tutor som ansvarlig til Rustur dag 2"
              />
              <button onClick={handleClick}>Test</button>
              <h2>{displayValue}</h2>
            </div>
          } />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
