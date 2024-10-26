import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-4">
      <button className="btn btn-outline btn-primary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to='/' className="px-4 text-xl text-red-600 ">
          Scotiabank has confirmed outages affecting mobile and online banking
          services, according to a statement published to its customer-service
          social media account on X.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
