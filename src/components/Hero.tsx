const startDate = new Date(2024, 3);
const today = new Date();
const diffInMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
const years = Math.floor(diffInMonths / 12);
const months = diffInMonths % 12;
const formattedTime = `${years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : ''}${years > 0 && months > 0 ? ' e ' : ''}${months > 0 ? `${months} mês${months > 1 ? 'es' : ''}` : ''}`;

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-6">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 mb-6 shadow-2xl shadow-purple-500/25">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <img 
                src="/perfil.png" 
                alt="Perfil" 
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-pink-400 bg-clip-text text-transparent">
          YASMIN NATIELE
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Aluna dedicada de Jiu-Jitsu desde abril de 2024 ({formattedTime})
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            💪 Esforçada e persistente
          </span>
          <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            🥋 Em constante evolução
          </span>
        </div>
      </div>
    </section>
  );
}
