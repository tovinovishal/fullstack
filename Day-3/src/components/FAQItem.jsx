import { useState } from 'react';
import PropTypes from 'prop-types';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} style={{ cursor: 'pointer', marginBottom: '8px',fontSize:'30px',textDecoration:'underline'}}>
        <strong>{question}</strong>
      </div>
      {isOpen && <p style={{fontSize:'25px',textDecoration:'underline'}}>{answer}</p>}
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqItem;
