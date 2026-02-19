import React, { useEffect, useState } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/gabeemachado29/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  const techs = ["all","flutter","php","javascript","python"];

  const filteredRepos =
    filter === "all"
      ? repos
      : repos.filter(r =>
          (r.language || "").toLowerCase().includes(filter)
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

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
          Full Stack Developer • Analista de Sistemas • Técnico de TI
        </p>

        <a
          href="/cv.pdf"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 rounded-xl"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* SKILLS COM ÍCONES */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          🧠 Tecnologias
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {[
            ["🐦","Flutter"],
            ["🎯","Dart"],
            ["🐘","PHP"],
            ["⚡","JavaScript"],
            ["🐍","Python"],
            ["☕","Java"],
            ["💾","MySQL"],
            ["🔥","Firebase"]
          ].map(skill => (

            <div
              key={skill[1]}
              className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700"
            >
              <div className="text-2xl">{skill[0]}</div>
              <div>{skill[1]}</div>
            </div>

          ))}

        </div>

      </section>

      {/* FILTRO */}
      <section className="max-w-5xl mx-auto px-6 mb-10">

        <h2 className="text-2xl font-semibold mb-4">
          🔎 Filtrar Projetos
        </h2>

        <div className="flex gap-3 flex-wrap">

          {techs.map(t => (

            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-4 py-2 bg-cyan-500 rounded-xl text-sm"
            >
              {t.toUpperCase()}
            </button>

          ))}

        </div>

      </section>

      {/* PROJETOS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="grid md:grid-cols-2 gap-6">

          {filteredRepos.slice(0,8).map(repo => (

            <div
              key={repo.id}
              onClick={() => setSelectedRepo(repo)}
              className="bg-slate-800 p-5 rounded-xl cursor-pointer hover:scale-105 transition"
            >

              {/* SCREENSHOT AUTOMÁTICO */}
              <img
                src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
                className="rounded mb-3"
              />

              <h3 className="text-cyan-400 font-bold">
                {repo.name}
              </h3>

              <p className="text-sm opacity-70">
                {repo.language}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* MODAL */}
      {selectedRepo && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">

          <div className="bg-slate-900 p-6 rounded-xl max-w-lg w-full">

            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              {selectedRepo.name}
            </h3>

            <p className="opacity-80 mb-4">
              {selectedRepo.description || "Sem descrição"}
            </p>

            {/* PREVIEW DEPLOY */}
            <a
              href={`https://${selectedRepo.name}.vercel.app`}
              target="_blank"
              className="text-green-400 block mb-2"
            >
              🌐 Preview Deploy
            </a>

            <a
              href={selectedRepo.html_url}
              target="_blank"
              className="text-cyan-400"
            >
              GitHub →
            </a>

            <button
              onClick={() => setSelectedRepo(null)}
              className="mt-6 px-4 py-2 bg-red-500 rounded"
            >
              Fechar
            </button>

          </div>

        </div>

      )}

      {/* BLOG */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📝 Blog Técnico
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title:"Como publiquei meu App Flutter",
              date:"2025",
            },
            {
              title:"Integração Firebase + PHP",
              date:"2025",
            }
          ].map(post => (

            <div className="bg-slate-800 p-5 rounded-xl">
              <h3 className="text-cyan-400 font-bold">
                {post.title}
              </h3>
              <p className="text-sm opacity-70">
                {post.date}
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* DASHBOARD ADMIN SIMPLES */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          ⚙️ Admin Portfolio
        </h2>

        <div className="bg-slate-800 p-6 rounded-xl text-sm opacity-80">

          Edite conteúdos pelo arquivo:

          <div className="mt-3 bg-black p-3 rounded">
            /src/data/portfolio.json
          </div>

          Você pode alterar textos, projetos e blog sem mexer no código.

        </div>

      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5541991011256"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl shadow-lg"
      >
        💬
      </a>

    </div>
  );
}
