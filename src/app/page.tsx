import SearchBar from "@/components/searchbar/SearchBar";
import Background from "@/components/background/BackgroundEffects";
import "@/app/css/home.css";

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen bg-[#2b2b2b] flex items-center justify-center text-white px-4">

        <Background />

        <div className="z-10 flex flex-col items-center gap-6">

          <div className="search-container">
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
              Qual o Jogo de Hoje?
            </h1>

            <SearchBar />
          </div>


        </div>
      </main>
    </div>
  );
}
