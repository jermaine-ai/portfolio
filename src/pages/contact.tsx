import { useState } from "react";
import {
  Header,
  //   BackgroundAnimation,
  //   ButtonGroup,
  //   Carousel,
  //   Header,
  Page,
  //   Section,
  //   SubHeader,
} from "../components";

export const AnimatedTimeline = () => <pre>Animated Timeline</pre>;
export const SkillBadges = () => <pre>Skills</pre>;
export const Testimonials = () => <pre>Testimonials</pre>;
export const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(formValues, null, 2));
      }}
    >
      <fieldset>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            type="text"
            name="name"
            id="name"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            type="email"
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            name="message"
            id="message"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

export function ContactPage() {
  return (
    <Page
      sections={{
        nav: <></>,
        fluid: (
          <div
            style={{ background: "cyan", height: "240px", width: "100%" }}
          ></div>
        ),
      }}
    >
      <h1>Contact</h1>
      <Testimonials />
      {/* <AnimatedTimeline /> */}
      <h2>How can I help?</h2>
      <ContactForm />
    </Page>
  );
}
