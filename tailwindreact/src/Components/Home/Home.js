import React from "react";



const Home = () => {
  return (
    <>
 
    <div>
      {/* <Navbar/> */}
      <section className="car_section" id="models">
        <img
          src={process.env.PUBLIC_URL + "images/ModelS.jfif"}
          alt="car_image"
          className="car_img"
        ></img>
        {/* underline and span */}
    
        <div className="car_details transfer_50">
          <h1 className="model_name">Model S</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless delivery</span>
          </h2>
        </div>

        {/* button */}
        <div className="car_buttons transfer_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>
        {/* Bouncing arrow  */}
        <a href="#model3">
          <svg
            className="down_svg"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="var(--tds-icon--fill, #171a20)"
              stroke-width="1.5"
              d="m19.5 12.5-4.5 4-4.5-4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </section>
    </div>
    </>
  );
};

export default Home;
