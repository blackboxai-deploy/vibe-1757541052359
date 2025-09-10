export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl">
          Welcome to your beautiful Hello World application
        </p>
        
        <div className="space-y-3 text-gray-600">
          <p className="text-lg">Built with Next.js, TypeScript & Tailwind CSS</p>
          <div className="flex justify-center space-x-2 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React 19</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">Next.js 15</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">TypeScript</span>
          </div>
        </div>
        
        <div className="pt-6">
          <div className="inline-block p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <p className="text-gray-800 font-medium">
              🎉 Your app is ready to go!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Start building something amazing
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}