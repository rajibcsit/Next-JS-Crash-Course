import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1> Dynamic page works id is- {id}</h1>
    </div>
  );
};

export default BlogDetails;
