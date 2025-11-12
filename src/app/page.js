import HomeContent from "./components/HomeContent";

export const host = process.env.HOST;

export default async function Home() {
  let data = { lectins: [] };
  try {
    data = await fetch(`${host}/lectins`, { cache: "force-cache" }).then(
      (res) => res.json()
    );
  } catch (except) {
    console.log(except);
  }
  const lectins = data.lectins;

  return (
    <>
      <HomeContent lectins={lectins} />
      {/* TODO: reactive */}
      <div className="flex w-full h-full md:hidden justify-center items-center">
        <p className="center font-medium">Please open on a larger screen</p>
      </div>
    </>
  );
}
