const achievements = [
    { title: "Troca de faixa | laranja com preto", month: "Fevereiro", year: "2024", category: "Juvenil Feminino", medal: "🥋" },
  { title: "Campeã do OPEN FALL", month: "Mail", year: "2024", category: "Juvenil Feminino", medal: "🥇" }
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Principais Conquistas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex flex-col items-center text-center justify-between"
            >
              <div className="text-4xl mb-4">{item.medal}</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">{item.title}</h3>
              <p className="text-gray-300 mb-1">{item.month} - {item.year}</p>
              <p className="text-gray-400 text-sm">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
