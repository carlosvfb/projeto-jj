import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = Array(6).fill("/api/placeholder/400/300");

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Galeria
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Galeria ${idx + 1}`} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Imagem ampliada" className="max-w-full max-h-full object-contain rounded-xl" />
          </div>
        )}
      </div>
    </section>
  );
}
