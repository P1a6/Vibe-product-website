// src/pages/Features.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/navbar';

const features = [
  {
    title:  "The widget",
    subtitle: "Designed to be Minimal",
    heading: "Staying in touch shouldn't involve always open your open. You can see what's happen from our widget",
    
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
  },
  {
    title: "Photo Rewinds",
    subtitle: "Designed for you",
    heading: "A spotify wrapped for your photos?! Weekly.Monthly.Yearly.Vibey",
    
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
  },
  {
    title: "GC Challenges",
    subtitle: "Design for your real ones",
    heading: "Being active by without always texting on the group",
    
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
  }
];

function FeatureContent({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex">
      {/* Left Content - 60% */}
      <motion.div 
        className="w-[60%] p-12 md:p-20 flex flex-col justify-between relative"
        style={{ opacity }}
      >
        <div className="flex justify-between gap-12">
          <motion.div style={{ y: textY }} className="max-w-md">
            <span className="text-[#ff6b35] font-bold text-s tracking-widest">{feature.subtitle}</span>
            <h3 className="text-2xl md:text-3xl text-white/90 font-light mt-4 leading-relaxed">
              {feature.heading}
            </h3>
          </motion.div>
        </div>

        <motion.h2 
          className="text-7xl md:text-9xl font-bold text-white"
          style={{ y: textY }}
        >
          {feature.title}
        </motion.h2>

        <span className="absolute bottom-8 right-8 text-white/30 font-extrabold text-4xl">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Right Image - 40% */}
      <motion.div 
        className="w-[40%] relative overflow-hidden"
        style={{ opacity }}
      >
        <motion.img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover "
          style={{ y: imageY }}
        />
      </motion.div>
    </section>
  );
}

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0a0a] via-[#4a1510] via-40% to-[#d45520] relative overflow-hidden">
      <Navbar />
      <div className="pt-20">
        {features.map((feature, index) => (
          <FeatureContent key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}
