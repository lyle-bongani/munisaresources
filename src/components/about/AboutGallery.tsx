import React from 'react';

const galleryImages = [
  {
    src: process.env.PUBLIC_URL + '/images/gallary/gallery pic 1.png',
    alt: 'Gallery 1',
  },
  {
    src: process.env.PUBLIC_URL + '/images/gallary/gallery pic 2.png',
    alt: 'Gallery 2',
  },
  {
    src: process.env.PUBLIC_URL + '/images/gallary/biggallery pic 3.png',
    alt: 'Gallery 3',
  },
];

const AboutGallery: React.FC = () => (
  <section className="w-full bg-white py-8 px-2 md:px-8">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff7900] mb-6 mt-2">Our Company Gallery</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-6">
        <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="rounded-xl w-full h-[220px] md:h-[230px] object-cover shadow-md" />
        <img src={galleryImages[2].src} alt={galleryImages[2].alt} className="rounded-xl w-full h-[220px] md:h-[230px] object-cover shadow-md" />
      </div>
      <div className="flex flex-col gap-6 justify-between">
        <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="rounded-xl w-full h-[460px] md:h-[466px] object-cover shadow-md" />
      </div>
    </div>
  </section>
);

export default AboutGallery;
