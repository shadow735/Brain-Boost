import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from '../Components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    const images = [
        'https://images.unsplash.com/photo-1709962225055-01ac99b1e231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
        'https://images.unsplash.com/photo-1709374601273-57d0a44c9437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1709843109639-7d613de1fbca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
      ];
  return (
    <>
    <div>
      <Carousel images={images} />
    </div>
    <div>
    <div class="card-container">
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Image" />
    <div class="content">
      <h2>Card Heading</h2>
      <p>Card Subheading</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Image" />
    <div class="content">
      <h2>Card Heading</h2>
      <p>Card Subheading</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Image" />
    <div class="content">
      <h2>Card Heading</h2>
      <p>Card Subheading</p>
      <button>Read More</button>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Image" />
    <div class="content">
      <h2>Card Heading</h2>
      <p>Card Subheading</p>
      <button>Read More</button>
    </div>
  </div>
</div>

    
    </div>
    </>
  )
}

export default Home
