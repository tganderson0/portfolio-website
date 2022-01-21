import React from "react";
import ShortPost from "../component/post/ShortPost";
import './page.css';

const Home = () => {
  return (
    <div className="center-children">
      <ShortPost title='Test' image={require('../static/images/simple.jpg')} alt='image of duck' description='a short post about ducks' />
    </div>
  );
}

export default Home;