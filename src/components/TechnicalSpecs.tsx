import React from 'react';

export function TechnicalSpecs() {
  return (
    <section className="py-16 bg-[#8b6f65] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Stairs (Interior)</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1597713419435-c73d93c36d5c?auto=format&fit=crop&q=80"
            alt="Stair detail"
            className="rounded-lg shadow-xl"
          />
          <div className="space-y-6">
            <p className="text-lg">Screwed, glued, and assembled using our TreadLock® system for greater rigidity and strength.</p>
            <ul className="space-y-4 text-lg">
              <li>• 35 mm Pine Stringers</li>
              <li>• 21 mm Plywood Risers</li>
              <li>• 21 mm Plywood Treads</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}