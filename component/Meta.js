import Head from "next/head";

const Meta = ({ title, keywords, discription }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="discription" content={discription} />
      </Head>
    </div>
  );
};
Meta.defaultProps = {
  title: "Art of CSE",
  keywords: "SPIRIT OF INNOVATION",
  discription: "Start learning with Art of CSE",
};

export default Meta;
