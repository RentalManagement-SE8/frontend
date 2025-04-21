import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-10 py-20 min-h-screen bg-gradient-to-tr from-cyan-800 to-green-700">

      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Manage Rentals <br />& Services with Ease
        </h1>
        <p className="text-lg mb-6">Simplify the way you connect with customers and manage assets.</p>
        <div className="flex items-center gap-4">
          <span className="text-sm">No credit card required.</span>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        {/* <img src="" alt="Mockup" className="rounded-lg shadow-lg"/> */}
      </div>
    </section>
  );
};

export default Hero;