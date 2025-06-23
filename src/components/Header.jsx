import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const COLORS = {
  background: '#181A1B',
  accent: '#b0aac0',
  text: '#F4F7FA',
  hover: '#232425',
  mobileBg: '#232425ee',
};

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-20px);}
  to { opacity: 1; transform: translateY(0);}
`;

const HeaderContainer = styled.header`
  width: 100%;
  background: ${COLORS.background};
  color: ${COLORS.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  box-shadow: 0 2px 16px rgba(176, 170, 192, 0.07);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: transform 0.35s cubic-bezier(.77,0,.18,1), opacity 0.25s;
  transform: ${({ hide }) => (hide ? 'translateY(-100%)' : 'translateY(0)')};
  opacity: ${({ hide }) => (hide ? 0 : 1)};
`;

const Brand = styled.div`
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${COLORS.accent};
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  animation: ${slideIn} 0.7s cubic-bezier(.77,0,.18,1) both;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    color: ${COLORS.text};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.05rem;
    padding: 8px 16px;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: ${COLORS.hover};
      color: ${COLORS.accent};
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: 1rem;
  z-index: 110;

  span {
    height: 3px;
    width: 28px;
    background: ${COLORS.accent};
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${COLORS.mobileBg};
  position: fixed;
  top: 64px;
  right: 0;
  width: 100vw;
  padding: 2rem 0;
  margin: 0;
  list-style: none;
  z-index: 120;
  animation: ${slideIn} 0.5s cubic-bezier(.77,0,.18,1) both;

  li a {
    color: ${COLORS.text};
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 7px;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: ${COLORS.hover};
      color: ${COLORS.accent};
    }
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const navItems = [
  { label: 'Home', link: 'home' },
  { label: 'About', link: 'about' },
  { label: 'Resume', link: 'resume' },
  { label: 'Skills', link: 'skills' },
  { label: 'Projects', link: 'projects' },
  { label: 'Researches', link: 'research' },
  { label: 'Contact', link: 'contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // Smooth scroll handler
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (sectionId === 'about') {
      window.dispatchEvent(new Event('showAbout'));
    }
    if (sectionId === 'research') {
      window.dispatchEvent(new Event('showResearch'));
    }
    setMenuOpen(false); // Hide mobile menu after click
  };

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setHideHeader(true);
          } else {
            setHideHeader(false);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <HeaderContainer hide={hideHeader}>
      <Brand>Umar Saleem Portfolio</Brand>
      <Nav>
        <NavLinks>
          {navItems.map(item => (
            <NavLink key={item.label}>
              <a
                href={`#${item.link}`}
                onClick={e => handleNavClick(e, item.link)}
              >
                {item.label}
              </a>
            </NavLink>
          ))}
        </NavLinks>
        <Hamburger onClick={() => setMenuOpen(m => !m)}>
          <span />
          <span />
          <span />
        </Hamburger>
        {menuOpen && (
          <MobileMenu>
            {navItems.map(item => (
              <li key={item.label}>
                <a
                  href={`#${item.link}`}
                  onClick={e => handleNavClick(e, item.link)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </MobileMenu>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
