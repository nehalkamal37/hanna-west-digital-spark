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
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Professional business technology background"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-6 fade-in-up"
          >
            Smart Software.
            <span className="block text-white mt-2">Smarter Solutions.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            Custom Software & Virtual Assistant Consulting to Power Your Business Forward
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center fade-in-up" 
            style={{ animationDelay: '0.4s' }}
            role="group"
            aria-label="Main call-to-action buttons"
          >
            <button 
              onClick={scrollToContact}
              className="btn-hero-primary group focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full sm:w-auto"
              aria-label="Request a consultation - Navigate to contact section"
            >
              Request a Consultation
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </button>
            <button 
              onClick={scrollToServices}
              className="btn-hero-secondary group focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full sm:w-auto"
              aria-label="Get a quote - Navigate to services section"
            >
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up hidden md:block" 
            style={{ animationDelay: '0.6s' }}
            role="button"
            tabIndex={0}
            aria-label="Scroll down to explore content"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
            <p className="text-white/70 text-sm mt-2 font-medium">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;