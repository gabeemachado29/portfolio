import React, { useEffect, useState } from "react";

export default function App() {

  const [text, setText] = useState("");
  const fullText =
    "Desenvolvedor Full Stack • Analista de Sistemas • Especialista em Soluções Reais";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 40);
  }, []);

  return (
    <div className="bg-slate-900 text-white font-sans overflow-x-hidden">

      {/* FUNDO PARTÍCULAS */}
      <div className="fixed inset-0 -z-10">

        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}

      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <img
          src="https://avatars.githubusercontent.com/gabeemachado29"
          className="w-44 h-44 rounded-full border-4 border-cyan-400 mb-6 shadow-lg animate-bounce"
        />

        <h1 className="text-6xl font-bold mb-4">
          Gabriel Machado França
        </h1>

        <p className="text-cyan-400 text-xl h-8">
          {text}
        </p>

        <a
          href="/cv.pdf"
          className="mt-8 px-8 py-3 bg-cyan-500 rounded-xl shadow hover:scale-110 transition"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* SOBRE */}
      <section className="min-h-screen flex items-center px-6">

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">

          <h2 className="text-3xl font-bold mb-6">
            👨‍💻 Sobre mim
          </h2>

          <p className="opacity-80 mb-4">
            Profissional de Tecnologia da Informação com experiência em suporte
            corporativo, infraestrutura, redes e desenvolvimento de sistemas web
            e mobile.
          </p>

          <p className="opacity-80 mb-4">
            Iniciei minha trajetória como Auxiliar de Informática no Colégio
            Adventista de Paranaguá e hoje atuo como Técnico de Informática pela
            Faiston, prestando serviços para a Klabin.
          </p>

          <p className="opacity-80">
            Paralelamente desenvolvo soluções próprias focadas em problemas reais,
            integração cloud e aplicativos multiplataforma.
          </p>

        </div>

      </section>

      {/* APP MED DESTAQUE */}
      <section className="min-h-screen flex items-center px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur p-8 rounded-2xl border border-cyan-400/20">

          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            🚀 App Med
          </h2>

          <p className="opacity-80 mb-4">
            O App Med é uma plataforma de prontuário digital pessoal desenvolvida
            para centralizar e organizar informações clínicas de pacientes.
          </p>

          <p className="opacity-80 mb-4">
            O sistema permite registrar histórico de consultas, armazenar exames,
            receitas médicas e acompanhar a evolução do tratamento de forma
            contínua e acessível.
          </p>

          <p className="opacity-80 mb-4">
            Conta também com comunicação direta entre médico e paciente,
            facilitando orientações, diagnósticos e acompanhamento remoto.
          </p>

          <p className="opacity-80">
            Desenvolvido com foco em mobilidade e cloud, o App Med utiliza
            integração com banco de dados em nuvem e APIs para garantir acesso
            rápido, seguro e centralizado às informações de saúde.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section className="min-h-screen flex items-center px-6">

        <div className="max-w-5xl mx-auto w-full">

          <h2 className="text-3xl font-bold mb-10 text-center">
            🧠 Tecnologias
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              ["🐦","Flutter"],
              ["🎯","Dart"],
              ["🐘","PHP"],
              ["⚡","JavaScript"],
              ["🐍","Python"],
              ["☕","Java"],
              ["🔥","Firebase"],
              ["💾","MySQL"]
            ].map(skill => (

              <div
                key={skill[1]}
                className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:scale-110 transition"
              >
                <div className="text-3xl mb-2">
                  {skill[0]}
                </div>
                {skill[1]}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">

        <h2 className="text-3xl font-bold mb-6">
          📫 Contato
        </h2>

        <p className="mb-2">
          📧 gamafran@outlook.com
        </p>

        <a
          href="https://wa.me/5541991011256"
          className="bg-green-500 px-8 py-3 rounded-xl mt-4 hover:scale-110 transition"
        >
          WhatsApp
        </a>

      </section>

    </div>
  );
}
