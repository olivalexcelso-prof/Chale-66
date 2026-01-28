
import React, { useState, useEffect, useRef } from 'react';
import { 
  Trees, 
  Heart, 
  Coffee, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Quote
} from 'lucide-react';
import GoldenParticles from './components/GoldenParticles';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => observer.observe(section));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const Logo = () => (
    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
      <div className="relative">
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-oldWood">
          <path d="M10 80 L50 20 L90 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 80 L45 65 L55 65 L55 80" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="60" y="75" className="font-hand font-bold text-2xl fill-sunYellow">66</text>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-xl leading-none text-darkGreen">Chalé 66</span>
        <span className="font-hand text-sm text-oldWood leading-tight">Refúgios com Alma</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-sunYellow/30">
      <GoldenParticles />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-warmCreme/90 backdrop-blur-md py-4 shadow-sm' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-12">
            {['Momentos', 'Receita', 'Jardim'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xs font-bold uppercase tracking-[0.2em] text-darkGreen/60 hover:text-oldWood transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contato')}
              className="bg-oldWood text-warmCreme px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-darkGreen transition-all shadow-lg shadow-oldWood/10"
            >
              Envie uma carta
            </button>
          </div>
          <button className="md:hidden text-darkGreen" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449156001437-3a16d1daae39?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 sepia-[0.3]"
            alt="Warm cabin interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warmCreme/80 via-transparent to-warmCreme"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 animate-fadeIn">
          <span className="font-hand text-3xl text-oldWood mb-6 block">Entre. Tire os sapatos.</span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold text-darkGreen mb-8 leading-tight tracking-tighter">
            Um lar para <br/> 
            <span className="italic text-oldWood underline decoration-sunYellow/50 underline-offset-8">respirar.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-darkGreen/70 font-light mb-12 italic">
            Esta não é apenas uma página de investimentos. É o convite para o seu refúgio particular nas montanhas capixabas.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={() => scrollTo('receita')} className="bg-sunYellow text-darkGreen px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl">
              Comece Sua História
            </button>
            <div className="flex items-center gap-3 text-oldWood font-hand text-xl">
              <span>ou sinta o clima</span>
              <ChevronDown className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Moments */}
      <section id="momentos" className="py-32 bg-warmCreme">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 fade-in-section">
            <h2 className="text-5xl font-serif font-bold text-darkGreen mb-4">Paredes que guardam memórias</h2>
            <p className="font-hand text-2xl text-oldWood">Cada família pinta seu chalé com momentos únicos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800", cap: "Onde as ideias nascem" },
              { img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800", cap: "Onde as histórias descansam" },
              { img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", cap: "Onde a magia é construída" }
            ].map((item, i) => (
              <div key={i} className={`fade-in-section group`}>
                <div className="bg-white p-4 pb-12 shadow-xl transform transition-transform group-hover:rotate-1 hand-drawn-border organic-shadow">
                  <div className="overflow-hidden aspect-[4/5] mb-6">
                    <img src={item.img} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" alt={item.cap} />
                  </div>
                  <p className="font-hand text-2xl text-darkGreen text-center">{item.cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - The Kitchen (Process) */}
      <section id="receita" className="py-32 bg-sand/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in-section">
              <span className="font-hand text-3xl text-oldWood mb-4 block">A Cozinha da Criação</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-darkGreen mb-8">Receita para histórias <br/> que alimentam a alma.</h2>
              <p className="text-lg text-darkGreen/60 mb-12 leading-relaxed italic">
                Não construímos apenas chalés. Cultivamos o ambiente perfeito para o que realmente importa.
              </p>
              
              <div className="space-y-8">
                {[
                  { t: "Escolha seus ingredientes", d: "Terrenos selecionados onde o sol bate primeiro e a neblina descansa por último.", icon: <Sparkles className="text-sunYellow" /> },
                  { t: "Misture com carinho", d: "Arquitetura A-frame que respeita a inclinação da alma e da montanha.", icon: <Heart className="text-smilePink" /> },
                  { t: "Deixe assar na memória", d: "Detalhes em madeira que absorvem o som do riso e o calor do café.", icon: <Coffee className="text-oldWood" /> }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-darkGreen mb-1">{step.t}</h4>
                      <p className="text-darkGreen/50 font-light">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-section relative">
               <div className="bg-white p-8 organic-shadow hand-drawn-border rotate-2 relative z-10">
                  <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1000" className="w-full h-auto rounded-lg" alt="Cabin atmosphere" />
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-sunYellow flex items-center justify-center font-bold">10</div>
                    <p className="font-hand text-xl">Minutos do centro, um mundo de distância.</p>
                  </div>
               </div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sunYellow/20 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - The Garden (Plans) */}
      <section id="jardim" className="py-32 bg-warmCreme">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-20 fade-in-section">
            <h2 className="text-5xl font-serif font-bold text-darkGreen mb-4">O Jardim de Oportunidades</h2>
            <p className="font-hand text-2xl text-oldWood">Plante sua semente e veja seu refúgio crescer.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
             {[
               { t: "A Muda", p: "R$ 166k", d: "Plano de entrada para investidores que buscam rentabilidade com o charme A-frame.", color: "bg-growthGreen/10", tag: "Foco: Rentabilidade" },
               { t: "Árvore Frutífera", p: "R$ 288k", d: "O equilíbrio perfeito entre refúgio próprio e alto rendimento em locações premium.", color: "bg-sunYellow/10", tag: "Mais Popular" },
               { t: "Floresta Particular", p: "Sob Consulta", d: "Unidade exclusiva com 100m², deck expandido e vista infinita para o vale.", color: "bg-oldWood/10", tag: "Exclusividade" }
             ].map((plan, i) => (
               <div key={i} className={`fade-in-section p-10 rounded-[2.5rem] ${plan.color} text-left transition-all hover:-translate-y-2 relative overflow-hidden group border border-darkGreen/5`}>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/40 mb-4 block">{plan.tag}</span>
                 <h3 className="text-3xl font-serif font-bold text-darkGreen mb-4">{plan.t}</h3>
                 <p className="text-darkGreen/60 mb-10 font-light leading-relaxed">{plan.d}</p>
                 <div className="mb-12">
                   <span className="text-4xl font-serif font-bold text-darkGreen">{plan.p}</span>
                 </div>
                 <button onClick={() => scrollTo('contato')} className="w-full py-5 rounded-full bg-white text-darkGreen font-bold uppercase tracking-widest text-[10px] shadow-sm hover:shadow-xl transition-all flex items-center justify-center gap-2">
                   Plantar Esta Ideia <ArrowRight size={14} />
                 </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Living Room */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <Quote size={60} className="mx-auto text-sunYellow/50 mb-12" />
            <h3 className="text-4xl font-serif italic text-darkGreen mb-12">
              "Aqui não é apenas sobre o retorno financeiro. É sobre o retorno de energia. Todo final de semana que passamos no nosso 66 voltamos pessoas melhores."
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-warmCreme">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Author" />
              </div>
              <p className="font-bold text-darkGreen uppercase tracking-widest text-xs">Clara & Roberto</p>
              <p className="font-hand text-xl text-oldWood">Convidados desde 2023</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-96 h-96">
            <path d="M10 80 L50 20 L90 80" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Contact - The Exit Door */}
      <section id="contato" className="py-32 bg-darkGreen text-warmCreme relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="fade-in-section">
              <span className="font-hand text-4xl text-sunYellow mb-6 block">Leve um pedaço deste lar com você.</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">Vamos construir <br/>sua nova história?</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-warmCreme/20 flex items-center justify-center">
                    <Phone size={20} className="text-sunYellow" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-warmCreme/40">Envie uma carta digital</p>
                    <p className="text-xl font-serif">(27) 99937-8100</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-warmCreme/20 flex items-center justify-center">
                    <MapPin size={20} className="text-sunYellow" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-warmCreme/40">Nossa localização</p>
                    <p className="text-xl font-serif">Domingos Martins, Espírito Santo</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                 <Instagram className="hover:text-sunYellow cursor-pointer transition-colors" />
                 <Linkedin className="hover:text-sunYellow cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="fade-in-section">
              <form className="bg-white p-12 rounded-[3rem] text-darkGreen shadow-2xl space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Sua carta foi enviada com carinho! Responderemos em breve.'); }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/40">Como devemos te chamar?</label>
                  <input required type="text" className="w-full bg-transparent border-b-2 border-warmCreme py-4 font-serif text-2xl focus:border-sunYellow outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/40">Seu WhatsApp</label>
                  <input required type="tel" className="w-full bg-transparent border-b-2 border-warmCreme py-4 font-serif text-2xl focus:border-sunYellow outline-none transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/40">Qual história quer contar?</label>
                  <select className="w-full bg-transparent border-b-2 border-warmCreme py-4 font-serif text-xl focus:border-sunYellow outline-none transition-colors cursor-pointer">
                    <option>Quero investir em rentabilidade</option>
                    <option>Quero meu refúgio particular</option>
                    <option>Quero saber mais sobre o projeto</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-oldWood text-warmCreme py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-darkGreen transition-all shadow-xl shadow-oldWood/20">
                  Enviar Mensagem
                </button>
                <p className="text-center font-hand text-xl text-darkGreen/40">Prometemos cuidar bem dos seus dados.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGreen py-20 text-warmCreme/20 border-t border-warmCreme/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8 mb-12">
            <Logo />
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
              <span className="hover:text-warmCreme cursor-pointer transition-colors">Privacidade</span>
              <span className="hover:text-warmCreme cursor-pointer transition-colors">Termos de Uso</span>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]">© 2024 Chalé 66 — Uma marca do Grupo Refúgios de Luxo</p>
          <div className="mt-12 opacity-50 flex justify-center gap-2">
             <span className="w-1 h-1 bg-warmCreme rounded-full"></span>
             <span className="w-1 h-1 bg-warmCreme rounded-full"></span>
             <span className="w-1 h-1 bg-warmCreme rounded-full"></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
