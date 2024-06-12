import styled from "styled-components";

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
  <pre>{"[animation] " + animation}</pre>
);

type PageProps = {
  children: React.ReactNode;
  sections?: {
    nav?: JSX.Element;
    fluid?: JSX.Element;
  };
  mainFluid?: boolean;
};
export const Page = (props: PageProps) => (
  <>
    {/* Nav */}
    {props?.sections?.nav && (
      <div
        style={{
          width: "100%",
          border: "thin solid blue",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {props.sections?.nav}
      </div>
    )}
    {/* Fluid */}
    {props?.sections?.fluid && (
      <div
        style={{
          width: "100%",
          // border: "thin solid orange",
          display: "flex",
        }}
      >
        {props.sections?.fluid}
      </div>
    )}
    {/* Main */}
    <main
      style={{
        margin: "0 auto",
        maxWidth: props?.mainFluid ? "unset" : "1280px",
        width: "100%",
        // border: "thin solid limegreen",
      }}
    >
      {props?.children}
    </main>
  </>
);
export const Section = ({
  hero,
  title,
  animation,
  children,
  text,
}: {
  hero?: boolean;
  title: string;
  text?: string;
  animation: string;
  children: React.ReactNode;
}) => {
  const StyledSection = styled.section`
    border: thin solid blue;
    padding: 24px 120px;
    line-height: 2;
  `;
  return (
    <StyledSection>
      {hero ? (
        <>
          <h1>{"Section title: " + title}</h1>
          <p>{text}</p>
        </>
      ) : (
        <>
          <h2>{"Section title: " + title}</h2>
          <p>{text}</p>
        </>
      )}
      <pre>{"Section animation: " + animation}</pre>
      {children}
    </StyledSection>
  );
};
export const Header = ({ text }: { text: string }) => <h1>{text}</h1>;
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
