import CommentMainContent from "./CommentMainContent";
import SideBar from "./SideBar";

export default function CommentMain(props) {
  return (
    <main className="grid">
      <SideBar />
      <CommentMainContent />
    </main>
  );
}
