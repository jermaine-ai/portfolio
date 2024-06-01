import {
  BackgroundAnimation,
  ButtonGroup,
  Carousel,
  Header,
  Page,
  Section,
  SubHeader,
} from "../components";

export function HomePage() {
  return (
    <Page>
      <BackgroundAnimation animation={"fluid"} />
      <Header text={"Hi, I'm Jay - Web, App & Web3 Developer"} />
      <SubHeader text={"Building the future, one block at a time."} />
      <ButtonGroup
        buttons={[
          { link: "/work", text: "View My Work" },
          { link: "/contact", text: "Get in Touch" },
        ]}
      />
      <Section title="intro" hero animation={"slide-in"}>
        <p>
          {`
          Brief introduction about Jay’s experience, technologies he specializes
          in (Node, React, Capacitor, React Native, Electron, Solidity,
          Web3.js).`}
        </p>
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
