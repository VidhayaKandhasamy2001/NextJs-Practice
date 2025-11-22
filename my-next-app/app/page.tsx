import FetchContent from "@/api/content";
import Text from "@/components/text";


const Home = async() => {
  const HomeData = await FetchContent();
  const Pagetitle = HomeData?.[0].acf?.component_section[0];
  console.log("Page Title", Pagetitle);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Text pageTitle={Pagetitle} />
      </main>
    </div>
  );
}

export default Home;
