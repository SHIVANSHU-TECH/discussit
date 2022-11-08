import "./styles.css";
import "./style.css";
export default function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DiscussiT</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      {/* custom css file link  */}
      <link rel="stylesheet" href="style.css" />
      {/* header section starts  */}
      <header className="header">
        <a href="#" className="logo">
          <img src="logo.jpeg" alt="" />
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#learn" target="_blank">
            Learn
          </a>
          <a href="#myLearning" target="_blank">
            mLearning
          </a>
          <button>subscribe</button>
          <button>login</button>
        </nav>
        <div className="icons">
          <div className="fas fa-bars" id="menu-btn" />
        </div>
      </header>
      {/* header section ends */}
      <section className="home" id="home">
        <h3>India's Finance Learning Community</h3>
        <br />
        <br />
        <div className="box-container">
          <div className="box"></div>
        </div>{" "}
        <br />
        <br />
        <a href="#" className="btn">
          Learn
        </a>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="Course">
        <h3>Popular Course</h3> <br />
        <br />
        <div className="box-container">
          <div className="box">
            <img src="images/img1.jpg" alt="" />
            <h3>courses name</h3>
            <div className="description">
              event description<span>(short)</span>
            </div>
          </div>
          <div className="box">
            <img src="images/img2.jpg" alt="" />
            <h3>courses name</h3>
            <div className="description">
              event description <span>(short)</span>
            </div>
          </div>
          <div className="box">
            <img src="images/img3.jpg" alt="" />
            <h3>courses name</h3>
            <div className="description">
              event description <span>(short)</span>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="box-container">
          <div className="box">
            &lt;<h4>contact info</h4>
            <p>
              {" "}
              <i className="fas fa-map-marker-alt" /> delhi, india 400104.{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope" /> example@gmail.com{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-phone" /> +123-456-7890{" "}
            </p>
            <a href="#">India</a>
          </div>
          <div className="box">
            <h4>EXPLORE</h4>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">course</a>
            <a href="#">blog</a>
            <a href="#">contact</a>
          </div>
          <div className="box">
            <h4>category</h4>
            <a href="#">Design</a>
            <a href="#">Developer</a>
            <a href="#">Marketing</a>
            <a href="#">Business</a>
            <a href="#">Lifestyle</a>
            <a href="#">Photography</a>
            <a href="#">Music</a>
          </div>
          <div className="box">
            <h4>subscribe</h4>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quasi voluptates ad esse perferendis, ex molestiae earum ullam
              repellendus sint, di ea?
            </h5>
            <div className="inputBox">
              <input type="email" placeholder="email" />
            </div>
            <button>subscribe here</button>
          </div>
        </div>
      </div>
    </div>
  );
}
