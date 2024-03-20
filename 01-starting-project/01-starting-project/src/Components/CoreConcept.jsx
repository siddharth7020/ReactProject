import './CoreConcept.css';
import '../data.js';

export default function CoreComponent({image , title , description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </li>
    );
  }