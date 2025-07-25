import SearchBar from '@/components/search/SearchBar';
import {
  TypographyP,
  TypographyH1,
  TypographyH4,
  TypographyMuted
} from '../../custom/Typography';

const backgroundImage =
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg';

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Preload Background Image */}
      <img
        src={backgroundImage}
        alt="preload background"
        className="hidden"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full sm:mt-0 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32 flex flex-col items-start justify-center">
          <div className="w-full lg:max-w-2xl space-y-6 sm:space-y-8">
            <TypographyH1 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
              Find Your Perfect Home with spaceswala
            </TypographyH1>

            <TypographyP className="text-white text-base sm:text-lg">
              Discover properties for buying, renting, or selling across India. Your dream home is just a search away.
            </TypographyP>

            <SearchBar className="mt-4 w-full" />

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {[
                { number: '15K+', label: 'Properties Listed' },
                { number: '10K+', label: 'Happy Customers' },
                { number: '500+', label: 'Cities Covered' },
                { number: '250+', label: 'Home Work' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 space-y-1 sm:space-y-2 rounded-lg text-white min-w-[120px] sm:min-w-[140px] text-center"
                >
                  <TypographyH4 className="text-xl sm:text-2xl">{item.number}</TypographyH4>
                  <TypographyMuted className="text-accent">{item.label}</TypographyMuted>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
