import { Outlet, useNavigation } from "react-router-dom";

function AppRoute() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";

  return (
    <div className=" flex flex-col gap-[2rem] md:gap-[4rem] bg-customWhite ">
      {isLoading ? <h1>Loading</h1> : <Outlet />}
    </div>
  );
}

export default AppRoute;
