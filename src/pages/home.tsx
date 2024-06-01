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
    <Page
      sections={{
        // nav: (
        //   <div style={{ background: "#333", height: "40px", width: "100%" }}>
        //     <pre style={{ color: "white" }}>Nav</pre>
        //   </div>
        // ),
        fluid: (
          <div
            style={{
              background: "cyan",
              height: "100vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10%",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <BackgroundAnimation animation={"fluid"} />
              <Header text={"Hi, I'm Jay - Web, App & Web3 Developer"} />
              <SubHeader text={"Building the future, one block at a time."} />
              <ButtonGroup
                buttons={[
                  { link: "/work", text: "View My Work" },
                  { link: "/about", text: "About Me" },
                  { link: "/contact", text: "Get in Touch" },
                ]}
              />
            </div>
          </div>
        ),
      }}
    >
      <></>
    </Page>
  );
}
