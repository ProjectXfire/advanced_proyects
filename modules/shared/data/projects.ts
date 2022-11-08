import { StaticImageData } from "next/image";

import MarkdownImg from "../../../public/assets/markdown.jpeg";
import RandomPersonImg from "../../../public/assets/random-person.jpeg";
import PaginationImg from "../../../public/assets/pagination.jpeg";
import StockPhotosImg from "../../../public/assets/photos.jpeg";
import DarkModeImg from "../../../public/assets/darkmode.jpeg";
import HackerNewsImg from "../../../public/assets/news.jpeg";
import QuizImg from "../../../public/assets/quiz.jpeg";

export interface IProject {
  title: string;
  image: StaticImageData;
  href: string;
}

export const projects: IProject[] = [
  { title: "Markdown", image: MarkdownImg, href: "/markdown" },
  { title: "Random Person", image: RandomPersonImg, href: "/random-person" },
  { title: "Pagination", image: PaginationImg, href: "/pagination" },
  { title: "Stock Photos", image: StockPhotosImg, href: "/stock-photos" },
  { title: "Dark mode", image: DarkModeImg, href: "/darkmode" },
  { title: "Hacker News", image: HackerNewsImg, href: "/hacker-news" },
  { title: "Quiz", image: QuizImg, href: "/quiz" },
];
