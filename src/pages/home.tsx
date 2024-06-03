import {
  BackgroundAnimation,
  ButtonGroup,
  Carousel,
  Header,
  Page,
  Section,
  SubHeader,
} from "../components";

export const Client = () => {
  return (
    <div style={{ border: "thin solid grey" }}>
      <p>Client</p>
    </div>
  );
};

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "640px",
                width: "100%",
              }}
            >
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
              <div
                style={{
                  marginTop: "120px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Client />
                <Client />
                <Client />
                <Client />
              </div>
            </div>
          </div>
        ),
      }}
    >
      <></>
    </Page>
  );
}
