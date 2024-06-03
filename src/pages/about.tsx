import {
  BackgroundAnimation,
  ButtonGroup,
  Carousel,
  Header,
  Page,
  Section,
  SubHeader,
} from "../components";

import styled from "styled-components";

export function AboutPage() {
  const AboutHeroStyles = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 80px 24px;
  `;
  const AboutHeroColumnStyles = styled.div`
    /* border: thin solid orange; */
    flex: 1;
    flex-direction: column;
    width: 100%;
    padding: 48px;
  `;
  return (
    <Page
      sections={{
        nav: (
          <div style={{ background: "#333", height: "40px", width: "100%" }}>
            <pre style={{ color: "white" }}>Nav</pre>
          </div>
        ),
      }}
    >
      <BackgroundAnimation animation={"fluid"} />
      <AboutHeroStyles>
        <AboutHeroColumnStyles>
          <span>Hi, I'm Jay</span>
          <Header text={"Web, Mobile & Blockchain\n App Developer"} />
          <SubHeader text={"Building the future, one block at a time."} />
        </AboutHeroColumnStyles>
        <AboutHeroColumnStyles>Img</AboutHeroColumnStyles>
      </AboutHeroStyles>
      <Section
        title="timeline"
        hero
        animation={"slide-in"}
        text={`[text] Interactive CV overview of experience.`}
      >
        <Carousel
          items={[
            { text: "Ford", imgURL: "https://placehold.co/64" },
            { text: "Talamo", imgURL: "https://placehold.co/64" },
            { text: "Zilliqa", imgURL: "https://placehold.co/64" },
            { text: "SupraOracles", imgURL: "https://placehold.co/64" },
            { text: "NTT", imgURL: "https://placehold.co/64" },
            { text: "Inifinity Works", imgURL: "https://placehold.co/64" },
            { text: "Critical Mass", imgURL: "https://placehold.co/64" },
            { text: "Matchesfashion", imgURL: "https://placehold.co/64" },
          ]}
        />
      </Section>
      <Section
        title="intro"
        hero
        animation={"slide-in"}
        text={`[text] Brief introduction about Jay’s experience, technologies he specializes
         in (Node, React, Capacitor, React Native, Electron, Solidity,
         Web3.js).`}
      >
        <Carousel
          items={[
            { text: "Cloud", imgURL: "https://placehold.co/240" },
            { text: "Node", imgURL: "https://placehold.co/240" },
            { text: "React", imgURL: "https://placehold.co/240" },
            { text: "Capacitor", imgURL: "https://placehold.co/240" },
            { text: "Expo", imgURL: "https://placehold.co/240" },
            { text: "React Native", imgURL: "https://placehold.co/240" },
            { text: "Solidity", imgURL: "https://placehold.co/240" },
          ]}
        />
      </Section>
    </Page>
  );
}
