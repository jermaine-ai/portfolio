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
export const Page = ({ children }: { children: React.ReactNode }) => (
  <main
    style={{
      margin: "0 auto",
      maxWidth: "1440px",
      width: "100%",
      border: "thin solid red",
    }}
  >
    {children}
  </main>
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
        <h2>{"Section title: " + title}</h2>
      ) : (
        <h3>{"Section title: " + title}</h3>
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
