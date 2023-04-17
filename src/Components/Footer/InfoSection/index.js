import './style.css';

const InfoSection = ({content}) => {
    return (
    <div className="info-section">
        <div className='info-section-text'>
            <p>{content}</p>
        </div>
    </div>
    );
  };

export default InfoSection;
  