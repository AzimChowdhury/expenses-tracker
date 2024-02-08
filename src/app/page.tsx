import Image from "next/image";
import banner from "../assets/banner.png"
import logo from '../assets/logo.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#32A7E2]">

      <div className="flex justify-between items-center py-10 text-white px-[8%]">
        <p className="text-3xl font-bold flex items-center text-white">
          <Image src={logo} alt='' width={50} height={50} />
          Expense Tracker
        </p>
        <div>
          <ul className="flex items-end text-xl font-[500]">
            <li className="mr-10 ">Services</li>
            <li className="mr-10 ">About Us</li>
            <li className="mr-10 cursor-pointer">Sign In</li>
          </ul>
        </div>
      </div>


      <div className="flex justify-around items-center pt-12">
        <div>
          <p className="text-6xl font-bold leading-snug text-white">The best <br />
            <span className="font-[900]"> Expense Tracker</span>
            <br />app for you.</p>
          <button className="button-1 mt-3" role="button">
            <span className="button-1-shadow"></span>
            <span className="button-1-edge"></span>
            <span className="button-1-front text">
              Join Now <ArrowForwardIcon />
            </span>
          </button>
        </div>
        <Image src={banner} alt='' width={500} height={500} />
      </div>
    </div>
  )
}

export default Home;