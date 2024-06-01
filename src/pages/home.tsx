type ButtonType = {
  link: string;
  text: string;
  cb?: () => VoidFunction;
};
type CarouselItemType = {
  text: string;
  imgURL: string;
};
export const BackgroundAnimation = ({ animation }: { animation: string }) => (
  <pre>{animation}</pre>
);
export const Page = ({ children }: { children: React.ReactNode }) => (
  <main>{children}</main>
);
export const Section = ({
  hero,
  title,
  animation,
  children,
}: {
  hero?: boolean;
  title: string;
  animation: string;
  children: React.ReactNode;
}) => {
  return (
    <section>
      {hero ? (
        <h1>{"Section title: " + title}</h1>
      ) : (
        <h2>{"Section title: " + title}</h2>
      )}
      <pre>{"Section animation: " + animation}</pre>
      {children}
    </section>
  );
};
export const Header = ({ text }: { text: string }) => <pre>{text}</pre>;
export const SubHeader = ({ text }: { text: string }) => <pre>{text}</pre>;
export const Button = {
  Primary: ({ text, link }: ButtonType) => (
    <a href={link}>
      <button>{`[Primary] ${text}`}</button>
    </a>
  ),
  CTA: ({ text, link }: ButtonType) => (
    <a href={link}>
      <button>{`[CTA] ${text}`}</button>
    </a>
  ),
};
export const ButtonGroup = ({ buttons }: { buttons: Array<ButtonType> }) => {
  return (
    <>
      {buttons.map((_button, index) => (
        <div key={index}>
          <Button.CTA {..._button} />
        </div>
      ))}
    </>
  );
};
export const Carousel = ({ items }: { items: Array<CarouselItemType> }) => (
  <article>
    {items.map((_item, _index) => (
      <div key={_index}>
        <div>
          <img src={_item.imgURL} width={240} height={240} />
        </div>
        <div>
          <pre>{_item.text}</pre>
        </div>
      </div>
    ))}
  </article>
);
export const Modal = ({ text }: { text: string }) => {
  <pre>{text}</pre>;
};

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

export function PortfolioPage() {
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
