import Meta from "../../component/Meta";

const SingleNews = ({ newsItem }) => {
  return (
    <div>
      <>
        <Meta title={newsItem.title} keywords={newsItem.title} description={newsItem.body} />
        <main className="container mb-4">
          <div className="row">
            <h1> {newsItem.title}</h1>
            <p> {newsItem.body}</p>
          </div>
        </main>
      </>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + context.params.id);
  const newsItem = await res.json();
  return {
    props: {
      newsItem,
    },
  };
};

export default SingleNews;
