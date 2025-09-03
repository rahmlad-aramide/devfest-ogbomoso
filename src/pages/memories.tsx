import MemoriesPage from "./components/MemoriesPage";

export default function Memories({ data }: any) {
  return <MemoriesPage data={data} />;
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.devfestogbomoso.com";
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
