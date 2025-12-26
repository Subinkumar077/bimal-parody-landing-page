import React from 'react';
import { TEXTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-red text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">
          bimal
        </div>
        <p className="text-sm md:text-base opacity-90 max-w-xl leading-relaxed">
          {TEXTS.FOOTER_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
};

export default Footer;