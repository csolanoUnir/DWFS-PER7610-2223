import React from 'react';
import '../styles/Cats.css';
const Cats = () =>{
  return (
   <div>
    <h3 className='h3gato'>CARD 2</h3>
    <div className='gato'>
   <div class="card2">
      <div class="card-image2"></div>
            <div class="card-text">
              <span class="date">5 days ago</span>
              <h2>Post One</h2>
              <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
        <div class="card-stats2">
          <div class="stat">
            <div class="value">4<sup>m</sup></div>
            <div class="type">read</div>
          </div>
          <div class="stat border2">
              <div class="value">5123</div>
              <div class="type">views</div>
          </div>
          <div class="stat2">
            <div class="value">32</div>
            <div class="type">comments</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Cats;