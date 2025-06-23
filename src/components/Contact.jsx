// Contact.jsx
import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

const Section = styled.section`
  width: 100%;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 4rem 1.5rem;
  color: ${COLORS.text};
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${COLORS.accent};
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 900px;
  animation: ${fadeIn} 1s;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${COLORS.text};
  font-size: 1.1rem;
  svg {
    color: ${COLORS.accent};
    font-size: 1.5rem;
    min-width: 1.5rem;
  }
  a {
    color: ${COLORS.text};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: ${COLORS.accent};
    }
  }
`;

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.18 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="contact" ref={sectionRef}>
      <Title>Contact</Title>
      <ContactRow className={visible ? 'visible' : ''}>
        <ContactItem>
          <FaPhoneAlt />
          <span>+92 318 8784493</span>
        </ContactItem>
        <ContactItem>
          <FaEnvelope />
          <a href="mailto:umarsaleem0816@gmail.com">umarsaleem0816@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <FaMapMarkerAlt />
          <span>F-23, Al-Ahmed Garden, Manawan, Lahore.</span>
        </ContactItem>
      </ContactRow>
    </Section>
  );
};

export default Contact;
