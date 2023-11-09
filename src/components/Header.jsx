import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="max-w-4xl my-2 text-lg mx-auto flex flex-col items-center  lg:flex-row lg:justify-around lg:my-10 lg:items-center bg-blue-800 px-4 py-3 rounded-lg font-bold">
        <div>
          <Link to="/">
            Search<span className="text-amber-600 font-extrabold">Life</span>
          </Link>
        </div>
        <div className="space-x-10">
          <Link to="/statistics">Statistics</Link>
          <Link to="/apply-job">Apply job</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div>
          <button className="bg-green-950 text-yellow-100 px-4 py-2 rounded-lg">
            Start Apply
          </button>
        </div>
      </nav>
    </header>
  );
}
