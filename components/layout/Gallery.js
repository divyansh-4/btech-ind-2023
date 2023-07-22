import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery from '../../styles/Gallery.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
    const images = [
        'https://w0.peakpx.com/wallpaper/280/517/HD-wallpaper-blue-aesthetic-new-york-city-buildings-sky-background-blue-aesthetic.jpg',
        'https://c4.wallpaperflare.com/wallpaper/297/288/1009/5bd320d590bcf-wallpaper-preview.jpg', 
        'https://img.freepik.com/premium-photo/zhangjiajie-mountains-china_163782-2974.jpg?w=740',
        'https://c4.wallpaperflare.com/wallpaper/581/611/779/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg', 
        'https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg',
      ];
        
    const startIndex = 0;
    const endIndex = images.length;
    const galleryBackground = '/gallery-bg.png';
  
    return (
            <div className="bg-[#DF392E] bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${galleryBackground})` }}>
            <div className="justify-center items-center p-12">
                <Carousel>
                    <Carousel.Item>
                        <div className={gallery.gallerycontainer}>
                            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
                                <div key={index} className="rounded-lg overflow-hidden">
                                    <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover " />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={gallery.gallerycontainer}>
                            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
                                <div key={index} className="rounded-lg overflow-hidden ">
                                    <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover " />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={gallery.gallerycontainer}>
                            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
                                <div key={index} className="rounded-lg overflow-hidden ">
                                    <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full object-cover " />
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Gallery;