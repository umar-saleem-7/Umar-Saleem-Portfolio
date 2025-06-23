// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  cardBg: '#232425',
};

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideOutLeft = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-50px); }
`;

const ProjectsSection = styled.section`
  width: 100%;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 4rem 1.5rem;
  box-sizing: border-box;
  color: ${COLORS.text};
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem 3rem 0.5rem;
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.accent};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${COLORS.text};
  text-align: center;
  max-width: 700px;
  margin-bottom: 2.5rem;
  opacity: 0;
  font-weight: 400;
  animation: ${slideInRight} 0.7s ease forwards;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const ProjectCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 12px;
  padding: 2rem 2.5rem;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(176, 170, 192, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  &.enter {
    animation-name: ${slideInRight};
  }
  &.exit {
    animation-name: ${slideOutLeft};
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0.8rem;
    max-width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${COLORS.accent};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: ${COLORS.text};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.97rem;
  }
`;

const ProjectTools = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.82rem;
  }
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${COLORS.accent};
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  z-index: 2;
  &:hover {
    color: #fff;
  }
  &:disabled {
    color: #555;
    cursor: default;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.3rem;
  }
`;

const LeftArrow = styled(NavigationArrow)`
  left: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const RightArrow = styled(NavigationArrow)`
  right: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;


const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

const projects = [
  {
    title: "Dream Vividness Prediction",
    description: "Built a Gradient Boosting model to predict vivid dream levels from sleep data.",
    tools: "Python, Pandas, Scikit-learn, Scipy, Seaborn, Matplotlib",
    url: "https://github.com/umar-saleem-7/Dream-Vividness-Prediction-A-Statistics-Analysis-Project"
  },
  {
    title: "QA and Summarizer App",
    description: "Developed a FullStack QA and Summarizer web app enabling passage-based question answering and text summarization.",
    tools: "React, Bootstrap, Python, FastApi, SQlite, transformers, torch, ML models (distilbert-base-uncased-distilled-squad, facebook/bart-large-cnn)",
    url: "https://github.com/umar-saleem-7/Paragraph-QA-Summarizer-AI-App"
  },
  {
    title: "Medical Lab Dashboard",
    description: "Created an interactive Power BI dashboard to visualize medical lab test trends.",
    tools: "Power BI, Excel, DAX",
    url: "https://github.com/umar-saleem-7/Power-BI-Projects"
  },
  {
    title: "Smart ROCF Scoring System",
    description: "Developed a Smart ROCF Scoring System using computer vision and machine learning to automatically extract shapes and structures from original and patient-drawn images for comparative scoring.",
    tools: "Python, OpenCV, Scikit-learn, NumPy, Matplotlib, React (for frontend)",
    url: "https://github.com/umar-saleem-7/Smart-ROCF-Scoring-System"
  },
  {
    title: "E-commerce Sales Prediction Web App",
    description: "Built an interactive web app using Streamlit to visualize and analyze historical sales data to predict e-commerce sales.",
    tools: "Python (Streamlit, Pandas, Matplotlib, Seaborn, NumPy, Scikit-learn), CSS.",
    url: "https://github.com/umar-saleem-7/E-commerce-Sales-Prediction-Dataset-Analysis"
  },
  {
    title: "Search Engine using Binary Search Tree",
    description: "A Python-based query storage system using BST for in-memory top queries and Pickle for offloading less frequent queries to a binary file.",
    tools: "Python, BST(Binary Search Tree), Pickle.",
    url: "https://github.com/umar-saleem-7/DSA"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('enter');
  const autoSlideRef = useRef();

  // Touch handling for swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextProject();
    } else if (distance < -minSwipeDistance) {
      prevProject();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Auto-advance every 3 seconds, with smooth transition
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setAnimationState('exit');
      setTimeout(() => {
        setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
        setAnimationState('enter');
      }, 600); // match animation duration
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  const prevProject = () => {
    clearInterval(autoSlideRef.current);
    setAnimationState('exit');
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimationState('enter');
    }, 600);
  };

  const nextProject = () => {
    clearInterval(autoSlideRef.current);
    setAnimationState('exit');
    setTimeout(() => {
      setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
      setAnimationState('enter');
    }, 600);
  };

  const currentProject = projects[currentIndex];

  return (
    <ProjectsSection
      id="projects"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Title>Projects</Title>
      <Subtitle>
        Developed diverse projects ranging from machine learning models to interactive web applications showcasing practical data science skills.
      </Subtitle>
      <LeftArrow onClick={prevProject} aria-label="Previous Project">
        <FaArrowLeft />
      </LeftArrow>
      <RightArrow onClick={nextProject} aria-label="Next Project">
        <FaArrowRight />
      </RightArrow>
      <ProjectLink href={currentProject.url} target="_blank" rel="noopener noreferrer">
        <ProjectCard className={animationState}>
          <ProjectTitle>{currentProject.title}</ProjectTitle>
          <ProjectDescription>{currentProject.description}</ProjectDescription>
          <ProjectTools>Tools & Technologies: {currentProject.tools}</ProjectTools>
        </ProjectCard>
      </ProjectLink>
    </ProjectsSection>
  );
};

export default Projects;
