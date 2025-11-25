export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pm-card-light p-8 md:p-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            About BlogBoard
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Welcome to BlogBoard, a Kanban-style blogging platform that helps you organize 
              your blog posts visually with a Jira-inspired design.
            </p>
            
            <h2 className="font-display font-bold text-2xl text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-6">
              We believe that visual organization makes content creation and management more intuitive. 
              BlogBoard brings the power of Kanban boards to blogging, allowing you to organize posts 
              by status: Ideas, Drafts, Published, and Archive.
            </p>
            
            <h2 className="font-display font-bold text-2xl text-white mt-8 mb-4">
              Features
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Kanban-style board organization</li>
              <li>Visual post status tracking</li>
              <li>Search and filter capabilities</li>
              <li>Dark theme with PM tool aesthetics</li>
              <li>Markdown-based blog posts</li>
              <li>Professional project management design</li>
            </ul>
            
            <h2 className="font-display font-bold text-2xl text-white mt-8 mb-4">
              Get Started
            </h2>
            <p className="text-gray-300">
              Start organizing your blog posts on the <a href="/" className="text-pm-blue-400 hover:underline">dashboard</a> or 
              browse all posts in <a href="/blog" className="text-pm-blue-400 hover:underline">list view</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
