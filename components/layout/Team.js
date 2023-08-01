import Card from '../TeamCards';
import FlipCard from '../TeamFlipcard';
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import ReactCardFlip from 'react-card-flip';
import "react-multi-carousel/lib/styles.css";

const Team = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setIsFlipped((prevState) => !prevState);
    };
    
    const [isFlipped1, setIsFlipped1] = useState(false);

    const handleClick1 = (e) => {
      e.preventDefault();
      setIsFlipped1((prevState) => !prevState);
    };

    const [isFlipped2, setIsFlipped2] = useState(false);

    const handleClick2 = (e) => {
      e.preventDefault();
      setIsFlipped2((prevState) => !prevState);
    };

    const [isFlipped3, setIsFlipped3] = useState(false);

    const handleClick3 = (e) => {
      e.preventDefault();
      setIsFlipped3((prevState) => !prevState);
    };

    const [isFlipped4, setIsFlipped4] = useState(false);

    const handleClick4 = (e) => {
      e.preventDefault();
      setIsFlipped4((prevState) => !prevState);
    };

    const [isFlipped5, setIsFlipped5] = useState(false);

    const handleClick5 = (e) => {
      e.preventDefault();
      setIsFlipped5((prevState) => !prevState);
    };

    const [isFlipped6, setIsFlipped6] = useState(false);

    const handleClick6 = (e) => {
      e.preventDefault();
      setIsFlipped6((prevState) => !prevState);
    };

    const [isFlipped7, setIsFlipped7] = useState(false);

    const handleClick7 = (e) => {
      e.preventDefault();
      setIsFlipped7((prevState) => !prevState);
    };

    const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    };

    return (
        <div className='justify-center items-center'
        style={{
            paddingBottom: '10rem',
        }}>
        <div className='flex flex-col justify-center items-center w-full my-8 sm:my-16 h-fit'>
        <div className='uppercase bg-[#39B66D] rounded-[40px] text-center sm:rounded-[10rem] border-2 border-black w-3/5 sm:w-[55%] lg:w-[60%] p-2 sm:p-4 my-14 z-[10]'>
            <p
                className='text-neutral-800 text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] tracking-tighter uppercase m-0 py-3'
                style={{
                textShadow: '0 6px 8px rgba(0,0,0,0.25)',
                }}
                >
                meet the crew
            </p>
        </div>
        </div>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            slidesToSlide={1}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
                <button onClick={handleClick}>
                <FlipCard teamName={<>Design<br />Team </>} bg={'bg-[#277FE6]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick}>
                <Card bg={'bg-[#277FE6]'} teamName="Design Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical">
            <div>
                <button onClick={handleClick1}>
                <FlipCard teamName={<>Web Dev<br />Team </>} bg={'bg-[#39B66D]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick1}>
                <Card bg={'bg-[#39B66D]'} teamName="Web Dev Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
            <div>
                <button onClick={handleClick2}>
                <FlipCard teamName={<>App Dev<br />Team </>} bg={'bg-[#E44F44]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick2}>
                <Card bg={'bg-[#E44F44]'} teamName="App Dev Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
            <div>
                <button onClick={handleClick3}>
                <FlipCard teamName={<>Operation<br />Team </>} bg={'bg-[#4D2885]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick3}>
                <Card bg={'bg-[#4D2885]'} teamName="Operation Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
            <div>
                <button onClick={handleClick4}>
                <FlipCard teamName={<>Content<br />Team </>} bg={'bg-[#277FE6]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick4}>
                <Card bg={'bg-[#277FE6]'} teamName="Content Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
            <div>
                <button onClick={handleClick5}>
                <FlipCard teamName={<>Core<br />Team </>} bg={'bg-[#39B66D]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick5}>
                <Card bg={'bg-[#39B66D]'} teamName="Core Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
            <div>
                <button onClick={handleClick6}>
                <FlipCard teamName={<>Events<br />Team </>} bg={'bg-[#E44F44]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick6}>
                <Card bg={'bg-[#E44F44]'} teamName="Events Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped7} flipDirection="vertical">
            <div>
                <button onClick={handleClick7}>
                <FlipCard teamName={<> Mentors</>} bg={'bg-[#4D2885]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick7}>
                <Card bg={'bg-[#4D2885]'} teamName="Mentors" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip>
        </Carousel>
        </div>
    );
};

export default Team;