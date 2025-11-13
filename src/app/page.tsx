export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Growth<span className="text-yellow-400">Drive</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Services', 'Case Studies', 'Results', 'About'].map((item) => (
                <a key={item} href={`#${item}`} className="text-white hover:text-yellow-400 transition">
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Get Proposal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Drive <span className="text-yellow-400">Revenue</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Performance marketing that delivers <strong>real ROI</strong> - not just vanity metrics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
              🚀 Get Free Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
              📈 See Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}