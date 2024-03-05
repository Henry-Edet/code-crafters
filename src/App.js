import * as Home from "./pages/home/index";
import * as Components from "./components/index";

function App() {
  return (
    <div className=" flex flex-col gap-[2rem] ">
      <Components.Header />
      <Home.Hero />
      <Home.Mission />
    </div>
  );
}

export default App;
