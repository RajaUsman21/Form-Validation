import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Home Page</h1>
      <nav className="mt-4">
        <ul className="flex">
          <li className="mr-4">
            <Link to="/signup" className="px-4 py-2 bg-blue-200 text-gray-800 rounded">
              Signup
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/login" className="px-4 py-2 bg-blue-200 text-gray-800 rounded">
              Login
            </Link>
          </li>
          <li>
            <Link to="/products" className="px-4 py-2 bg-blue-200 text-gray-800 rounded">
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
