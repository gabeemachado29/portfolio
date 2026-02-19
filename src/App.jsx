import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* HEADER */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Gabriel Machado França
        </h1>

        <p className="text-slate-300 text-xl">
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>
      </section>

      {/* SOBRE */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4">👨‍💻 Sobre mim</h2>

          <p className="text-slate-300 mb-3">
            Tenho 22 anos e atuo na área de Tecnologia da Informação desde cedo,
            iniciando como Auxiliar de Informática e evoluindo para suporte
            corporativo e desenvolvimento de sistemas.
          </p>

          <p className="text-slate-300">
            Sou formado em Análise e Desenvolvimento de Sistemas e desenvolvo
            projetos próprios focados em soluções reais.
          </p>
        </div>
      </section>

      {/* PROJETO */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
          <h2 className="text-2xl font-semibold mb-4">🚀 Projeto em Destaque</h2>

          <h3 className="text-cyan-400 text-xl font-bold">App Med</h3>

          <p className="text-slate-300 mb-4">
            Sistema de comunicação e gerenciamento entre médicos e pacientes,
            em produção desde 2025 e em fase final de testes.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Flutter","Firebase","Google Cloud","APIs REST"].map((tech) => (
              <span
                key={tech}
                className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
          <h2 className="text-2xl font-semibold mb-6">🧠 Tecnologias</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
            <span>Flutter</span>
            <span>Dart</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>C / C++</span>
            <span>MySQL</span>
            <span>SQLite</span>
            <span>Firebase</span>
            <span>Google Cloud</span>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">

          <h2 className="text-2xl font-semibold mb-6">📫 Contato</h2>

          <div className="flex flex-col gap-3 text-slate-300">

            <a
              href="mailto:gamafran@outlook.com"
              className="hover:text-cyan-400 transition"
            >
              📧 gamafran@outlook.com
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-machadof29"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/gabeemachado29"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              🐙 GitHub
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
