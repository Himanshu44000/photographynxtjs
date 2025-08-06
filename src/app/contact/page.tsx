"use client";
import { Vortex } from "@/components/ui/vortex";

function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="fixed inset-0 z-0 h-screen w-screen"
      >
        <div className="relative mt-32 z-10 w-full max-w-lg mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Contact Our Studio
            </h1>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Ready to capture your vision? Get in touch with our photography experts.
            </p>
          </div>

          <form className="space-y-4 bg-white/10 backdrop-blur-lg text-white p-6 rounded-xl shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1 text-neutral-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1 text-neutral-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-xs font-medium mb-1 text-neutral-200">
                Photography Interest
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200"
                required
              >
                <option value="" className="bg-gray-800">Select your interest</option>
                <option value="portrait" className="bg-gray-800">Portrait Photography</option>
                <option value="landscape" className="bg-gray-800">Landscape Photography</option>
                <option value="street" className="bg-gray-800">Street Photography</option>
                <option value="wildlife" className="bg-gray-800">Wildlife Photography</option>
                <option value="commercial" className="bg-gray-800">Commercial Photography</option>
                <option value="wedding" className="bg-gray-800">Wedding Photography</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1 text-neutral-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your photography goals..."
                className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold px-4 py-3 rounded-lg hover:from-cyan-600 hover:to-emerald-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-sm"
            >
              Start Your Photography Journey
            </button>

            <div className="text-center mt-4">
              <p className="text-xs text-neutral-400">
                Or email us at{" "}
                <a href="mailto:hello@photographyacademy.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  hello@photographyacademy.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </Vortex>
    </div>
  );
}

export default Page;