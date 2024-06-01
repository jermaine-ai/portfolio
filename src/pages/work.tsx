import { useState } from "react";
import {
  //   BackgroundAnimation,
  //   ButtonGroup,
  //   Carousel,
  Header,
  Page,
  //   Section,
  //   SubHeader,
} from "../components";

type MasonryItemType = {
  text: string;
  imgURL: string;
  onClickFn: VoidFunction;
  link?: string;
};
export const MasonryGrid = ({ items }: { items: Array<MasonryItemType> }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-evenly",
        maxWidth: "1280px",
      }}
    >
      <div>
        <img
          style={{
            transform: "translateX(-10px)",
            objectFit: "cover",
            width: "100vw",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
          }}
          alt={items?.[0].text}
          src={items?.[0].imgURL}
          width={800}
          height={440}
        />
      </div>
      <div
        style={{
          marginTop: "440px",
          display: "flex",
          justifyContent: "space-evenly",
          width: "100vw",
          overflowX: "scroll",
        }}
      >
        {items.map((_item, _index) => {
          if (_index === 0) {
            return <></>;
          } else {
            return (
              <div
                style={{ marginRight: _index === 0 ? "0px" : "16px" }}
                onClick={() => _item.onClickFn()}
                key={_index}
              >
                <img
                  alt={_item.text}
                  src={_item.imgURL}
                  width={240}
                  height={320}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export const SearchFilter = () => <pre>Filter</pre>;
export const Modal = ({
  open,
  toggleModalFn,
  content,
}: {
  open: boolean;
  toggleModalFn: (openState: boolean) => void;
  content: JSX.Element;
}) => {
  const ModalContent = ({ children }: { children: JSX.Element }) => {
    return (
      <>
        {/* Full Page Overlay */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,.1)",
          }}
        >
          {/* Modal Internal Content */}
          <div
            style={{
              padding: "10px",
              paddingBottom: "50px",
              background: "white",
              width: "100%",
              maxWidth: "480px",
              height: "400px",
            }}
          >
            <button onClick={() => toggleModalFn(false)}>X</button>
            <article style={{ overflow: "scroll", maxHeight: "100%" }}>
              {content}
            </article>
          </div>
        </div>
      </>
    );
  };

  if (!open) {
    return <></>;
  }
  return <ModalContent>{content}</ModalContent>;
};

export function WorkPage() {
  const [lastClick, setLastClick] = useState("");
  const [modalContent, setModalContent] = useState(<></>);
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleContent = (id: string, content: JSX.Element) => {
    if (lastClick !== id) {
      setLastClick(id);
      setModalOpen(true);
      setModalContent(content);
      return;
    }
    const nextModalState = !isModalOpen;
    setModalOpen(nextModalState);
    setModalContent(nextModalState ? content : <></>);
    return;
  };
  return (
    <Page>
      <Header text={"Portfolio"} />
      <SearchFilter />
      <MasonryGrid
        items={[
          {
            text: "Microsoft Tetra",
            imgURL: "https://placehold.co/1280x320",
            onClickFn: () =>
              toggleContent(
                "Microsoft Tetra",
                <>
                  <pre>About Microsoft Tetra</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "Mizuno Dusk",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "Mizuno Dusk",
                <>
                  <pre>About Mizuno Dusk</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "Venue Vibe",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "Venue Vibe",
                <>
                  <pre>About Venue Vibe</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "AirVitalism",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "AirVitalism",
                <>
                  <pre>About Air Vitalism</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "AirVitalism",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "AirVitalism",
                <>
                  <pre>About Air Vitalism</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "AirVitalism",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "AirVitalism",
                <>
                  <pre>About Air Vitalism</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "AirVitalism",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "AirVitalism",
                <>
                  <pre>About Air Vitalism</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
          {
            text: "AirVitalism",
            imgURL: "https://placehold.co/500",
            onClickFn: () =>
              toggleContent(
                "AirVitalism",
                <>
                  <pre>About Air Vitalism</pre>
                  <p>
                    lorem ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem
                    ipsum lorem. lorem ipsum lorem lorem ipsum lorem. lorem
                    ipsum lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem. lorem ipsum lorem lorem ipsum lorem. lorem ipsum
                    lorem lorem ipsum lorem. lorem ipsum lorem lorem ipsum
                    lorem.
                  </p>
                </>
              ),
          },
        ]}
      />
      <Modal
        open={isModalOpen}
        toggleModalFn={setModalOpen}
        content={modalContent}
      />
    </Page>
  );
}
