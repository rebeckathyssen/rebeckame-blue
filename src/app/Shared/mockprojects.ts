import { Project } from "../Shared/Models/project";

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Metadatabasen",
    year: "2019",
    languages: ["C#", "Angular"],
    shorttext:
      "Getting help from my colleagues, 'Metadatabasen' turned out to be my first real project: A database containing metadata.",
    longtext: "blaaa",
    pictures: [
      "../../assets/metadatabasen/metadatabasen2.png",
      "../../assets/metadatabasen/metadatabasen.JPG",
    ],
  },

  {
    id: "2",
    name: "Ludo",
    year: "2020",
    languages: ["C#", "WinForms"],
    shorttext:
      "Learning object-oriented programming in school, we were asked to recreate the boardgame Ludo. Needless to say, there were no rules for the layout.",
    longtext: "blaaa",
    pictures: ["../../assets/ludo/ludo.JPG", "../../assets/ludo/ludo2.JPG"],
  },

  {
    id: "3",
    name: "The Tradesman",
    year: "2020",
    languages: ["C#", "WPF"],
    shorttext:
      'One week of focusing on graphical user interfaces, "The Tradesman" (or "Very Brutal Woman" in my case) came to life. Earn 5000 gold within 30 days to win!',
    longtext: "blaaa",
    pictures: [
      "../../assets/thetradesman/thekoebman.JPG",
      "../../assets/thetradesman/thekoebman2.JPG",
    ],
  },

  {
    id: "4",
    name: "To-do list",
    year: "2020",
    languages: ["C#", "Angular"],
    shorttext:
      "Having more modern frontend-frameworks in mind, we were asked to create our own site from scratch. You never go wrong with a classic to-do list.",
    longtext: "blaaa",
    pictures: [
      "../../assets/todolist/todolist.png",
      "../../assets/todolist/todolist2.png",
    ],
  },
];
