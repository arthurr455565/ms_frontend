import { Outlet, Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Student Management System</h1>
        <Link to={"/dashboard"} className = "bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition duration-200">
        Dashboard
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
