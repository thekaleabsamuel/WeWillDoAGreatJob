import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">wewilldoagreatjob.com</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">we did a great job (portfolio)</Link>
          </li>
          <li>
            <Link to="/team">team</Link>
          </li>
          <li>
            <Link to="/intersect">Intersect</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;