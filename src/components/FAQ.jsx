import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What makes your school different from other schools?",
    answer: "Our focus is on the holistic development of every child. Along with academics, we give importance to confidence, communication, creativity, discipline, values, sports and life skills."
  },
  {
    question: "Which board is the school affiliated with?",
    answer: "Our school is affiliated with the CBSE board."
  },
  {
    question: "Which curriculum do you follow? Is it CBSE-based?",
    answer: "Yes, our curriculum is aligned with the CBSE framework. Along with academics, we give importance to experiential learning, activities, values, creativity and life skills. We focus on conceptual understanding, activity-based learning, and overall development to make learning engaging and meaningful for children."
  },
  {
    question: "What is the age criteria for admission?",
    answer: "Our age criteria are as per the school’s admission policy and applicable guidelines. The required age varies according to the class. Please provide your child’s date of birth to our admissions team, and they will guide you regarding the appropriate class for admission."
  },
  {
    question: "What documents are required for admission?",
    answer: "The required documents depend on the class and admission process. We provide parents with a clear checklist so that the process is simple and convenient."
  },
  {
    question: "What is the fee structure?",
    answer: "We explain the complete fee structure, including the applicable admission, tuition and other charges, so that there is complete transparency before the admission decision."
  },
  {
    question: "Are there any additional charges?",
    answer: "Any applicable charges are communicated clearly to parents during the admission process. We believe parents should have complete clarity about the financial structure."
  },
  
  {
    question: "Is there any girl-child concession in the fee?",
    answer: "We can check the current fee structure and applicable concessions for you."
  },
  {
    question: "Is there any sibling discount if we take admission for two children?",
    answer: "Yes, sibling concessions may be applicable as per the school’s current policy."
  },
  {
    question: "What are the school’s and per-class strength?",
    answer: "Our school maintains a balanced student strength so that every child gets proper attention and opportunities to participate. Our school has approximately 500 students, and the strength of each class is around 15-20 students per section."
  },
  {
    question: "How many teachers are there in one classroom?",
    answer: "We maintain an appropriate teacher-to-student ratio so that children receive proper guidance and attention. For the foundational age, we provide 2 mother teachers and 1 didi."
  },
  {
    question: "What are the school timings?",
    answer: "The school timings depend on the child’s class/grade. We can provide you with the exact timings for the class you are considering."
  },
  {
    question: "How do you ensure my child’s safety? Is CCTV available?",
    answer: "Child safety is one of our top priorities. Yes, CCTV surveillance is available in the school’s designated areas as part of our safety and security measures. The school follows established safety and supervision procedures, and children are monitored by responsible staff throughout the school day."
  },
  {
    question: "Who supervises children during breaks?",
    answer: "Children are supervised by designated teachers and school staff during breaks and other common-area activities. We ensure that students are appropriately monitored and guided throughout the school day."
  },
  {
    question: "Is transport facility available?",
    answer: "Yes, transport facilities may be available depending on the school’s routes and policies. The exact route, availability, and charges depend on that process."
  },
  {
    question: "Who supervises children in the bus?",
    answer: "Children travelling by school transport are supervised according to the school’s transport and safety procedures. The driver is responsible for safe driving, and an assigned attendant/support staff member supervises the children during the journey."
  },
  {
    question: "How do you communicate with parents about the child’s progress?",
    answer: "Parents are regularly updated through our school communication app (AHWS 360 app), PTMs, and teacher interactions. We believe that the school and parents should work as a team."
  },
  {
    question: "How frequently are PTMs conducted?",
    answer: "PTMs are conducted periodically to discuss the child’s academic progress, participation, behaviour, and overall development."
  },
  {
    question: "How can parents communicate with teachers?",
    answer: "Parents can communicate through the school’s designated communication channels and during scheduled interactions/PTMs, while following the school’s communication guidelines and official WhatsApp groups."
  },
  {
    question: "Your fees are higher than another school. Why?",
    answer: "I completely understand that fees are an important consideration. We encourage you to look at the overall value—our teaching approach, individual attention, learning environment, activities, facilities and opportunities for the child’s overall development. We would be happy to explain what is included in the fee structure."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleAccordion(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleAccordion(index);
                }
              }}
              aria-expanded={activeIndex === index}
            >
              <h4>{faq.question}</h4>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div 
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '1000px' : '0',
                opacity: activeIndex === index ? '1' : '0'
              }}
            >
              <div className="faq-answer-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
