import Image from "next/image";
import logo from "../assets/logo.jpg"


const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#32A7E2]">
      <p className="text-6xl font-bold leading-snug text-white">The best <br /> Expense Tracker <br />app for you.</p>
      <Image src={logo} alt='' width={100} height={100} />
    </div>
  )
}

export default Home;