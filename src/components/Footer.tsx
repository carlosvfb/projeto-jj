export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-purple-500/20 text-gray-400 py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="text-sm">
          © {new Date().getFullYear()} JJ Portfolio. Todos os direitos reservados.
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
