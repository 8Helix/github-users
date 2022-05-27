import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import CardBody from './CardBody';
import './Card.modules.css';

function Card({ user }) {
  return (
    <div className="card">
      <CardBody user={user} />
      <div className="button mr">
        <Link to={`/${ROUTES.USER.replace(':name', `${user.login}`)}`}>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
