import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as RiIcon from "react-icons/ri";

export const SidebarData = [
  {
    title: "Juegos Populares",
    path: "/",
    icon: <AiIcon.AiFillHome />,
    subNav: [],
  },
  {
    title: "Trending",
    path: "/trending",
    icon: <AiIcon.AiFillHome />,
    subNav: [],
  },
  {
    title: "Generos",
    path: "#",
    icon: <FaIcon.FaGamepad />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpSFill />,
    subNav: [
      {
        title: "Accion",
        path: "/genero/action",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Aventura",
        path: "/genero/adventure",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Shooter",
        path: "/genero/shooter",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Simulador",
        path: "/genero/simulation",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
    ],
  },
  {
    title: "Sagas Populares",
    path: "#",
    icon: <IoIcon.IoLogoGameControllerA />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpSFill />,
    subNav: [
      {
        title: "Grand Theft Auto",
        path: "/saga/grand-theft-auto-1998",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Resident Evil",
        path: "/saga/resident-evil",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Silent Hill",
        path: "/saga/silent-hill",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Metal Gear Solid",
        path: "/saga/metal-gear-solid-1",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Devil May Cry",
        path: "/saga/devil-may-cry",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "Gears of War",
        path: "/saga/gears-of-war",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
      {
        title: "God of War",
        path: "/saga/god-of-war",
        icon: <IoIcon.IoLogoGameControllerA />,
      },
    ],
  },
];
