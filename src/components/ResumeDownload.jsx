// ResumeDownload.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload } from 'react-icons/fa';

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

const ResumeSection = styled.section`
  width: 100%;
  background: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem 2rem 1rem;
  animation: ${fadeIn} 1.1s;
`;

const ResumeText = styled.p`
  color: ${COLORS.accent};
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 0.02em;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 13px 34px;
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

const ResumeDownload = () => (
  <ResumeSection id="resume">
    <ResumeText>
      Interested in my background and skills? <br />
      <span style={{ color: '#f4f7fa', fontWeight: 400 }}>
        Download my resume below!
      </span>
    </ResumeText>
    <DownloadButton
      href="https://drive.google.com/file/d/1WbnE9RtUr6z_BQo_WdaT3drmp9pgpUKm/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDownload />
      Download Resume
    </DownloadButton>
  </ResumeSection>
);

export default ResumeDownload;
