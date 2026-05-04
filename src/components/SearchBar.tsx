"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./searchBar.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch() {
    if (!search.trim()) return;
    router.push(`/search?q=${search}`);
  }

  return (
    <input
      type="text"
      placeholder="Pesquisar jogo..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      className="search-input"
    />
  );
}
