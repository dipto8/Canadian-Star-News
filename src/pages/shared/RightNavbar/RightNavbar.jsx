import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import qZone1 from "../../../../assets/qZone1.png";
import qZone2 from "../../../../assets/qZone2.png";
import qZone3 from "../../../../assets/qZone3.png";

const RightNavbar = () => {
  return (
    <div>
      <div id="Login" className=" md:flex flex-col space-y-3 mt-4">
        <h2 className="text-2xl text-center font-semibold">Login With </h2>
        <button className="btn btn-outline btn-primary">
          <FcGoogle />
          Google
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub></FaGithub>GitHub
        </button>
      </div>

      <div id="Social media links" className=" my-3 p-3 ">
        <h2 className="text-2xl text-center font-semibold mb-2">Find Us </h2>
        <div className=" flex flex-col  ">
          <a
            className="border-gray-400 border rounded-t-lg  flex items-center gap-2 p-3"
            href=""
          >
            <FaInstagram />
            <span>Instragram</span>
          </a>
          <a
            className="border-gray-400 border border-x  flex items-center gap-2 p-3 "
            href=""
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            className="border-gray-400 border rounded-b-lg  flex items-center gap-2 p-3"
            href=""
          >
            <FaInstagram />
            <span>X</span>
          </a>
        </div>
      </div>

     
      <div id="q-Zone" className=" md:flex flex-col space-y-3 mt-4 bg-orange-50 p-4">
        <h2 className="text-2xl text-center font-semibold">Q-Zone </h2>

       <a href=""> <img src={qZone1} alt="" /></a>  
       <a href=""> <img src={qZone2} alt="" /></a>  
       <a href=""> <img src={qZone3} alt="" /></a>  
       

      </div>

    
    </div>
  );
};

export default RightNavbar;
