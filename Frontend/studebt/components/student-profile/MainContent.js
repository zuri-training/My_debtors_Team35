import Hero from "./Hero";
import Content from "./Content";

export default function MainContent(props) {
  return (
    <div className="col">
      <Hero />
      <Content />
    </div>
  );
}
