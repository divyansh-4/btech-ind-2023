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

  return (
    <div className='flex flex-col gap-10 justify-center items-center p-12'>
      <div className='uppercase bg-amber-400 rounded-[40px] text-center sm:rounded-[10rem] border-2 border-black w-[60%] sm:w-[55%] lg:w-[50%] p-4 '>
        <p
          className='text-neutral-800 text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter uppercase'
          style={{
            textShadow: '0 6px 8px rgba(0,0,0,0.25)',
          }}
        >
          gallery
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className={gallery.gallerycontainer}>
            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
              <div key={imageUrl} className='rounded-lg overflow-hidden'>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={gallery.gallerycontainer}>
            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
              <div key={imageUrl} className='rounded-lg overflow-hidden '>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className='w-full h-full object-cover '
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={gallery.gallerycontainer}>
            {images.slice(startIndex, endIndex).map((imageUrl, index) => (
              <div key={imageUrl} className='rounded-lg overflow-hidden '>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className='w-full h-full object-cover '
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
