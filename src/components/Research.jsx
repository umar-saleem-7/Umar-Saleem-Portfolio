// Research.jsx
import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaFlask } from 'react-icons/fa';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  cardBg: '#232425',
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
`;

const ResearchSection = styled.section`
  width: 100%;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 4rem 1.5rem;
  box-sizing: border-box;
  color: ${COLORS.text};
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.accent};
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const ResearchList = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResearchCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 12px;
  padding: 2rem 2.5rem;
  box-shadow: 0 4px 15px rgba(176, 170, 192, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.7s forwards;
  animation-delay: ${({ delay }) => delay || 0}s;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ResearchTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.accent};
`;

const ResearchDescription = styled.p`
  font-size: 1.12rem;
  color: ${COLORS.text};
  line-height: 1.6;
`;

const researchData = [
  {
    title: 'Forecasting Vivid Dreams',
    description: (
      <>
        Worked on a machine learning–based research project focused on predicting vivid dream patterns using psychological and behavioral indicators. <br />
        <span style={{ color: '#aaa', fontStyle: 'italic' }}>
          (Manuscript in preparation for future conference submission)
        </span>
      </>
    ),
  },
  // Add more research items here if needed in the future
];

const Research = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  // Reveal cards one by one when section is scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let i = 0;
            const interval = setInterval(() => {
              setVisibleCards(prev => [...prev, i]);
              i++;
              if (i >= researchData.length) clearInterval(interval);
            }, 400);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Trigger animation on custom event (from navigation)
  useEffect(() => {
    const handleShowResearch = () => {
      let i = 0;
      setVisibleCards([]);
      const interval = setInterval(() => {
        setVisibleCards(prev => [...prev, i]);
        i++;
        if (i >= researchData.length) clearInterval(interval);
      }, 400);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('showResearch', handleShowResearch);
    return () => window.removeEventListener('showResearch', handleShowResearch);
  }, []);

  return (
    <ResearchSection id="research" ref={sectionRef}>
      <Title>
        <FaFlask /> Researches
      </Title>
      <ResearchList>
        {researchData.map((item, idx) => (
          <ResearchCard
            key={item.title}
            className={visibleCards.includes(idx) ? 'visible' : ''}
            delay={0.15 * idx}
          >
            <ResearchTitle>{item.title}</ResearchTitle>
            <ResearchDescription>{item.description}</ResearchDescription>
          </ResearchCard>
        ))}
      </ResearchList>
    </ResearchSection>
  );
};

export default Research;
