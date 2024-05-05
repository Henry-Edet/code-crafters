import * as Components from "./components/index";
import * as routers from "./router/routes";

function App() {
  return (
    <div className=" flex flex-col gap-[2rem] md:gap-[4rem] bg-customWhite ">
      <Components.Header />
      <routers.Home />
      <Components.Footer />
    </div>
  );
}

export default App;
