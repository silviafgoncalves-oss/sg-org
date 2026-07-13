import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckSquare, BookOpen, User, ArrowRight } from 'lucide-react';

export default function Index() {
  // Simulação rápida do estado atual do utilizador (Premium/Elegante)
  const currentFormatDate = new Date().toLocaleDateString('pt-PT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#2C2A29] font-sans antialiased flex flex-col justify-between overflow-x-hidden selection:bg-[#EAE3D2]">
      {/* Imagem de Fundo Subtil / Textura de Papel Premium */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/background.png')" }} 
      />

      {/* Header Minimalista */}
      <header className="relative z-10 w-full max-w-md mx-auto px-6 pt-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {/* Monograma Obrigatório */}
          <img src="/assets/monogram.svg" alt="SG" className="w-8 h-8" />
          <span className="text-xs tracking-[0.2em] uppercase font-light text-[#7C7267]">
            SG-Org
          </span>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-2 text-[#7C7267] hover:text-[#2C2A29] transition-colors"
        >
          <User size={20} strokeWidth={1.5} />
        </motion.button>
      </header>

      {/* Conteúdo Principal (Mobile-First) */}
      <main className="relative z-10 flex-1 w-full max-w-md mx-auto px-8 flex flex-col justify-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-2 mb-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#A39788] font-medium">
            {currentFormatDate}
          </p>
          <h1 className="text-3xl font-serif font-normal tracking-tight text-[#1A1918] leading-tight">
            A sua história,<br />organizada ao detalhe.
          </h1>
          <div className="w-12 h-[1px] bg-[#D4CBB5] mt-4" />
        </motion.div>

        {/* Atalhos Rápidos da Agenda Física */}
        <div className="space-y-4">
          {[
            { name: 'Calendário', icon: Calendar, desc: 'O seu tempo com espaço' },
            { name: 'Tarefas', icon: CheckSquare, desc: 'Foco no essencial' },
            { name: 'Notas', icon: BookOpen, desc: 'Pensamentos livres' },
          ].map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01, x: 4 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-between p-5 rounded-xl bg-white/60 border border-[#EAE3D2] backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(212,203,181,0.2)] hover:bg-white transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-[#F7F4EB] text-[#7C7267] group-hover:bg-[#EAE3D2] group-hover:text-[#2C2A29] transition-colors">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#2C2A29]">{item.name}</h3>
                  <p className="text-xs text-[#A39788] font-light mt-0.5">{item.desc}</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-[#D4CBB5] group-hover:text-[#7C7267] transition-colors" strokeWidth={1.5} />
            </motion.button>
          ))}
        </div>
      </main>

      {/* Footer / Assinatura Elegante */}
      <footer className="relative z-10 w-full max-w-md mx-auto px-6 pb-8 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[10px] tracking-widest text-[#B5AFA4] uppercase font-light"
        >
          Agenda Premium Digital
        </motion.p>
      </footer>
    </div>
  );
}
