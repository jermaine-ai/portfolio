import styled from "styled-components";

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
type MasonryGridItemProps = {
  onClick: VoidFunction;
};

export const MasonryGrid = ({ items }: { items: Array<MasonryItemType> }) => {
  const MasonryGridStyles = styled.div`
    display: flex;
    overflow-x: scroll;
    justify-content: space-evenly;
  `;
  const MasonryGridItemStyle = styled.div<MasonryGridItemProps>`
    margin-right: 16px;
    img {
      width: 240px;
      height: 320px;
    }
  `;
  return (
    <MasonryGridStyles>
      {items.map((_item, _index) => {
        return (
          <MasonryGridItemStyle
            aria-role="button"
            onClick={() => _item.onClickFn()}
            key={_index}
          >
            <img alt={_item.text} src={_item.imgURL} />
          </MasonryGridItemStyle>
        );
      })}
    </MasonryGridStyles>
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
  const ModalContent = ({ content }: { content: JSX.Element }) => {
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
  return <ModalContent content={content} />;
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
    <Page
      sections={{
        nav: (
          <div style={{ background: "#333", height: "40px", width: "100%" }}>
            <pre style={{ color: "white" }}>Nav</pre>
          </div>
        ),
        fluid: (
          <div style={{ width: "100%" }}>
            <div>
              <Header text={"Portfolio"} />
            </div>
            <div
              style={{ background: "cyan", height: "440px", width: "100%" }}
            ></div>
          </div>
        ),
      }}
    >
      <SearchFilter />
      <MasonryGrid
        items={[
          {
            text: "Microsoft Tetra",
            imgURL: "https://placehold.co/500",
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
