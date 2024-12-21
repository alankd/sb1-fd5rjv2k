import React from 'react';
import { Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-5xl">
            <Mail className="text-[#8b6f65] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <p>
              Email your plans to{' '}
              <a href="mailto:ablestairs@gmail.com" className="text-[#8b6f65] font-semibold hover:underline">
                ablestairs@gmail.com
              </a>
              {' '}to receive a quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}