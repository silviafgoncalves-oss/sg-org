import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 bg-amber-50/40 relative overflow-hidden select-none"
      style={{
        // Caso queira usar a sua imagem real como fundo total, descomente a linha abaixo e substitua o URL:
        // backgroundImage: "url('https://drive.google.com/file/d/19dr4hmuZr1upNKbK35v2Hgbpi-Y5TTXd/view?usp=drive_link')", backgroundSize: 'cover', backgroundPosition: 'center'
      }}
    >
      {/* Efeito Visual de Xadrez Suave (Gingham) no fundo usando CSS */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(197, 160, 119, 0.2) 50%, transparent 50%),
            linear-gradient(rgba(197, 160, 119, 0.2) 50%, transparent 50%)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Padrão de mini flores decorativas abstratas em segundo plano */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#c5a077_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Cartão Central Elegante (Painel Moldurado) */}
      <div className="relative max-w-xl w-full bg-[#fdfbf7] rounded-[40px] shadow-[0_12px_40px_rgba(197,160,119,0.15)] border border-[#ebdccb] p-8 md:p-14 text-center border-double outline outline-1 outline-offset-[-12px] outline-[#ebdccb]/60 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_16px_50px_rgba(197,160,119,0.25)]">
        
        {/* Elemento Decorativo Superior do Painel */}
        <div className="absolute top-4 text-[#c5a077] text-xs opacity-60">❖ ❖ ❖</div>

        {/* Monograma / Logótipo Central */}
        <div className="mb-6 relative w-36 h-36 flex items-center justify-center border-4 border-double border-[#c5a077]/60 rounded-full bg-[#fbf8f3] shadow-inner">
          {/* Se tiver a imagem recortada do monograma "SG", substitua a tag abaixo por uma <img src="..." /> */}
          <span className="font-serif text-4xl text-[#9c784e] tracking-tight italic font-bold">
            SG
          </span>
          {/* Ramos decorativos circulares em CSS em redor do texto */}
          <div className="absolute inset-2 border border-dashed border-[#c5a077]/40 rounded-full pointer-events-none" />
        </div>

        {/* Divisor Elegante Superior */}
        <div className="flex items-center justify-center gap-2 mb-6 w-full max-w-[160px]">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-[#c5a077] flex-1" />
          <span className="text-[#c5a077] text-xs">𓇚</span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-[#c5a077] flex-1" />
        </div>

        {/* Frase Principal Inspiraçonal */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#5c4630] font-normal leading-snug tracking-wide max-w-md mx-auto drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          Escreve a vida que queres viver
        </h1>

        {/* Divisor Elegante Inferior */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-8 w-full max-w-[160px]">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-[#c5a077] flex-1" />
          <span className="text-[#c5a077] text-xs">𓇚</span>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-[#c5a077] flex-1" />
        </div>

        {/* Botão de Entrada Interativo (Adicionado para usabilidade da app) */}
        <button 
          onClick={() => alert('Bem-vindo!')} 
          className="px-8 py-3 bg-[#9c784e] hover:bg-[#85633d] text-[#fdfbf7] font-serif tracking-wider text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Entrar no Diário
        </button>

        {/* Elemento Decorativo Inferior do Painel */}
        <div className="absolute bottom-4 text-[#c5a077] text-xs opacity-60">❖ ❖ ❖</div>
      </div>
    </div>
  );
};

export default LandingPage
