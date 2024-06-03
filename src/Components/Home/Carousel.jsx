
const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VbjbqygOV7koEhNAsuh56cRkOaQyOGgk4g&s" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4_Cm9h3iJXXzBTSReSmIkb1KazXjg72puQ&s" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmp9TXQMwM7nBGQgrTR6EngfsSXx385Hyi-w&s" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWLxMqEMsu-Rr03Hzm8hIxIXm-U-NehhhsA&s" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Carousel;