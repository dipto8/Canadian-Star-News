import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from 'moment';
import png1 from "../../../../assets/1.png"
import png2 from "../../../../assets/2.png"
import png3 from "../../../../assets/3.png"

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);



  return (
    <div className=""> 
    <div className=" space-y-2">
      <h2 className="text-2xl mb-4 font-bold">All Categories</h2>
      {categories.map((category) => (
        <NavLink
          className="block font-semibold px-2 text-gray-500"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
      </div>

       <div className="mt-6 text-wrap">
        <img src={png1} alt="" />
        <p className="text-sm font-semibold  "> <Link> The Home Buyers' Plan (HBP).  </Link> </p>
        <span className="text-xs">{ moment().format("MMM Do YY") }</span>
       </div>
       <div className="mt-6 text-wrap">
        <img src={png2} alt="" />
        <p className="text-sm font-semibold text-balance "> <Link>Canada still an 'open country'</Link> </p>
        <span className="text-xs">{ moment().format("MMM Do YY") }</span>
       </div>
       <div className="mt-6 text-wrap">
        <img src={png3} alt="" />
        <p className="text-sm font-semibold  "> <Link> Arsenal vs Liverpool: Premier League title rivals meet on Sunday in crucial match </Link> </p>
        <span className="text-xs">{ moment().format("MMM Do YY") }</span>
       </div>
    
    </div>
  );
};

export default LeftNavbar;
