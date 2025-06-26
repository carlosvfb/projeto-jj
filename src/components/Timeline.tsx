const events = [
  { year: "2025", title: "Primeira Medalha no OPEN FALL", description: "Ouro na competição como faixa laranja e preto" },
  { year: "2024", title: "Início no Jiu-Jitsu", description: "Primeira aula de Jiu-Jitsu aos 12 anos" }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Minha Trajetória
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/10">
                    <div className="text-purple-400 font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10 shadow-lg mt-3"></div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
