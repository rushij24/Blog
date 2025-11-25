export default function Footer() {
  return (
    <footer className="bg-dark-800 text-gray-300 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-white text-lg mb-4">BlogBoard</h3>
            <p className="text-gray-400 text-sm">
              Kanban-style blogging platform for organizing your thoughts and posts.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-pm-blue-400 transition-colors">Dashboard</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-pm-blue-400 transition-colors">All Posts</a>
              </li>
              <li>
                <a href="/about" className="hover:text-pm-blue-400 transition-colors">About</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-gray-400 text-sm">
              Organize your blog posts with a visual Kanban board.
            </p>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BlogBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
