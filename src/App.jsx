import React, { useEffect, useState } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/gabeemachado29/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className={dark
      ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      : "min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900"
    }>

      {/* TOGGLE */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-white shadow"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">

        <img
          src="https://avatars.githubusercontent.com/gabeemachado29"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400"
        />

        <h1 className="text-5xl font-bold mb-2">
          Gabriel Machado França
        </h1>

        <p className="opacity-80">
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>

        <p className="opacity-70 text-sm mt-2">
          📅 29/01/2004 • 📞 (41) 99101-1256
        </p>

        <a
          href="/cv.pdf"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 rounded-xl shadow hover:scale-105 transition"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* SOBRE */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

          <h2 className="text-2xl font-semibold mb-4">
            👨‍💻 Sobre mim
          </h2>

          <p className="opacity-80 mb-3">
            Profissional de Tecnologia da Informação com experiência em suporte
            técnico, infraestrutura e desenvolvimento de sistemas.
          </p>

          <p className="opacity-80">
            Atuo também com projetos próprios, com foco em soluções reais,
            integração de sistemas e aplicações mobile.
          </p>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          🧭 Experiência Profissional
        </h2>

        <div className="space-y-6 border-l-2 border-cyan-400 pl-6">

          <div>
            <h3 className="font-bold text-cyan-400">
              Colégio Adventista de Paranaguá
            </h3>
            <p className="opacity-80 text-sm">
              Auxiliar de TI • 2022 — 2024
            </p>
            <p className="opacity-70 text-sm">
              Manutenção de computadores, suporte a usuários,
              edição de vídeos e gestão de mídias sociais.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-cyan-400">
              Faiston / Klabin
            </h3>
            <p className="opacity-80 text-sm">
              Técnico de Informática • Atual
            </p>
          </div>

        </div>

      </section>

      {/* PROJETO */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

          <h2 className="text-2xl font-semibold mb-4">
            🚀 Projeto em Destaque
          </h2>

          <h3 className="text-cyan-400 font-bold">
            App Med
          </h3>

          <p className="opacity-80 text-sm">
            Plataforma de prontuário digital pessoal com histórico de consultas,
            armazenamento de exames e comunicação direta entre paciente e médico.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          🧠 Competências
        </h2>

        <div className="grid md:grid-cols-3 gap-4 opacity-80">

          <span>Microsoft Office</span>
          <span>C / Java / PHP</span>
          <span>Flutter / Dart</span>
          <span>HTML / CSS</span>
          <span>Firebase</span>
          <span>JavaScript / Python</span>

        </div>

      </section>

      {/* GITHUB */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📂 Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {repos.slice(0,6).map(repo => (

            <div
              key={repo.id}
              className="p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-cyan-400 font-bold">
                {repo.name}
              </h3>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-sm hover:underline"
              >
                Ver repositório →
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section className="text-center pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📫 Contato
        </h2>

        <p>📧 gamafran@outlook.com</p>

        <p>
          💼 LinkedIn • 🐙 GitHub
        </p>

      </section>

    </div>
  );
}
