import AboutMe from "./screens/AboutMe";
import Nav from "./components/Nav";
import Projects from "./screens/Projects";
import Works from "./screens/Works";
import bg from "./assets/1.jpg";
import avatar from "./assets/avatar.png";
import { HashtagIcon } from "@heroicons/react/outline";

const contents = [
  {
    id: 1,
    detail: "업무 전반에 걸쳐 모든 분야와 원활한 소통을 위해 노력합니다.",
  },
  { id: 2, detail: "주어진 업무를 꼼꼼하게 계획하고 시간 내에 완수합니다." },
  {
    id: 3,
    detail:
      "개발에 있어 기능 구현 후 코드 개선에 신경을 쓰고 있으며, UI/UX를 고려합니다.",
  },
  {
    id: 4,
    detail:
      "긍정적이고 새로운 것을 배우는 것에 두려워하지 않으며, 클라이밍을 사랑하는 개발자입니다.",
  },
  {
    id: 5,
    detail:
      "퍼블리셔로 개발을 시작하고 흥미를 붙여 스스로 공부하여 프론트엔드로 전향했습니다.",
  },
];

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <Nav />

          <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block py-2 xl:inline">끊임없이 배우고 </span>
                <span className="block py-2 text-indigo-700 xl:inline">
                  발전해나가는 이지혜입니다
                </span>
              </h1>
              <div className="items-center justify-center mt-2 sm:mt-16 sm:flex">
                <img
                  src={avatar}
                  className="w-48 h-48 m-auto mb-10 sm:m-0 sm:mb-0"
                  alt="profile"
                />
                <div className="text-left">
                  {contents.map((content: any) => (
                    <p
                      key={content.id}
                      className="flex items-center max-w-md mt-3 text-sm text-gray-900 sm:text-base md:mt-4 md:max-w-3xl"
                    >
                      <HashtagIcon className="w-5 h-5 mr-2" />
                      {content.detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Works />
    </div>
  );
}
