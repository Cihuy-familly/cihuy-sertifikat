"use client";

interface SidebarProps {
  isLoggedIn: boolean;
}

export default function Sidebar({ isLoggedIn }: SidebarProps) {
  return (
    <aside className="w-60 bg-gradient-to-b from-purple-100 to-blue-100 p-4 flex flex-col border-r border-purple-200">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Certifikat Editor
        </h1>
        <p className="text-xs text-purple-500">v 0.0.0</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="block px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/90 font-medium text-purple-900 shadow-sm border border-purple-100 transition-all"
            >
              Dashboard
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <a
                href="/editor"
                className="block px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/90 font-medium text-purple-900 shadow-sm border border-purple-100 transition-all"
              >
                Editor
              </a>
            </li>
          )}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-purple-200">
        <p className="text-xs text-purple-400 text-center">Made with love</p>
      </div>
    </aside>
  );
}
