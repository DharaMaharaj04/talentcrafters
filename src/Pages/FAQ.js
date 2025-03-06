import React, { useState } from 'react';
import banner from "../assets/images/FAQ.jpg";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: 'Our Staffing Services',
      questions: [
        {
          question: 'What makes Talent Crafters different from other staffing agencies?',
          answer:
            'At Talent Crafters, we believe in a personalized, hands-on approach to staffing. Our team works closely with each client to understand their company culture, values, and specific staffing needs. By offering tailored solutions for permanent, temporary, and contract staffing, we provide flexibility, reliability, and quality that other agencies can’t match.',
        },
        {
          question: 'How does Talent Crafters ensure the quality of candidates?',
          answer:
            'We employ a rigorous screening and vetting process, including in-depth interviews, skill assessments, and comprehensive background checks. We also align our recruitment process with your company’s goals and values.',
        },
        {
          question: 'What types of staffing solutions do you provide?',
          answer:
            'We offer permanent, temporary, and contract staffing solutions, customized to meet the unique needs of your business.',
        },
      ],
    },
    {
      category: 'Recruitment Process',
      questions: [
        {
          question: 'How long does the recruitment process take with Talent Crafters?',
          answer:
            'The timeline depends on the complexity of the role, but typically, our recruitment process takes 4-6 weeks.',
        },
        {
          question: 'Do you offer recruitment for specialized and niche roles?',
          answer:
            'Yes, we have experience and resources to find the right talent in IT, finance, healthcare, and other specialized fields.',
        },
        {
          question: 'How does Talent Crafters manage the recruitment process for hard-to-fill positions?',
          answer:
            'We leverage proactive sourcing, industry connections, and targeted recruitment strategies to identify the best candidates.',
        },
      ],
    },
    {
      category: 'Client Services',
      questions: [
        {
          question: 'How do you ensure the success of our recruitment partnership?',
          answer:
            'Our team works closely with you to provide tailored solutions and ongoing support post-placement.',
        },
        {
          question: 'Do you handle the onboarding process for new hires?',
          answer:
            'Yes, we provide end-to-end support during the onboarding process, making transitions smooth and efficient.',
        },
      ],
    },
    {
      category: 'Training and Development',
      questions: [
        {
          question: 'Do you provide training for new hires?',
          answer:
            'Yes, we offer tailored training programs to prepare new hires for contributing effectively to your business.',
        },
        {
          question: 'Can you help with leadership development programs?',
          answer:
            'Absolutely! We offer leadership development programs to nurture high-potential employees for managerial roles.',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
    <section
  className="relative flex items-center py-8 md:py-32 px-6 md:px-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-[#6DC5D1] bg-opacity-80"></div>
  
  <div className="relative bg-opacity-75 text-center p-6 md:p-8 rounded-lg max-w-lg md:max-w-lg">
    <h2 className="text-4xl md:text-6xl text-center font-bold leading-tight text-black"
    >FAQ</h2>
  </div>
</section>
<div className='px-12 mt-6'>
      {faqs.map((faqCategory, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-bold text-[#6DC5D1] mb-4">{faqCategory.category}</h2>
          {faqCategory.questions.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 mb-4 pb-4">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 focus:outline-none"
                onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
              >
                {item.question}
                <span className="ml-2 text-indigo-500">
                  {activeIndex === `${categoryIndex}-${index}` ? '-' : '+'}
                </span>
              </button>
              {activeIndex === `${categoryIndex}-${index}` && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
};

export default FAQPage;
