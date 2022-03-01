import Layout from "../components/Layout";
import quiz1 from "../assets/quiz1.png";
import quiz2 from "../assets/quiz2.png";
import quiz3 from "../assets/quiz3.png";
import quiz4 from "../assets/quiz4.png";
import thumbnail1 from "../assets/wiat1.png";
import thumbnail2 from "../assets/wiat2.png";
import thumbnail3 from "../assets/wiat3.png";
import thumbnail4 from "../assets/wiat4.png";
import wedding1 from "../assets/wedding1.png";
import wedding2 from "../assets/wedding2.png";
import wedding3 from "../assets/wedding3.png";
import wedding4 from "../assets/wedding4.png";
import Slider from "../components/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const quizs = [quiz1, quiz2, quiz3, quiz4];
  const wiats = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const weddings = [wedding1, wedding2, wedding3, wedding4];

  return (
    <Layout>
      <h2 id="projects" className="mb-10 text-3xl font-bold">
        PROJECTS
      </h2>
      <div className="flex pb-20">
        <Slider imgs={quizs} />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-2xl font-bold text-indigo-600">Movie Quiz</h3>
          <p className="py-2">
            영화퀴즈를 유저가 직접 만들고 풀 수 있는 사이트
          </p>
          <ul className="py-4">
            <li>
              ✔︎ React.js, GraphQL, react-router, tailwindcss, Apollo Client를
              사용하여 만든 사이트
            </li>
            <li>
              ✔︎ 주요기능 : 회원가입, 영화 퀴즈 만들기, 영화 퀴즈 풀기, 프로필
              설정, 댓글 기능, 좋아요
            </li>
            <li>✔︎ 모바일 / 패드 / 웹 반응형 웹 개발 </li>
            <li>✔︎ git, heroku를 통해 배포</li>
          </ul>
          <div className="pt-2">
            <a href="https://github.com/dev-jihye/movie-quiz">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl text-gray-700"
              />
            </a>

            <a href="https://young-quiz.herokuapp.com/" className="ml-6">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-2xl text-gray-700"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex pb-20">
        <Slider imgs={wiats} />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-2xl font-bold text-indigo-600">
            What I Ate Today
          </h3>
          <p className="py-2">오늘 먹은 음식을 공유하며 소통하는 블로그</p>
          <ul className="py-4">
            <li>
              ✔︎ React.js, Firebase, styled-components, react-router, tailwind,
              Apollo Client 를 사용하여 만든 블로그
            </li>
            <li>✔︎ 주요기능 : 회원가입, 글 작성, 수정 및 삭제, 스킨 설정</li>
            <li>✔︎ 모바일 / 패드 / 웹 반응형 웹 개발 </li>
            <li>✔︎ git, heroku를 통해 배포</li>
          </ul>
          <div className="pt-2">
            <a href="https://github.com/dev-jihye/WIAT">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl text-gray-700"
              />
            </a>

            <a href="https://wiat-jihye.herokuapp.com/" className="ml-6">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-2xl text-gray-700"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <Slider imgs={weddings} />
        <div className="flex flex-col justify-center ml-4">
          <h3 className="text-2xl font-bold text-indigo-600">
            What I Ate Today
          </h3>
          <p className="py-2">오늘 먹은 음식을 공유하며 소통하는 블로그</p>
          <ul className="py-4">
            <li>
              ✔︎ React.js, firebase, styled-components 를 사용하여 만든 웨딩
              청첩장 사이트
            </li>
            <li>✔︎ 주요기능 : 연락처 연결, 방명록 남기기, 카카오 내비</li>
            <li>✔︎ 모바일 / 패드 / 웹 반응형 웹 개발 </li>
            <li>✔︎ git, heroku를 통해 배포</li>
          </ul>
          <div className="pt-2">
            <a href="https://github.com/dev-jihye/wedding">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl text-gray-700"
              />
            </a>

            <a href="https://wedding-jihye.herokuapp.com" className="ml-6">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-2xl text-gray-700"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
