"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BorderAnimation = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
        style={{
          filter: "blur(4px)",
          opacity: isHovered ? 1 : 0.3, // Reduced opacity when not hovered
          transition: "opacity 0.3s ease",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"
        initial={false}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          opacity: isHovered ? 1 : 0.3, // Reduced opacity when not hovered
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
};

export const Features = () => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <motion.section
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="text-5xl font-medium text-center tracking-tighter"
          variants={itemVariants}
        >
          Elevate your SEO efforts
        </motion.h2>
        <motion.p
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5"
          variants={itemVariants}
        >
          From small startups to large enterprises, our AI-driven tools have
          revolutionized the way businesses approach SEO.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col lg:flex-row gap-3"
          variants={containerVariants}
        >
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.title}
              className="relative flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredTab(index)}
              onHoverEnd={() => setHoveredTab(null)}
            >
              <BorderAnimation isHovered={hoveredTab === index} />
              <div className="absolute inset-[1px] bg-black rounded-xl z-10" />
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center relative z-20">
                <DotLottiePlayer
                  src={tab.icon}
                  className="h-5 w-5"
                  autoplay
                  loop
                />
              </div>
              <div className="font-medium relative z-20">{tab.title}</div>
              {tab.isNew && (
                <motion.div
                  className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold relative z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                  }}
                >
                  new
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="border border-white/20 p-2.5 rounded-xl mt-3"
          variants={itemVariants}
        >
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
