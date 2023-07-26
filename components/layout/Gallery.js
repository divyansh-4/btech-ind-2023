import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery from '../../styles/Gallery.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery() {
  const imagesSet1 = [
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zhua9YAp_0JgHZB6vf5zjgqwAKiwK_gjhwRINMuVNSVlqG14nhAaBf4T0z_v0jeja_xz1t3PGM_Q64ot7lqKBkEBl3yA=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wKypr0BIWrUERF7ODZi-q2pE_ij6w4W4-LiikmH4iK3LCxFDR-93695L9dUlc0Q3g0DO-pgMYBAxL_LQqThUMQf6vX3A=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zL8_f_SIK4eS1Xwp9t5e5B_an_hBXQzuAB0EextIDDaOHaQTQt7HjuDAt9nK3Wk0fwKZmWk30uWnRPTwdcFjnVQnH9=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xTLggQcdloIXk74hsF7JR957I6ev0EI8gbqhO9h9caEba7WoKeY5wkSeiebnnDb2eyzggkjrBzJQWDsNCUXiDHJt8r=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yiSMyiNB8j2e5MX0cJHcvva9uGgs8Gc9T-zpsP7j-GiDM8IomMQAU-nXfYrdJeiExw_x0W9Sxslh4bUJnwbydDwh5t=w1920-h901',
  ];
  const imagesSet2 = [
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wM9Z8QcMLmAm0_6iNcGDJCwgNPq_cLE91dIcfJK0dBIYMEZsGpfTFlsDv2zZ8YX12fI7Rc5-pgURj1TaS4a1kcJ6qh=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-y0pLdF9fiKuwU4hFth3ukrExoBKyEJdXGx1Ke-sm62mA_s9oizJDvk0uQKYi40NjNjpSdlEDOTeUa8XaiV9jssTEYkJA=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zCTInQBChaf-unaiUF1gPPedC77Ec_7_zMiM7F_FZnZxq1GmgW38ELC4Ut_aMgXelLXdpY0GBgRofEXim25BaE9pS7=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xQIdUm4P7ziwNTMm-sRhfu_GG6L5mahQS7umeiIplip_lW8ghCC60hRKfpMpMDsDqlbanmFNw3QcWRG0gRgEJ5OPHKHQ=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zmTCXEWusfyRDwN8ix2caThntlESeFvrHPc4iQFu-nG3Bm7MZDJQ7KpFIRu_qe76-v34TcdLJXbqapQ_JAhJuEZiMcKA=w1920-h901',
  ];
  const imagesSet3 = [
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zKDEIsZTpj8DaAwkWQptq7p4GE0ZNN93JwpnRQyzjbiqcsaqNMoIe6ovR4B7y-b7stN5p8NfCygMMdFBp69dElJ1bmhQ=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xTpZ_QGKioLnM4gOvzkQjSDqe469i633wFajUpLT5mdUxfjH8v7OfWWNt52UV4ErkIpC9x4n6V1a81zs_6YQsFryvbIg=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wf9cT13ON-YO38M8HLSazVPBGRIicwMUnZmFYTPNtD_j8crFZssBzIuPaFyqYlFciO6O1IsgrV0w85LeShZrmlNFQf=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xCwOGTWfG2wrV4-ThGjIM3Dg2zPSPEB-D0xk24Jr_aJ4wXA-ed5zvMVweojiXn91z8mEHVYBMz6tYXB9OKvhD8jXwM=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-z9xtSOqt8mvpefeWpBDwHZO8WXZTXz98zJm97ZH0YA92ZdQkiDK1tkAIA7nQOabDnrXLBmHfxy3MiVvqGR-3KKdwQU9Q=w1920-h901',
  ];
  const imagesSet4 = [
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zpt72Ja_RtKllVYO2n5pzb0PHK1TPxkd3LaCr-61P6_pSBt80DJNlPwUiTV94qvJwRufuQNYPxLLq5PNmDW3cY6llc_Q=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-x7aaidXm8lRR3C8E3F7anpvXQUi2C3u2PTnFLJj58ANqzfF8sd1Za0ViLtT84QZH7aEk_bX5vXGF4QiqDCSd_lVdUN=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wip1UWF9lEdlxdX1uKrFgVVTCri8nPGH31i4mRIqP0xYMKxS38IqgfYHoRtwjC44yPydRuShB9imrkb30WN5y-f29ytg=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xCwOGTWfG2wrV4-ThGjIM3Dg2zPSPEB-D0xk24Jr_aJ4wXA-ed5zvMVweojiXn91z8mEHVYBMz6tYXB9OKvhD8jXwM=w1920-h901',
    'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-z9xtSOqt8mvpefeWpBDwHZO8WXZTXz98zJm97ZH0YA92ZdQkiDK1tkAIA7nQOabDnrXLBmHfxy3MiVvqGR-3KKdwQU9Q=w1920-h901',
  ];

  const startIndex = 0;
  const endIndex = imagesSet1.length;

  return (
    <div className='flex flex-col p-12'>
      <div className='flex flex-col justify-center items-center p-12'>
        <div className='uppercase bg-amber-400 rounded-[40px] text-center sm:rounded-[10rem] border-2 border-black w-11/12 sm:w-[55%] lg:w-[50%] p-2 sm:p-4'>
          <p
            className='text-neutral-800 text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter uppercase m-0'
            style={{
              textShadow: '0 6px 8px rgba(0,0,0,0.25)',
            }}
          >
            gallery
          </p>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className={gallery.gallerycontainer}>
            {imagesSet1.slice(startIndex, endIndex).map((imageUrl, index) => (
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
            {imagesSet2.slice(startIndex, endIndex).map((imageUrl, index) => (
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
            {imagesSet3.slice(startIndex, endIndex).map((imageUrl, index) => (
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
            {imagesSet4.slice(startIndex, endIndex).map((imageUrl, index) => (
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
