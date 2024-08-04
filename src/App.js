// import * as Components from "./components/index";
// import * as routers from "./router/routes";
import * as auth from "./pages/auth/auth";

function App() {
  return (
    <div className=" flex flex-col gap-[2rem] md:gap-[4rem] bg-customWhite ">
      {/* <Components.Header />
      <routers.Home />
      <Components.Footer /> */}
      <auth.Signup />
    </div>
  );
}

export default App;
