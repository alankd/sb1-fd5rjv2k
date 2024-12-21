import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#8b6f65]">Why Choose Our Services?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#8b6f65] w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                <p className="text-gray-600">Professional consultation for your stair needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#8b6f65] w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Design Solutions</h3>
                <p className="text-gray-600">Custom designs tailored to your space</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#8b6f65] w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Problem Solving Expertise</h3>
                <p className="text-gray-600">Creative solutions for challenging spaces</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#8b6f65] w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">23 Years Experience</h3>
                <p className="text-gray-600">Trusted expertise in stair construction</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&q=80"
              alt="Modern staircase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}