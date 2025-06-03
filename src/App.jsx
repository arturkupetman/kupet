import React from 'react';
import { Wrapper, HeroBlock, ContentBlock, Title, Subtitle, SocialLinks, SocialLink, HeroImage, HeroDiv, IconContainer } from './App.styled';
import bgImage from './bgImage.webp';
import tgIcon from './icons/tgIcon.jsx';
import igIcon from './icons/igIcon.jsx';
import twIcon from './icons/twIcon.jsx';
import tikIcon from './icons/tikIcon.jsx';
import youtubeIcon from './icons/youtubeIcon.jsx';

function App() {
  const socialLinks = [
    { 
      name: 'Telegram', 
      url: 'https://t.me/+71ai-YIt9bYxNzAy',
      icon: tgIcon,
      bgColor: 'rgba(0, 119, 255, 0.3)',
    },
  ];

  return (
    <Wrapper>
      <HeroBlock>
        <HeroImage src={bgImage} alt="Hero background" />
        <HeroDiv/>
      </HeroBlock>
      <ContentBlock>
        <Title>Артур Купетман</Title>
        <Subtitle>Голос поколения • Архитектор влияния • Медиаэнергия</Subtitle>
        <SocialLinks>
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <IconContainer bgColor={link.bgColor}>
                <link.icon color="#fff" width={20} height={20} />
              </IconContainer>
              {link.name}
            </SocialLink>
          ))}
        </SocialLinks>
      </ContentBlock>
    </Wrapper>
  );
}

export default App; 