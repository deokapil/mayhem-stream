import Title from "@/components/Title";
import VideoList from "@/components/VideoList";
import { getVideoList } from "./_actions";

export default async function Home() {
  const videoList = await getVideoList();
  return (
    <main className="flex min-h-screen flex-col">
      <div className="my-2 py-10 md:px-20 px-8">
        <VideoList videoList={videoList.videos} />
      </div>
      <div className="my-20 py-10 md:px-20 px-8"></div>
    </main>
  );
}
