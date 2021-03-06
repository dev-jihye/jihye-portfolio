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
      <h3 className="mb-3 font-medium text-gray-600">π EDUCATION</h3>
      <div className="mb-8">
        <span className="bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
          2019
        </span>
        <span className="ml-2">κ·Έλ¦°μ»΄ν¨ν°νμ νΌλΈλ¦¬μ κ³Όμ  μλ£</span>
      </div>
      <h3 className="mb-3 font-medium text-gray-600">π₯ CAREER</h3>
      <div className="mb-8">
        <div className="mb-2">
          <span className="bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
            2020.12~2021.8
          </span>
          <span className="ml-2">ν΄λ κ°λ°ν νλ‘ νΈμλ</span>
        </div>
        <div>
          <span className=" bg-[#e1e1e1] text-[#0066ff] rounded-md px-2 py-1 text-sm">
            2019.10~2020.12
          </span>
          <span className="ml-2">μνμννΈ κΈ°μ μ°κ΅¬μ νΌλΈλ¦¬μ</span>
        </div>
      </div>
      <h3 className="mb-2 font-medium text-gray-600">π©π»βπ» SKILL</h3>
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
      <h3 className="mb-2 font-medium text-gray-600">βοΈΒ  CONTACT</h3>
      <div className="p-1.5">
        <span className="mr-2 ">μ΄λ©μΌ | jihye_340@naver.com</span>
      </div>
      <div className="p-1.5">
        <span className="mr-2 ">
          κΉνλΈ |{" "}
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
          λΈλ‘κ·Έ |{" "}
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
