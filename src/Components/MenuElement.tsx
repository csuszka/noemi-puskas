import './MenuElement.css';
import defaultThumbnail from '../img/iconmonstr-cursor-7.svg';
import { Link } from 'react-router-dom';

type Props = {
  menuURL: string | null,
  menuImageURL: string | null,
  menuImageAlt: string | null,
  MenuText: string | null
}

function MenuElement ({ menuURL, menuImageURL, menuImageAlt, MenuText }: Props) {
  return (
    <Link to={menuURL ? menuURL : '/'}>
      <div className="menu-element">
        <p>
          <h2><img src={menuImageURL ? menuImageURL : defaultThumbnail} alt={menuImageAlt ? menuImageAlt : "Menu"} /> {MenuText}</h2>
        </p>
      </div>
    </Link>
  );
}

export default MenuElement;