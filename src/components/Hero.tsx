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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Better Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Professional business technology background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-8 leading-tight"
          >
            Smart Software.
            <br />
            <span className="text-white">Smarter Solutions.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium" 
          >
            Transform your business with custom software development and expert virtual assistant consulting services
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto" 
            role="group"
            aria-label="Main call-to-action buttons"
          >
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-primary font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-white/95 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Request a consultation - Navigate to contact section"
            >
              Request Consultation
            </button>
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="View our services - Navigate to services section"
            >
              View Services
            </button>
          </div>

          {/* Key Points */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" role="img" aria-label="Software">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Software</h3>
              <p className="text-white/80 text-sm">Tailored solutions for your business needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" role="img" aria-label="Assistant">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">VA Consulting</h3>
              <p className="text-white/80 text-sm">Expert virtual assistant integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" role="img" aria-label="Growth">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Growth</h3>
              <p className="text-white/80 text-sm">Scalable solutions that grow with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;