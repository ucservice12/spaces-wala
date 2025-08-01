import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';

const HeroSection = () => {
  return (
    <>
      {/*  Mobile Only */}
      <div className="block lg:hidden">
        <HeroMobile />
      </div>

      {/*  Desktop Only */}
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </>
  );
};

export default HeroSection;

