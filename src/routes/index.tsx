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

import MilliMajlis from "../pages/user/politics/MiliMajlis";
import DomesticPolicy from "../pages/user/politics/DomesticPolicy";
import Karabakh from "../pages/user/politics/Karabakh";
import ForeignPolicy from "../pages/user/politics/ForeignPolicy"
import Military from "../pages/user/politics/Military"
import Diaspora from "../pages/user/politics/Diaspora"

import Detail from "../pages/user/detail"


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
        path: "detail/:id",
        element: <Detail />,
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
      {
        path: "majlis",
        element: <MilliMajlis />,
      },
      {
        path: "domestic",
        element: <DomesticPolicy />,
      },
      {
        path: "karabakh",
        element: <Karabakh />,
      },
      {
        path: "foreign",
        element: <ForeignPolicy />,
      },
      {
        path: "military",
        element: <Military />,
      },
      {
        path: "diaspora",
        element: <Diaspora />,
      },
    ],
  },
];
