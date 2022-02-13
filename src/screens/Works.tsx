import Layout from "../components/Layout";

const yflLists = [
  "섬유 제품 주문생산 사이트로 자사의 제품과 서비스를 소개하는 웹 어플리케이션 개발",
  "laravel, livewire, tailwind, vanilla js, php MVC 개발 패턴에 능숙",
  "rest api를 활용하여 개발",
  "웹 / 모바일 / 패드 반응형 웹 개발",
];

const haeraeLists = [
  "회사의 인적, 물적 자원의 정보를 온라인으로 관리하는 Web ERP",
  "버그리포트를 받아 유지, 보수, 개선",
];

export default function Works() {
  return (
    <Layout>
      <h2 id="works" className="mb-10 text-3xl font-bold">
        WORKS
      </h2>
      <div className="pb-6 sm:flex sm:pb-20">
        <div className="pb-4 mr-10 w-80">
          <h3 className="text-xl font-bold sm:text-2xl">
            해래 your-fashion-label
          </h3>
          <a
            href="https://www.your-fashion-label.com/"
            className="text-sm text-gray-500"
          >
            https://www.your-fashion-label.com/
          </a>
        </div>
        <div>
          <ul>
            {yflLists.map((list) => (
              <li key={list} className="mb-3">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-6 sm:flex sm:pb-20">
        <div className="pb-4 mr-10 w-80">
          <h3 className="text-xl font-bold sm:text-2xl">해래 haerae.space</h3>
        </div>
        <div>
          <ul>
            {haeraeLists.map((list) => (
              <li key={list} className="mb-3">
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
