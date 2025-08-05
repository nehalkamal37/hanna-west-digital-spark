import heroBackground from '../assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 fade-in-up">
            Smart Software.
            <span className="block text-accent-foreground">Smarter Solutions.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
            Custom Software & Virtual Assistant Consulting to Power Your Business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={scrollToContact}
              className="btn-hero-primary group"
            >
              Request a Consultation
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button 
              onClick={scrollToServices}
              className="btn-hero-secondary group"
            >
              Get a Quote
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
            <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;