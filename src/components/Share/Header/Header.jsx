import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between bg-dark-01 text-white px-4 py-12 items-center">
        <div>
          <h1 className="font-bold text-5xl">Secret Chef</h1>
        </div>
        <div>
          <ul className="flex gap-8 font-medium items-center">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">
                <button className="bg-white text-black px-4 py-2 rounded">
                  Login
                </button>
              </a>
              <div>
                <img src="" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;