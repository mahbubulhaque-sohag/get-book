/* eslint-disable react/prop-types */

const Card = ({title, author, image, price}) => {
  
    return (
        <div className='w-40 h-80 border my-10'>
           <img className="w-40 h-48" src={image} alt=""/>
           <div className="mx-2">
           <h3 className="text-base font-bold line-clamp-2">{title}</h3>
           {
           title.length <= 20 && 
           <div style={{ height: '1.5rem' }}></div>
           }
           <h4 className="text-sm font-bold line-clamp-2">{author}</h4>
           {
           title.length <= 20 && 
           <div style={{ height: '1.5rem' }}></div>
           }
           <p className="text-xs">price: ${price}</p>
           </div>
        </div>
    );
};

export default Card;