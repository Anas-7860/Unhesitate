"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image">
          <Image
            src="/images/ani-card.jpg"
            alt="Dream Image"
            fill
            sizes="300px"
            className="object-cover"
          />
        </div>
        <p className="heading">
          CAPTURE YOUR <span className='text-sky-400 italic'>"DREAMS"</span> , CONFRONT YOUR <span className='text-red-600 italic'>"NIGHTMARES"</span>
        </p>
        <p>
          An <span className='text-green-600 italic bold'>OPEN SOURCE</span> Project Created by
        </p>
        <p>:) Anas Khan
        </p></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
@media (max-width: 1100px) {
    display: none;
  }

  .card {
    position: relative;
    width: 790px;
    height: 500px;
    background-color: #0e0735ff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding:12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card-image {
    position: relative;
    width: 300px;
    height: 300px;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 800px;
    height: 510px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 49px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 30px;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(0.64) scaleY(1.57);
  }`;

export default Card;
