import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-[75px] text-center">
        <h1 className="text-2xl mt-10">Welcome to KDLabs</h1>
      </main>
      <Footer />
    </div>
  );
}
