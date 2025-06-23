import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaDatabase,
  FaFileExcel, FaChartBar, FaChartLine, FaCode, FaServer, FaLaptopCode, FaCogs
} from 'react-icons/fa';

// ====== Skill Data ======
const skillData = [
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Java (Basic)', icon: <FaJava /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
    ],
  },
  {
    category: 'Data Analysis & Visualization',
    skills: [
      { name: 'Pandas, Numpy', icon: <FaCogs /> },
      { name: 'EDA & Visualization', icon: <FaCogs /> },
      { name: 'Statistical Modeling & Hypothesis Testing', icon: <FaChartLine /> },
      { name: 'Matplotlib, Seaborn', icon: <FaChartBar /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'Excel', icon: <FaFileExcel /> },
    ],
  },
  {
    category: 'Libraries & Tools',
    skills: [
      { name: 'Scikit-learn', icon: <FaCogs /> },
      { name: 'ML Models', icon: <FaChartLine /> },
      { name: 'Jupyter Notebook', icon: <FaLaptopCode /> },
      { name: 'Visual Studio', icon: <FaCode /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'Oracle', icon: <FaDatabase /> },
      { name: 'DB Browser', icon: <FaServer /> },
      { name: 'SQL Server Management Studio (SSMS)', icon: <FaServer /> },
    ],
  },
];

// ====== Styled Components ======
const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  cardBg: '#232425',
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const SkillsSection = styled.section`
  width: 100%;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 4rem 1.5rem;
  box-sizing: border-box;
  color: ${COLORS.text};
  min-height: 60vh;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.accent};
  text-align: center;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.text};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-weight: 400;
  opacity: 0;
  animation: ${slideInRight} 0.7s ease forwards;
  animation-delay: 0.3s;
`;

const SkillCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 12px;
  padding: 1.8rem 2rem;
  width: 280px;
  box-shadow: 0 4px 15px rgba(176, 170, 192, 0.15);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
  transform: translateY(20px);
  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.7s;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.accent};
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${COLORS.text};
  text-align: center;
`;

const SkillItem = styled.li`
  margin: 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
`;

const IconWrapper = styled.span`
  font-size: 1.8rem;
  color: ${COLORS.accent};
`;

// ====== Component ======
const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let i = 0;
            const interval = setInterval(() => {
              setVisibleCards(prev => [...prev, i]);
              i++;
              if (i >= skillData.length) clearInterval(interval);
            }, 400);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleShowSkills = () => {
      let i = 0;
      setVisibleCards([]);
      const interval = setInterval(() => {
        setVisibleCards(prev => [...prev, i]);
        i++;
        if (i >= skillData.length) clearInterval(interval);
      }, 400);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('showSkills', handleShowSkills);
    return () => window.removeEventListener('showSkills', handleShowSkills);
  }, []);

  return (
    <SkillsSection id="skills" ref={sectionRef}>
      <Title>Skills</Title>
      <Subtitle>
        Equipped with strong foundations in data science, programming, and analytical tools to turn complex data into actionable insights and intelligent solutions.
      </Subtitle>
      <SkillCategories>
        {skillData.map((cat, index) => (
          <SkillCard key={cat.category} className={visibleCards.includes(index) ? 'visible' : ''}>
            <CategoryTitle>{cat.category}</CategoryTitle>
            <SkillList>
              {cat.skills.map(skill => (
                <SkillItem key={skill.name}>
                  <IconWrapper>{skill.icon}</IconWrapper>
                  {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillCategories>
    </SkillsSection>
  );
};

export default Skills;
