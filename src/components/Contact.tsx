import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 bg-[#f5e6dd]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#8b6f65]">Contact Us</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-[#8b6f65] w-6 h-6" />
            <p>Email: <a href="mailto:ablestairs@gmail.com" className="text-[#8b6f65] font-semibold">ablestairs@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#8b6f65] w-6 h-6" />
            <p>Ph: 09 579 9353 | Mob: 0204 117 8529</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#8b6f65] w-6 h-6" />
            <p>0800 FOR STAIRS (0800 478247)</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#8b6f65] w-6 h-6" />
            <p>7A Mono Place, Mt Wellington, Auckland</p>
          </div>
        </div>
      </div>
    </section>
  );
}