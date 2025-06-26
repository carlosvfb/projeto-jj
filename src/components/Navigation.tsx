import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-purple-500/20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            JJ Portfólio
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-purple-400 transition-colors">Início</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#achievements" className="hover:text-purple-400 transition-colors">Conquistas</a>
            <a href="#timeline" className="hover:text-purple-400 transition-colors">Trajetória</a>
            <a href="#gallery" className="hover:text-purple-400 transition-colors">Galeria</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-purple-400 p-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 transition-all">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white border-l border-purple-500/20 shadow-lg">
                <div className="flex flex-col space-y-6 mt-10 text-center font-medium text-lg">
                  <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Início</a>
                  <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Sobre</a>
                  <a href="#achievements" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Conquistas</a>
                  <a href="#timeline" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Trajetória</a>
                  <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Galeria</a>
                  <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-400 transition-colors">Contato</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}