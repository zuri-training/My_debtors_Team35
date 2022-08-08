import CommentContent from "./CommentContent";
import Hero from "./Hero";

export default function CommentMainContent(props) {
  return (
    <div className="col">
      <Hero />
      <CommentContent />
    </div>
  );
}
