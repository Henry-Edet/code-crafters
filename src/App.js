import * as Home from "./pages/home/index";
import * as Components from "./components/index";

function App() {
  return (
    <div className=" flex flex-col gap-[6rem] ">
      <Components.Header />
      <Home.Hero />
      <Home.Mission />
      <Home.CraftSol />
      <Home.Trusted />
      <Home.LatestBlog />
    </div>
  );
}

export default App;
