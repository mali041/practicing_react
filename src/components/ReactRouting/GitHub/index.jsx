import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  // IF we don't use loader in Route then we use this
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mali041")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <h1 className="text-4xl text-center m-4 font-bold text-white mb-4">
      Github followers: {data?.followers}
      <img src={data?.avatar_url} alt="Git -Image" width={300} />
    </h1>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mali041");
  return response.json();
};
