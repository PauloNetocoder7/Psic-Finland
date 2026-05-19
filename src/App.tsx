/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Search, Menu, X, Check } from 'lucide-react';

export default function App() {
  const [isCookieVisible, setIsCookieVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] selection:bg-gray-700 selection:text-white">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#1a1a1a] border-b border-white/5 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] tracking-widest uppercase text-gray-400">
          <div className="flex gap-8">
            <a 
              href="https://wa.me/358400929611" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              title="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" size={12} className="w-3 h-3 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.505 0 11.84-5.335 11.842-11.892a11.756 11.756 0 00-3.41-8.399z"/>
              </svg>
              +358 40 0929611
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Kauppakatu+11+C+3krs+33200+Tampere+Finland" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MapPin size={12} /> Kauppakatu 11 C 3krs, 33200 Tampere, Suomi
            </a>
            <a href="mailto:email@test.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={12} /> email@test.com
              <svg width="14" height="10" viewBox="0 0 18 11" className="inline-block rounded-sm">
                <rect width="18" height="11" fill="white"/>
                <rect width="18" height="3" y="4" fill="#003580"/>
                <rect width="3" height="11" x="5" fill="#003580"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="font-serif italic text-xl md:text-3xl text-white tracking-tight">Marjaana Laakso</h1>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white/60">
              <path d="M12 2v20M12 18C7.5 18 4.5 14.5 4.5 10V3M12 18C16.5 18 19.5 14.5 19.5 10V3" />
            </svg>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-widest uppercase">
            {['Etusivu', 'Lähestymistapa', 'Kokemus', 'Palvelut'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ä/g, 'a').replace(/\s+/g, '-')}`}
                className="hover:text-white text-gray-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="p-2 text-gray-400 hover:text-white">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
             <a href="https://wa.me/358400929611" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.505 0 11.84-5.335 11.842-11.892a11.756 11.756 0 00-3.41-8.399z"/>
                </svg>
             </a>
            <button 
              className="p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#1a1a1a] border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-10 flex flex-col gap-8 text-[13px] font-medium tracking-widest uppercase text-center">
                {['Etusivu', 'Lähestymistapa', 'Kokemus', 'Palvelut'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ä/g, 'a').replace(/\s+/g, '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-white text-gray-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
                
                <div className="pt-6 border-t border-white/5 flex flex-col gap-4 text-[10px] text-gray-500 lowercase italic">
                  <p>email@test.com</p>
                  <p>+358 40 0929611</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/images/therapy_room_background_1779104014763.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center px-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white tracking-tight mb-4">Psykoterapia Tampere</h2>
          <div className="h-[2px] w-24 bg-white/30 mx-auto"></div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <main id="etusivu" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-[1fr,400px] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                Psykologipalvelut ja hyvinvointi
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-semibold max-w-2xl">
                Tasapainon ja mielenterveyden edistäminen omistautuneen psykologian harjoittamisen kautta.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p className="italic text-white">
                Emotionaalinen hyvinvointi on avain täyteen ja tyydyttävään elämään.
              </p>
              
              <div className="space-y-4 max-w-2xl text-[16px]">
                <p>
                  Psykologina perussitoumukseni on mielenterveyden hoitaminen ja asiakkaideni auttaminen löytämään polkuja emotionaaliseen tasapainoon ja kokonaisvaltaiseen hyvinvointiin. Uskon, että psykologia on voimakas työkalu muutokseen ja itsetuntemukseen.
                </p>
                
                <p>
                  Tarkan kuuntelun ja eettiseen, hyväksyvään kohtaamiseen perustuvan työskentelyn kautta pyrin luomaan turvallisen ympäristön, jossa jokainen voi tutkia kysymyksiään, kohdata haasteensa ja kehittää sisäisiä voimavarojaan nykyelämän monimutkaisuuden keskellä.
                </p>

                <p>
                  Tavoitteeni on, että terapeuttisen prosessin myötä rakennamme yhdessä selkeyttä, autonomiaa ja henkilökohtaista tyytyväisyyttä, kunnioittaen aina jokaisen asiakkaan ainutlaatuisuutta ja omaa tahtia.
                </p>

                <div className="pt-8 border-t border-white/10">
                  <p>
                    Ota rohkeasti yhteyttä lisätietoja varten tai varataksesi ajan.
                  </p>
                  <p className="mt-2 opacity-70 italic text-sm">
                    Olen käytettävissäsi tukemaan matkaasi itsetuntemukseen ja hyvinvointiin.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-32"
          >
            <div className="aspect-[4/5] relative group">
              <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" 
                alt="Marjaana Laakso - Psychologist" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] p-6 z-20 border border-white/5 flex items-center gap-4">
                <div>
                  <p className="font-serif italic text-white text-xl">Marjaana Laakso</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mt-1">Laillistettu psykologi</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white/30">
                  <path d="M12 2v20M12 18C7.5 18 4.5 14.5 4.5 10V3M12 18C16.5 18 19.5 14.5 19.5 10V3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <section id="lahestymistapa" className="bg-[#1a1a1a] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 italic">Kliininen lähestymistapa</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Kliininen lähestymistapani perustuu aktiiviseen ja inhimilliseen kuunteluun, nojaten aina tieteelliseen näyttöön ja psykologin ammattietiikkaan. Uskon, että jokaisella on ainutlaatuinen elämäntarina, ja roolini on tukea yksilön kasvu- ja muutosprosessia.
              </p>
              <p>
                Vastaanotollani tarjoan täysin luottamuksellisen ja turvallisen tilan, jossa voimme yhdessä ymmärtää tunne- ja käyttäytymismalleja, tavoitteena lievittää kärsimystä ja vahvistaa asiakkaan itsemääräämisoikeutta.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
 
      <section id="kokemus" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-left lg:text-right flex justify-start lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 italic">Tausta ja kokemus</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Minulla on laaja kliininen kokemus ja olen omistanut urani ihmismielen syvälliselle ymmärtämiselle. Vuosien varrella olen saanut tukea satoja ihmisiä heidän matkallaan itsetuntemukseen sekä elämänkriisien, ahdistuneisuuden ja masennuksen voittamisessa.
              </p>
              <p>
                Jatkuva kouluttautumiseni mahdollistaa eri terapeuttisten menetelmien yhdistämisen, jotta voin vastata kunkin apua hakevan yksilöllisiin tarpeisiin ja taata vankan ammatillisen tuen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
 
      <section id="palvelut" className="bg-[#1a1a1a] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 italic text-center">Tarjotut palvelut</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Yksilöpsykoterapia",
                desc: "Henkilökohtaiseen kasvuun keskittyvä tuki, ahdistuksen, masennuksen ja tunneristiriitojen hoito."
              },
              {
                title: "Pariterapia",
                desc: "Ohjattu tila viestinnän, keskinäisen ymmärryksen ja parisuhteen solmukohtien ratkaisemiseksi."
              },
              {
                title: "Verkkovastaanotto",
                desc: "Joustavat ajat ja etävastaanotto täydellisellä tietoturvalla ja luottamuksellisuudella, sijainnistasi riippumatta."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-white/10 hover:border-white/30 transition-all group"
              >
                <h4 className="text-xl text-white font-serif italic mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px] tracking-widest text-gray-500 uppercase">
            © Psykoterapia Tampere {new Date().getFullYear()}
          </p>
          <div className="flex gap-8 text-[12px] tracking-widest text-gray-500 uppercase">
            <a href="#" className="hover:text-white transition-colors">Tietosuojaseloste</a>
            <a href="#" className="hover:text-white transition-colors">Käyttöehdot</a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {isCookieVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-6 pointer-events-none"
          >
            <div className="max-w-xl mx-auto bg-white text-black p-6 rounded-sm shadow-2xl flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
              <p className="text-sm leading-relaxed flex-1">
                Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseksi ja liikenteen analysoimiseksi. Käyttämällä sivustoa hyväksyt evästeiden käytön.
              </p>
              <button
                onClick={() => setIsCookieVisible(false)}
                className="px-8 py-3 bg-[#121212] text-white text-[12px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                Selvä
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

