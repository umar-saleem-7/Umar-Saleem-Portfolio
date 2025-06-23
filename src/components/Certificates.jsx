// CertificatesAchievements.jsx
import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  sectionBg: '#232425',
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
  min-height: 40vh;
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
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  max-width: 900px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
  }
`;

const ListContainer = styled.div`
  flex: 1;
  min-width: 250px;
  animation: ${fadeIn} 1.1s;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
  @media (max-width: 600px) {
    min-width: 0;
    width: 100%;
    padding: 0 0.5rem;
  }
`;

const SubTitle = styled.h3`
  color: ${COLORS.accent};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
  @media (max-width: 600px) {
    font-size: 1.07rem;
    margin-bottom: 0.7rem;
  }
`;

const List = styled.ul`
  list-style: disc inside;
  padding-left: 0;
  color: ${COLORS.text};
  font-size: 1.07rem;
  line-height: 1.7;
  @media (max-width: 600px) {
    font-size: 0.97rem;
    line-height: 1.5;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.7rem;
  @media (max-width: 600px) {
    margin-bottom: 0.4rem;
  }
`;

const CertificatesAchievements = () => {
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
    <Section id="certificates" ref={sectionRef}>
      <Title>Certificates & Achievements</Title>
      <FlexRow>
        <ListContainer className={visible ? 'visible' : ''}>
          <SubTitle>Courses & Certifications</SubTitle>
          <List>
            <ListItem>Pandas Certification (<i>Kaggle</i>)</ListItem>
            <ListItem>Introduction to Machine Learning (<i>Kaggle</i>)</ListItem>
          </List>
        </ListContainer>
        <ListContainer className={visible ? 'visible' : ''}>
          <SubTitle>Achievements</SubTitle>
          <List>
            <ListItem>Competitive Programming Certificates (<i>PUCON’23, Softec’24, ElectroCon’24, CodeRush’25, PUCON’25</i>)</ListItem>
          </List>
        </ListContainer>
      </FlexRow>
    </Section>
  );
};

export default CertificatesAchievements;
