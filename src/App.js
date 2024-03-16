import * as Home from "./pages/home/index";
import * as Components from "./components/index";
// import Start from "./pages/home/footers/Endfooter";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center gap-[6rem] ">
      <Components.Header />
      <Home.Hero />
      <Home.CraftSol />
      <Home.Mission />
      <Home.Trusted />
      <Home.LatestBlog />
      <Home.EmailSection />
      <Home.Footer />
    </div>
  );
}

export default App;
