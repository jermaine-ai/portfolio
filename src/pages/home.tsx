import styled from "styled-components";
import {
  BackgroundAnimation,
  ButtonGroup,
  Header,
  Page,
  SubHeader,
} from "../components";

export const Client = () => {
  return (
    <div style={{ border: "thin solid grey" }}>
      <p>Client</p>
    </div>
  );
};

const ClientSection = styled.section`
  margin-top: 120px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const HomeContainer = styled.div`
  background: cyan;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  overflow: hidden;
`;
const NavStyles = styled.nav`
  padding: 0 24px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  // background: #333;
  height: 40px;
  width: 100%;
`;
const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
`;

export function HomePage() {
  return (
    <Page
      sections={{
        nav: <></>,
        fluid: (
          <>
            <HomeContainer>
              <NavStyles>
                <pre style={{ color: "white" }}>Nav</pre>
              </NavStyles>
              <HomeStyles>
                <BackgroundAnimation animation={"fluid"} />
                <span>Hi, I'm Jay</span>
                <Header text={"Web, Mobile & Blockchain Developer"} />
                <SubHeader text={"Building the future, one block at a time."} />
                <ButtonGroup
                  buttons={[
                    { link: "/work", text: "View My Work" },
                    { link: "/about", text: "About Me" },
                    { link: "/contact", text: "Get in Touch" },
                  ]}
                />
                <ClientSection>
                  <Client />
                  <Client />
                  <Client />
                  <Client />
                </ClientSection>
              </HomeStyles>
            </HomeContainer>
          </>
        ),
      }}
    >
      <></>
    </Page>
  );
}
