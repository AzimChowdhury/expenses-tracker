'use client'
import Image from "next/image";
import banner from "../assets/banner.png"
import logo from '../assets/logo.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Link from "next/link";



const Home = () => {

  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="min-h-screen min-w-screen bg-[#32A7E2]">

      <div className="flex justify-between items-center py-10 text-white px-[8%]">
        <p className="text-3xl font-bold flex items-center text-white">
          <Image src={logo} alt='' width={50} height={50} />
          Expense Tracker
        </p>
        <div>
          <ul className="flex items-center text-xl font-[500]">
            <li className="mr-10 ">Services</li>
            <li className="mr-10 ">Productivity</li>
            <li className="mr-10 ">Blog</li>
            {session?.user && <Link href={'/dashboard'}><li className="mr-10 ">Dashboard</li></Link>}
            {
              session?.user?.image ?
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Image style={{ borderRadius: "100%" }} src={session.user.image} alt="" width={50} height={50} />
                </Button>
                :
                <li onClick={() => signIn()} className="mr-10 cursor-pointer">Sign In</li>
            }
          </ul>
        </div>
      </div>


      <div className="flex justify-around items-center pt-12">
        <div>
          <p className="text-6xl font-bold leading-snug text-white">The best <br />
            <span className="font-[900]"> Expense Tracker</span>
            <br />app for you.</p>
          {
            session?.user ?
              <Link href={'/dashboard'}>
                <button className="button-1 mt-3" role="button">
                  <span className="button-1-shadow"></span>
                  <span className="button-1-edge"></span>
                  <span className="button-1-front text">
                    Join Now <ArrowForwardIcon />
                  </span>
                </button>
              </Link>
              :
              <button onClick={() => signIn()} className="button-1 mt-3" role="button">
                <span className="button-1-shadow"></span>
                <span className="button-1-edge"></span>
                <span className="button-1-front text">
                  Join Now <ArrowForwardIcon />
                </span>
              </button>
          }
        </div>
        <Image src={banner} alt='' width={500} height={500} />
      </div>




      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{session?.user?.name}</MenuItem>
        <MenuItem onClick={handleClose}>{session?.user?.email}</MenuItem>
        <MenuItem style={{ color: 'red', fontWeight: "600" }} onClick={() => { signOut(); handleClose() }}>Sign Out</MenuItem>
      </Menu>
    </div>
  )
}

export default Home;