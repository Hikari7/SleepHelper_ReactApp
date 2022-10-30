import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const DefaultImg = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const Timeline = gsap.timeline();
    // Timeline.repeat(10).yoyo(true).play();
    Timeline.to(".middle-line", { height: 130, y: 50 })
      .to(".middle-dot1", { height: 20 })
      .to(".middle-dot2", { height: 10, stagger: 0.3 })
      .to(".bi-caret-down", { height: 15, stagger: 0.3 });

    Timeline.duration(3);
  }, []);

  const mainImg = "https://source.unsplash.com/random/?night";
  return (
    <>
      <div
        className="h-screen w-screen z-20 bg-no-repeat opacity-50 object-cover relative defaultImg "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${mainImg})`,
        }}
      />
      <div className="middle-effect">
        <div className="middle-line" ref={lineRef}>
          <div className="middle-dot1"></div>
          <div className="middle-dot2"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DefaultImg;
