import * as Home from "./pages/home/index";
import * as Components from "./components/ui/index";

function App() {
  return (
    <div className=" flex flex-col gap-[2rem] md:gap-[4rem] bg-customWhite ">
      <Components.Header />
      <div className=" flex flex-col justify-center items-center gap-[2rem] mobile:gap-[4rem] md:gap-[6rem]">
        <Home.Hero />
        <Home.CraftSol />
        <Home.Mission />
        <Home.Trusted />
        <Home.LatestBlog />
        <Home.EmailSection />
      </div>
      <Home.Footer />
    </div>
  );
}

export default App;
