import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home";

import Culture from "../pages/user/culture";
import Analytics from "../pages/user/analytics";
import Economy from "../pages/user/economy";
import LatestNews from "../pages/user/latestNews";
import Multimedia from "../pages/user/multimedia";
import Politics from "../pages/user/politics";
import Society from "../pages/user/society";
import Sports from "../pages/user/sports";
import World from "../pages/user/world";
export const Routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "culture",
        element: <Culture />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "economy",
        element: <Economy />,
      },
      {
        path: "latestNews",
        element: <LatestNews />,
      },
      {
        path: "multimedia",
        element: <Multimedia />,
      },
      {
        path: "politics",
        element: <Politics />,
      }, 
      {
        path: "society",
        element: <Society />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "world",
        element: <World />,
      },

    ],
  },
];
