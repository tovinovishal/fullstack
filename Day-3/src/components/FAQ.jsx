import FaqItem from '../components/FAQItem';

const FAQPage = () => {
   
  const faqData = [
    {
        question:'What is the age limit for joining the academy?',
        answer:'There is no age limit for joining our academy. Chess is a game that can be learned and enjoyed at any age.',

    },
    {
        question:'Do I need to have prior experience in chess to join?',
        answer:'No, you do not need to have prior experience in chess to join our academy. We have programs designed for beginners.',

    },
    {
        question:'How much does it cost to join the academy?',
        answer:'The cost of joining the academy varies depending on the program you choose. Please contact us for more details.',
    },
    {
        question:'How can I apply to join the academy?',
        answer:'You can apply to join the academy by filling out the application form on our website or by contacting us directly.',

    },
    {
      question: 'What chess courses do you offer?',
      answer: 'We offer a variety of courses, including beginner, intermediate, and advanced levels. Check our Courses page for more details.',
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, go to the Courses page, select your desired course, and follow the enrollment instructions provided.',
    },
    {
      question: 'Is there a trial period for courses?',
      answer: 'Yes, we offer a free trial period for some of our courses. You can check the specific course details for information on trial availability.',
    },
    {
      question: 'What materials do I need for the courses?',
      answer: 'The required materials vary by course. You can find the list of required materials on the course details page.',
    },
    {
      question: 'How can I contact support?',
      answer: 'For any support-related inquiries, you can reach out to our support team through the Contact Us page. We aim to respond to all queries within 24 hours.',
    },
 
  ];
 

  return (
    <div>
    <div  style={{fontSize:"50px",marginTop:"40px",padding:'20px'}}>
      <h2 style={{color:'black'}}>Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQPage;
