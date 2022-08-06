import SideBar from "./SideBar";
import MainContent from "./MainContent";

export default function Main(props) {
  return (
    <main className="grid">
      <SideBar />
      <MainContent />
    </main>
  );
}
