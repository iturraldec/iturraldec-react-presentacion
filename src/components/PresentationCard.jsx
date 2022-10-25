import imageAvatar from '../assets/th-1282637484.jpg';
import '../css/PresentationCard.css';

function PresentetatioCard() {
  let name = 'Carlos';

  return (
    <div className="presentation-card">
      <img src={imageAvatar} alt="mi foto" className='avatar' />
      <h1>hola...{name}</h1>
    </div>
  );
};

export default PresentetatioCard;