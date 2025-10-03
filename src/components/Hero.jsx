import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <StarBackground />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div style={{ paddingTop: "100px" }}>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight neon"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Intergalactic Gaming.
            <span className="block text-neonPink">On-Chain Collectibles.</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-white/80 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore the 11th dimension—race across cosmic lanes, defeat asteroids,
            and collect limited-edition NFTs minted on the Abstract blockchain.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="http://game.11dimensiongame.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-neonPink/20 border border-neonPink hover:bg-neonPink/30 shadow-glow"
            >
              Play Game
            </a>
            <Link to="about" smooth duration={700} offset={-70}>
              <button className="px-6 py-3 rounded-full bg-neonCyan/20 border border-neonCyan hover:bg-neonCyan/30 shadow-glow">
                About the Game
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          {/* Spaceship-ish glowing orb */}
          <div className="aspect-square w-full max-w-md mx-auto rounded-full bg-gradient-to-br from-neonCyan/30 to-neonPink/30 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Spaceship image */}
            <img
              src={`${import.meta.env.BASE_URL}images/spaceship.png`}
              alt="Spaceship"
              className="w-80 h-80 object-contain z-10"
              style={{ position: "absolute" }}
            />
            <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-white/30 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
