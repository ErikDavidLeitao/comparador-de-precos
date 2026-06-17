import SearchBar from "@/components/searchbar/SearchBar";
import Background from "@/components/background/BackgroundEffects";
import Card from "@/components/card/card";
import "@/app/css/home.css";


export default function Home() {
  return (
    <div>
      <main className="home-main">

        <Background />

        <div className="home-content">

          <div className="search-container">
            <h1 className="home-title">
              Qual o Jogo de Hoje?
            </h1>

            <SearchBar />
          </div>

          <Card />


        </div>
      </main>
    </div>
  );
}
