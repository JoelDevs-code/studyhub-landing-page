import { useEffect, useState} from "react";
import AOS from "aos"; import "aos/dist/aos.css";

import { Routes, Route } from 'react-router-dom';
import './App.css'; import './dist/style.css';
import '../src/assets/fonts/flaticon/css/all.css';
import '../src/assets/fonts/flaticon/css/all.min.css';
import '../src/assets/fonts/flaticon/icomoon/style.css';

import Header from "../src/components/header";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

import ellipse from "../src/assets/images/Ellipses.png"
import abtImg from "../src/assets/images/Back to school.png"
import prfImg from "../src/assets/images/user_profile.svg"
import star from "../src/assets/images/Vector.png"
import mainImg from "../src/assets/images/landing-img.png"

import bImg1 from "../src/assets/images/b1.png"
import bImg2 from "../src/assets/images/b2.png"
import bImg3 from "../src/assets/images/b3.png"
import bImg4 from "../src/assets/images/b4.png"


function App() {

  useEffect(() => {AOS.init({duration: 1000, once: true, easing: "ease-in-out",});}, []);

  const faqs = [
    { 
      question: "Is Sandwich AI just another inventory tool?", 
      answer: 
      `
        Sandwich AI is far from being just another inventory tool, 
        it is the system that brings your entire restaurant operation together. 
        Sandwich AI connects inventory, procurement, kitchen workflows, and service
        into one intelligent platform. That means fewer errors, less waste, 
        tighter cost control, and complete visibility over your business — all in real time.
      ` 
    },
    { 
      question: "Will my team actually use it without friction?", 
      answer: 
      `
        Yes. Sandwich AI is built for busy kitchens, not only technical teams. 
        Every feature is designed to be simple, fast, and intuitive, so your staff 
        can get started almost immediately. No steep learning curve — just smoother, 
        more efficient daily operations from day one.
      ` 
    },
    { 
      question: "Who is Sandwich AI best suited for?", 
      answer: 
      `
        It’s designed for restaurant owners and operators who want more control without 
        added complexity. Whether you're running a single kitchen or scaling across 
        multiple locations, Sandwich AI gives you the structure and insight needed to grow confidently.
      `
    },
    { 
      question: "How much control do I have over access and visibility?", 
      answer: 
      `
        Complete control. You decide who sees what and who can take action. With flexible role-based permissions, 
        every team member gets exactly the level of access they need  improving accountability while keeping your data secure.
      ` 
    },
    { 
      question: "Can I manage multiple branches from one place?", 
      answer: 
      `
        Absolutely. Sandwich AI allows you to oversee all your branches from a single, centralized dashboard. 
        Track performance, enforce consistency, and make faster decisions across locations  
        without losing control at the ground level.
      ` 
    },
    { 
      question: "Can suppliers be part of the workflow?", 
      answer: 
      `
        Yes, and that’s where efficiency really improves. By integrating suppliers directly into your system, 
        you streamline ordering, reduce miscommunication, and speed up fulfillment. Everything becomes more predictable, 
        transparent, and easier to manage.
      `
    },
  ];

  const benefitCard = [
    {
      hTxt: "Track Operations",
      pTxt: "Track academic progess, operations and growth",
      bImg: bImg3
    },
    {
      hTxt: "E-Learning Material",
      pTxt: "Get access to our e-library (course materials, exams past question, journals and articles)",
      bImg: bImg4
    },
    {
      hTxt: "Project Management",
      pTxt: "Organise your school projects and get project resources like journals and articles",
      bImg: bImg1
    },
    {
      hTxt: "Text to Speech",
      pTxt: "Convert text file to audio, gain knowledge by listening",
      bImg: bImg2
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  
  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  function signIn(){window.location.href = "/signin";}

  return (
    <>

      <main className="main--web--section" id='main' aria-label='portolio web'>
        <section className="main--web--section--wrapper w-full px-0 py-0 h-full">

          <Routes>

            <Route path='' element={

              <>
               <Header />

                <div className="hero--section bg-white w-full" id='hero_section'>
                  <div className="hero--section-container w-full py-5 items-center gap-2 flex flex-col">
                    <div className="hero--caption-label flex items-center gap-5" data-aos="fade-down">
                      <img src={star}/><span>You control your academic operations.</span>
                    </div>
                    <div className="caption-colx flex items-center flex-col gap-1" data-aos="fade-up">
                      <h1>Run your academic journey <br/> like a scholar.</h1>
                      <p>Track academic progress, get course material and e-learning tools</p>
                      <div className="flex proile-tst items-center gap-5" data-aos="fade-up">
                        <img src={prfImg} draggable="false"/><span>Trusted by 500+ students</span>
                      </div>
                      <button className="bg-blue-500 text-white start-btn shadow">Let's get started</button>
                    </div>
                    <div className="main--img-container" data-aos="fade-up"><img src={mainImg} draggable="false"/></div>
                  </div>
                </div>
                <div className="about--section bg-white relative w-full" id='about'>
                  <div className="about--section-wrapper py-4 w-full items-center gap-1 flex">
                    <div className="about--section--text flex flex-col" data-aos="fade-right">
                      <h3>About StudyHub?</h3>
                      <p>
                        A platform were students can track academic perfomance and operations,
                        access to e-learning materials that promotes growth in academic progess
                        enabling students to analyse performance as it happens and make 
                        decisions that protect margins.
                      </p>
                    </div>
                    <div className="about--section--image" data-aos="fade-left"><img src={abtImg} draggable="false"/></div>
                  </div>
                </div>
                <div className="benefit--section bg-white w-full" id='operations'>
                  <div className="benefit--section-container w-full py-2 items-center gap-4 flex flex-col">
                    <div className="benefit--section--header" data-aos="fade-up">
                      <h4>Unique Benefits of <br /> <em className="font-normal text-blue-500">StudyHub?</em></h4>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {
                        benefitCard.map((benefitcard, index)=>(
                          <div className="benefit--card flex flex-col shadow px-2 py-2 gap-2 border 
                            items-center" key={index} data-aos="fade-up">
                            <div className="benefit_Img"><img src={benefitcard.bImg}/></div>
                            <div className="benefit_Txt">
                              <h3>{benefitcard.hTxt}</h3><p>{benefitcard.pTxt}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="faq--section bg-white w-full" id='faqs'>
                  <div className="faq--section-container w-full items-center gap-1 flex flex-col">
                    <div className="faq--section--header" data-aos="fade-up">
                      <h4>What do they ask about <br /> <em className="font-normal text-blue-500">StudyHub?</em></h4>
                    </div>
                    <div className="faq-dropdown-wrapper flex flex-col gap-2 w-full" data-aos="fade-up">
                      {faqs.map((faq, index) => (
                        <div key={index} className={`faq-drowdown w-full bg-white flex flex-col gap-2 ${
                          activeIndex === index ? "faq-drowdown-open" : "" }`} onClick={() => toggleDropdown(index)} >
                          <div className="faq-dropdown-header flex items-center justify-between">
                            <h3>{faq.question}</h3> <i className={`fa ${ activeIndex === index ? "fa-close" : "fa-plus" }`}></i>
                          </div>
                          {activeIndex === index && (<div className="faq-dropdown-answers"><p>{faq.answer}</p></div>)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="calltoaction--section bg-white relative w-full" id='hero_section'>
                  <div className="calltoaction--section-col py-5 w-full items-center gap-1 flex flex-col" data-aos="fade-up">
                    <h2>Experience what running your academic <br />journey should feel like</h2>
                    <button className="cursor-pointer shadow" onClick={signIn}>Let's get started</button>
                    <img src={ellipse} />
                  </div>
                </div>
                <footer className="footer--section py-2 w-full bg-blue-950">
                  <div className="footer--section-container flex justify-between flex-wrap gap-1">
                    <p className="text-white"> &copy; {Date().slice(11,15)} StudyHub. All right reserved </p>
                    <a className="text-blue-500 flex cursor-pointer" href="">
                      <label className="cursor-pointer">info@studyhub.com</label><i className="fa fa-info fa-bounce"></i>
                    </a>
                  </div>
                </footer>
              </>

            }>
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </section>
      </main>

    </>
  )
}

export default App
