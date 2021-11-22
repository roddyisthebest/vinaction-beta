import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h4>Organization - Detail</h4>
    </div>
  );
};

export default Detail;
