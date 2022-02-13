import Layout from "../components/Layout";

const label = [
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "react.js" },
  { id: 5, name: "GraphQL" },
  { id: 6, name: "TypeScript" },
  { id: 7, name: "AJAX" },
  { id: 8, name: "jQuery" },
  { id: 9, name: "Github" },
];

export default function AboutMe() {
  return (
    <Layout>
      <h2 id="aboutMe" className="mb-10 text-3xl font-bold">
        ABOUT ME
      </h2>
      <h3 className="mb-3 font-medium text-gray-600">📚 EDUCATION</h3>
      <div className="mb-8">
        <span className="bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
          2019
        </span>
        <span className="ml-2">그린컴퓨터학원 퍼블리셔 과정 수료</span>
      </div>
      <h3 className="mb-3 font-medium text-gray-600">🖥 CAREER</h3>
      <div className="mb-8">
        <div className="mb-2">
          <span className="bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
            2020.12~2021.8
          </span>
          <span className="ml-2">해래 개발팀 프론트엔드</span>
        </div>
        <div>
          <span className=" bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
            2019.10~2020.12
          </span>
          <span className="ml-2">셀파소프트 기술연구소 퍼블리셔</span>
        </div>
      </div>
      <h3 className="mb-2 font-medium text-gray-600">👩🏻‍💻 SKILL</h3>
      <div className="mb-8">
        {label.map((item: any) => (
          <span
            key={item.id}
            className="mr-2 bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1"
          >
            {item.name}
          </span>
        ))}
      </div>
      <h3 className="mb-2 font-medium text-gray-600">✉️  CONTACT</h3>
      <div className="p-1.5">
        <span className="mr-2 ">이메일 | jihye_340@naver.com</span>
      </div>
      <div className="p-1.5">
        <span className="mr-2 ">
          깃허브 |{" "}
          <a
            href="https://github.com/dev-jihye"
            className="p-1 bg-indigo-200 rounded-md cursor-pointer"
          >
            https://github.com/dev-jihye
          </a>
        </span>
      </div>
      <div className="p-1.5">
        <span className="mr-2 ">
          블로그 |{" "}
          <a
            href="https://jihye-dev.tistory.com"
            className="p-1 bg-indigo-200 rounded-md cursor-pointer"
          >
            https://jihye-dev.tistory.com
          </a>
        </span>
      </div>
    </Layout>
  );
}
