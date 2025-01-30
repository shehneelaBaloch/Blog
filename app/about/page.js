import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="home-container">
      <h1>About Me</h1>
    <div className="intro-section">
      <div className="intro-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Proin nec ex vel libero pharetra auctor. Nam ut eros nec
          erat posuere tincidunt. Ut euismod, velit ut interdum dapibus,
          sapien turpis elementum metus, non scelerisque eros libero non
          magna.
        </p>
        <p>
          Suspendisse potenti. Cras sit amet bibendum metus. Donec sit amet
          ligula quis quam scelerisque faucibus eget et odio. Sed vehicula
          suscipit ligula, sed facilisis nunc efficitur at.
        </p>
      </div>
      <div className="intro-image">
        <Image 
          src="/images/AI_in_2025.jpg" 
          alt="AI in 2025" 
          width={400} 
          height={250} 
          priority 
        />
      </div>
    </div>
    </div>
  );
}

export default Page;
