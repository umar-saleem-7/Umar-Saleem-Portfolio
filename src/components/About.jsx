import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  eduBg: '#232425',
};

const Section = styled.section`
  width: 100%;
  min-height: 45vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 2rem 1.5rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 900px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.18rem;
  color: ${COLORS.accent};
  background: none;
  line-height: 1.7;
  font-weight: 500;
  min-height: 120px;
  max-width: 500px;
  margin: 0;
  white-space: pre-line;
  border-left: 4px solid ${COLORS.accent};
  padding-left: 1.2rem;
  letter-spacing: 0.01em;
  box-sizing: border-box;
`;

const Right = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${COLORS.eduBg};
  border-radius: 14px;
  padding: 2rem 2.2rem;
  margin-left: 2.5rem;
  box-shadow: 0 2px 12px rgba(176, 170, 192, 0.12);
  min-width: 260px;
  @media (max-width: 900px) {
    margin-left: 0;
    align-items: center;
    padding: 1.5rem 1rem;
    width: 100%;
  }
`;

const EduTitle = styled.h3`
  color: ${COLORS.accent};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  letter-spacing: 0.05em;
`;

const EduDetail = styled.div`
  color: ${COLORS.text};
  font-size: 1.04rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const EduYear = styled.div`
  color: #b0aac0cc;
  font-size: 0.97rem;
  font-style: italic;
`;

const aboutFullText = `Data Science undergraduate student with a strong foundation in programming, data analysis, machine learning, and business intelligence. Proficient in Python, SQL, data-driven solutions, and data visualization. Eager to apply analytical skills to solve real-world problems and drive data-driven decision-making.`;

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Start animation when section is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setStartAnimation(true);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Start animation on custom event (from navigation)
  useEffect(() => {
    const handleShowAbout = () => {
      setStartAnimation(true);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('showAbout', handleShowAbout);
    return () => window.removeEventListener('showAbout', handleShowAbout);
  }, []);

  // Typing animation effect (only if startAnimation is true)
  useEffect(() => {
    if (!startAnimation) return;
    let i = 0;
    setDisplayedText('');
    const speed = 18;
    const typeWriter = () => {
      if (i <= aboutFullText.length) {
        setDisplayedText(aboutFullText.slice(0, i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
    // eslint-disable-next-line
  }, [startAnimation]);

  return (
    <Section id="about" ref={sectionRef}>
      <Left>
        <AboutText>
          <EduTitle>About Me</EduTitle>
          {displayedText}
          <span style={{ color: COLORS.accent, opacity: 0.5 }}>
            {displayedText.length < aboutFullText.length && startAnimation ? '|' : ''}
          </span>
        </AboutText>
      </Left>
      <Right>
        <EduTitle>Education</EduTitle>
        <EduDetail>
          Bachelor of Data Science<br />
          <span style={{ color: COLORS.accent, fontWeight: 600 }}>
            PUCIT - University of the Punjab
          </span>
        </EduDetail>
        <EduYear>2022 – 2026 (Expected)</EduYear>
      </Right>
    </Section>
  );
};

export default About;
