function getExperienceDuration(): string {
  const startDate = new Date("2024-04-01");
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (today.getDate() < startDate.getDate()) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearLabel = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : "";
  const monthLabel = months > 0 ? `${months} mês${months > 1 ? 'es' : ''}` : "";

  return [yearLabel, monthLabel].filter(Boolean).join(" e ");
}

export default function About() {
  const experience = getExperienceDuration();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Comecei no Jiu-Jitsu em abril de 2024, movida pela vontade de aprender, evoluir e superar meus próprios limites. Mesmo sendo iniciante, me dedico ao máximo em cada treino.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Em apenas {experience} de prática, já vivenciei transformações físicas, mentais e emocionais. O Jiu-Jitsu se tornou uma paixão e um caminho de autoconhecimento.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">{experience}</div>
                <div className="text-gray-400">de Jiu-Jitsu</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-gray-400">Dedicação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 shadow-2xl shadow-purple-500/25">
              <img 
                src="/FotoAbout.webp" 
                alt="Treinando" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}