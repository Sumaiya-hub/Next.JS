// components/sidebar.tsx
import { Contact, Home, Settings, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-5 space-y-6">
      <div className="text-2xl font-bold">MyApp</div>
      <nav className="flex flex-col space-y-4">
        <Link href="/" className="flex items-center space-x-2 hover:text-gray-300">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/About" className="flex items-center space-x-2 hover:text-gray-300">
          <User size={20} />
          <span>About</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-2 hover:text-gray-300">
          <Contact size={20} />
          <span>Contact</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
