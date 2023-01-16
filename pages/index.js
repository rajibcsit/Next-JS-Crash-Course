import Image from "next/image";
import Link from "next/link";
import Meta from "../component/Meta";
import bodyImage from "../public/banner.png";

const Home = ({ newsList }) => {
  return (
    <>
      <main className="container mt-4">
        <div className="row">
          {newsList.map((news) => (
            <div className="col-mb-4 mb-5" key={news.id}>
              <h3>{news.title}</h3>
              <p>{news.body}</p>
              <div>
                <Image src={bodyImage} alt="Picture of the body" />
              </div>
              <Link className="btn btn-success" href="/news/[id]" as={"/news/"}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  const newsList = await res.json();
  return {
    props: {
      newsList,
    },
  };
};
export default Home;
