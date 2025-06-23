// Main.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaKaggle, FaInstagram, FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#f4f7fa',
  button: '#b0aac0',
  buttonHover: '#a095b5',
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

const slideInText = keyframes`
  0% { opacity: 0; transform: translateX(30px);}
  100% { opacity: 1; transform: translateX(0);}
`;

const MainSection = styled.section`
  width: 100%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.background};
  padding: 3rem 1.5rem 2rem 1.5rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1.2s;
  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

const ProfileImg = styled.img`
  width: 230px;
  height: 300px;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(176, 170, 192, 0.15);
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeIn} 1.6s;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const AnimatedText = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${COLORS.accent};
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  line-height: 1.3;
  animation: ${slideInText} 1.2s cubic-bezier(.77,0,.18,1) both;
  background: linear-gradient(90deg, #b0aac0 70%, #f4f7fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
`;

const socialColors = {
  linkedin: '#0A66C2',
  github: '#171515',
  kaggle: '#20BEFF',
  instagram: 'linear-gradient(45deg, #fd5d5b 0%, #fcae43 50%, #d6249f 100%)',
  facebook: '#1877f3',
};

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
  color: ${COLORS.accent};
  background: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    color: ${({ type }) =>
      type === 'instagram'
        ? '#fff'
        : socialColors[type]};
    background: ${({ type }) =>
      type === 'instagram'
        ? socialColors.instagram
        : 'none'};
    box-shadow: 0 4px 18px rgba(176, 170, 192, 0.18);
    transform: translateY(-4px) scale(1.08);
  }
`;

const HireMeButton = styled.a`
  display: inline-block;
  margin-top: 0.7rem;
  padding: 12px 38px;
  background: ${COLORS.button};
  color: #181A1B;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(176, 170, 192, 0.09);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${COLORS.buttonHover};
    color: #fff;
    transform: scale(1.05);
  }
`;

const Main = () => (
  <MainSection id="home">
    <Left>
      <ProfileImg src={profileImg} alt="Umar Saleem" />
    </Left>
    <Right>
      <AnimatedText>
        Hi, I&apos;m Umar Saleem.<br />
        <span style={{fontWeight: 400, fontSize: '1.35rem', color: '#f4f7fa'}}>A Data Scientist passionate about turning data into actionable insights.</span>
      </AnimatedText>
      <SocialRow>
        <SocialIcon
          href="https://www.linkedin.com/in/umar-saleem-1a521325b"
          type="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://github.com/umar-saleem-7"
          type="github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://kaggle.com/umarsaleem7"
          type="kaggle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaggle"
        >
          <FaKaggle />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/umarsaleem816?igsh=ZjYyZjAycWl6OXk4"
          type="instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon
          href="https://www.facebook.com/share/1ArjHKkXT4/"
          type="facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </SocialIcon>
      </SocialRow>
      <HireMeButton href="https://wa.me/+923188784493" target="_blank" rel="noopener noreferrer">
        Hire Me
      </HireMeButton>
    </Right>
  </MainSection>
);

export default Main;
