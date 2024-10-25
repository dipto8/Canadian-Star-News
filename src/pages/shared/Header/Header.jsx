import logo from '../../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <h1 className="text3xl">Header</h1>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            
        </div>
    );
};

export default Header;