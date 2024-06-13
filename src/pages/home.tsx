import styled from "styled-components";
import {
  BackgroundAnimation,
  ButtonGroup,
  Header,
  Page,
  SubHeader,
} from "../components";
import { useState } from "react";
import { LinearGradient } from "react-text-gradients";

const ShowcaseCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  min-height: 400px;
`;
export const ShowcaseItem = (props: ShowcaseItemType) => {
  const { id, title } = props;
  const ShowcaseItemBody = styled.div`
    margin: 0 16px;
  `;
  const ShowcaseItemStyles = styled.li`
    border: thin solid grey;
    list-style-type: none;
    margin: 12px;
    margin-top: 10px;
    min-width: 200px;
    height: 360px;
    flex: 1;
    text-align: center;
    justify-content: center;
    background: lightgreen;
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
      max-width: unset;
    }
  `;
  return (
    <ShowcaseCard>
      <ShowcaseItemStyles key={id}>
        <span>{title}</span>
      </ShowcaseItemStyles>
      <ShowcaseItemBody>
        <h4>{title}</h4>
        <p>{"C#.NET | React"}</p>
      </ShowcaseItemBody>
    </ShowcaseCard>
  );
};

type ShowcaseItemType = {
  id: string | number;
  title: string;
};

const ShowcaseStyles = styled.section`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;
const Showcase = ({
  filter = "",
  content,
}: {
  filter: string;
  content: Array<{
    category: string;
    items: Array<ShowcaseItemType>;
    description: string;
  }>;
}) => {
  const ShowcaseSectionStyles = styled.section`
    background: none;
    padding: 80px 4px;
  `;
  const ShowcaseCategoryH3 = styled.h3`
    font-size: 2.4rem;
    opacity: 0.7;
  `;
  const ShowcaseCategoryH4 = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
    opacity: 0.4;
  `;
  const ShowcaseCategoryStyles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const HRStyles = styled.div`
    margin-top: 100px;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    border: none;
  `;

  return (
    <ShowcaseStyles>
      {content
        .filter((f) => new RegExp(`${filter}`, "gi").test(f.category))
        ?.map(({ category, items, description }) => (
          <ShowcaseSectionStyles key={category}>
            <ShowcaseCategoryH3>
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                {category}
              </LinearGradient>
            </ShowcaseCategoryH3>
            <ShowcaseCategoryH4>{description}</ShowcaseCategoryH4>
            <ShowcaseCategoryStyles>
              {items.map((i) => (
                <ShowcaseCard>
                  <ShowcaseItem key={i.id} {...i} />
                </ShowcaseCard>
              ))}
            </ShowcaseCategoryStyles>
            <HRStyles />
          </ShowcaseSectionStyles>
        ))}
    </ShowcaseStyles>
  );
};
interface TagStyleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  clear?: boolean;
}
const TagStyles = styled.button<TagStyleProps>`
  cursor: pointer;
  background: ${({ selected }) => (selected ? "black" : "unset")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  opacity: ${({ clear }) => (clear ? "0.4" : "unset")};
  display: flex;
  margin: 4px 16px;
  padding: 8px 16px;
  border: 2px solid black;
  font-weight: bold;
  &:hover,
  &:visited,
  &:active {
    color: white;
    background: black;
  }
`;

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  text: string;
  selected?: string;
  onClick: (args?: unknown) => unknown;
  clear?: boolean;
}
const Tag = ({ id, clear, text, selected, onClick }: TagProps) => {
  return (
    <TagStyles
      key={id.toString()}
      clear={clear}
      onClick={(e) => {
        e.preventDefault();
        onClick(text);
      }}
      selected={selected?.trim().toUpperCase() === text?.trim().toUpperCase()}
    >
      {text.toUpperCase()}
    </TagStyles>
  );
};

const HomeContainer = styled.div`
  padding-top: 160px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  display: flex;
`;
const NavStyles = styled.nav`
  padding: 0 24px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  // background: #333;
  height: 40px;
`;
const HomeStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  padding: 96px 24px;
`;

const TagsWrapper = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TagCloud = ({
  tags,
  selected,
}: {
  selected: string;
  tags: Array<TagProps>;
}) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <Tag
          id={tag.id}
          onClick={() => {
            tag.onClick(tag.text);
          }}
          clear={tag.clear}
          selected={selected}
          text={tag.text}
        />
      ))}
    </TagsWrapper>
  );
};

export function HomePage() {
  const [_filter, setFilter] = useState("");
  return (
    <Page
      sections={{
        nav: (
          <NavStyles>
            <pre style={{ color: "white" }}>Nav</pre>
          </NavStyles>
        ),
        fluid: (
          <>
            <HomeContainer>
              <BackgroundAnimation animation={"fluid"} />
              <span>Hi, I'm Jay</span>
              <Header text={"Full Stack & Blockchain Developer"} />
              <SubHeader text={"Building the future, one block at a time."} />
              <ButtonGroup
                buttons={[
                  // { link: "/work", text: "View My Work" },
                  { link: "/about", text: "About Me" },
                  { link: "/contact", text: "Get in Touch" },
                ]}
              />
            </HomeContainer>
          </>
        ),
      }}
    >
      <HomeStyles>
        <div>
          <TagCloud
            selected={_filter}
            tags={[
              {
                id: "-1",
                text: "All",
                clear: true,
                onClick: () => setFilter(""),
              },
              {
                id: "0",
                text: "Blockchain",
                onClick: () => setFilter("blockchain"),
              },
              {
                id: "1",
                text: "Booking",
                onClick: () => setFilter("booking"),
              },
              {
                id: "2",
                text: "E-commerce",
                onClick: () => setFilter("eCommerce"),
              },
              {
                id: "3",
                text: "Embedded",
                onClick: () => setFilter("embedded"),
              },
              { id: "4", text: "Finance", onClick: () => setFilter("Finance") },
              {
                id: "5",
                text: "Health",
                onClick: () => setFilter("health"),
              },
              {
                id: "6",
                text: "Open Source",
                onClick: () => setFilter("open source"),
              },
              {
                id: "7",
                text: "Travel",
                onClick: () => setFilter("travel"),
              },
              {
                id: "8",
                text: "Social Network",
                onClick: () => setFilter("social"),
              },
            ]}
          />
        </div>
        <Showcase
          filter={_filter || ""}
          content={[
            {
              category: "Blockchain + Finance",
              description: "Azure",
              items: [
                { title: "Microsoft Tetra", id: 0 },
                { title: "SupraOracles", id: 1 },
                { title: "NTT Data", id: 2 },
              ],
            },
            {
              category: "Booking + Travel",
              description: "Azure",
              items: [
                { title: "Pure Skies", id: 3 },
                { title: "Venue Viper", id: 4 },
              ],
            },
            {
              category: "Embedded Systems",
              description: "Azure",
              items: [{ title: "Insuretrail", id: 5 }],
            },
            {
              category: "eCommerce",
              description: "Azure",
              items: [{ title: "Fox & Turtle", id: 6 }],
            },
            {
              category: "Health + Social",
              description: "Azure",
              items: [{ title: "Mizuno Dusk", id: 7 }],
            },
            {
              category: "Open Source",
              description: "Azure",
              items: [
                { title: "Agave", id: 8 },
                { title: "Zapfilter", id: 9 },
              ],
            },
          ]}
        />
      </HomeStyles>
      <></>
    </Page>
  );
}
