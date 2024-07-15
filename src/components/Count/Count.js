import React, { useEffect, useRef } from 'react';
import './Count.css';

const Stats = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;
              const increment = target / 800; // Adjust increment for slower counting

              if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 20);
              } else {
                counter.innerText = target;
              }
            };
            updateCounter();
            observer.unobserve(counter);
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="item">
        <span ref={(el) => countersRef.current.push(el)} className="counter" data-target="30"></span>+ Schools
      </div>
      <div className="item">
        <span ref={(el) => countersRef.current.push(el)} className="counter" data-target="5000"></span>+ Students
      </div>
      <div className="item">
        <span ref={(el) => countersRef.current.push(el)} className="counter" data-target="15"></span>+ Adventure Tours
      </div>
      <div className="item">
        <span ref={(el) => countersRef.current.push(el)} className="counter" data-target="25"></span>+ Activities
      </div>
    <div>

      </div>
    </div>
  );
};

export default Stats;
