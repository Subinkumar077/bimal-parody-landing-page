import React from 'react';
import { IMAGES, TEXTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-yellow pt-8 pb-32 px-4 flex flex-col items-center text-center relative overflow-hidden min-h-[600px]">
      <div className="z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">
          <span className="text-brand-dark">{TEXTS.HERO_TITLE_START}</span>{' '}
          <span className="text-white">{TEXTS.HERO_TITLE_HIGHLIGHT}</span>
        </h1>
        <p className="text-brand-dark text-lg md:text-xl font-medium mb-8">
          {TEXTS.HERO_SUBTITLE}
        </p>
      </div>

      <div className="relative z-0 mt-4 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        {/* Person Image */}
        {/* We use a mask or transparency here. Since the provided image in prompt has transparency, 
            we simulate the positioning. It sits at the bottom of the hero, potentially overlapping slightly downwards 
            but the design shows it contained mostly within the yellow, or behind the white card.
            Based on design: The white card starts at the waist of the person. */}
        <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-end">
            <img 
              src={IMAGES.PERSON_HERO} 
              alt="Person" 
              className="h-full object-cover object-top drop-shadow-2xl mask-image-gradient"
              style={{
                // Simple inline style to help if the image isn't perfectly transparent
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;