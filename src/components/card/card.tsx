"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./card.css"

export default function Card() {
    return (
        <section>
            <div className="plataform-card">
                <h1>Steam</h1>
            </div>

            <div className="card">
                <h1>Jogo exemplo</h1>

                <p>aqui vem uma imagem</p>

                <p>Aqui vem uma breve descrição</p>

                <p>R$25,00</p>

                <button>Ver Detalhes</button>
            </div>
        </section>

    );
}