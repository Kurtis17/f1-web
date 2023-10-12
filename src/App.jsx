import RaceResults from "./components/RaceResults";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import FastestLap from "./components/FastestLap";
import RootPage from "./routes/RootPage";
import StratingGrid from "./components/StartingGrid";
import Practice3 from "./components/Practice3";
import Practice2 from "./components/Practice2";
import Practice1 from "./components/Practice1";
import StandingsPage from "./routes/StandingsPage";
import { Drivers23 } from "./data/drivers/Drivers23";
import { Teams23 } from "./data/teams/Teams23";
import CurrentDriverStandings from "./components/CurrentDriverStandings";
import CurrentTeamStandings from "./components/CurrentTeamStandings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <RaceResults />,
      },
      {
        path: "race-results",
        element: <RaceResults />,
      },
      {
        path: "fastest-lap",
        element: <FastestLap />,
      },
      {
        path: "starting-grid",
        element: <StratingGrid />,
      },
      {
        path: "practice-3",
        element: <Practice3 />,
      },
      {
        path: "practice-2",
        element: <Practice2 />,
      },
      {
        path: "practice-1",
        element: <Practice1 />,
      },
    ],
  },
  {
    path: "/standings/2023/drivers",
    element: <StandingsPage option={Drivers23} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CurrentDriverStandings />,
      },
      {
        path: "albon-alexander",
        element: <div>test 1</div>,
      },
      {
        path: "alonso-fernando",
        element: <div>test 2</div>,
      },
      {
        path: "bottas-valtteri",
        element: <div>test 1</div>,
      },
      {
        path: "cark",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
      {
        path: "",
        element: <div>test 1</div>,
      },
      {
        path: "",
        element: <div>test 2</div>,
      },
    ],
  },
  {
    path: "/standings/2023/teams",
    element: <StandingsPage option={Teams23} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CurrentTeamStandings />,
      },
      {
        path: "red-bull-racing-honda-rbpt",
        element: <div>test 1</div>,
      },
      {
        path: "ferrari",
        element: <div>test 2</div>,
      },
    ],
  },
  {
    path: "/standings/2022/drivers",
    element: <StandingsPage option={Drivers23} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CurrentDriverStandings />,
      },
      {
        path: "verstappen-max",
        element: <div>test 1</div>,
      },
      {
        path: "perez-sergio",
        element: <div>test 2</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
