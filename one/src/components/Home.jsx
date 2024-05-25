import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2" id="">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            in, deleniti nam quaerat et error? Iure nihil excepturi laboriosam
            soluta, nemo odit culpa dolore ullam. Architecto atque, dolore minus
            nulla ipsum perferendis voluptates accusantium, incidunt unde optio
            expedita illo id voluptate quasi dolor est neque alias nisi a!
            Aspernatur laudantium dolorem, voluptatum nisi illum itaque quod
            omnis, iusto maxime pariatur, incidunt ducimus mollitia. Ullam
            voluptatum officia temporibus recusandae necessitatibus excepturi
            eius, repellat delectus quod suscipit quibusdam impedit libero,
            culpa error ducimus nostrum expedita architecto animi! Voluptatum
            ullam aperiam ratione! Placeat necessitatibus numquam quasi repellat
            corrupti nesciunt, possimus exercitationem! Laudantium, non.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay:"0.3s",
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s",
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:"0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:"0.9s",
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
