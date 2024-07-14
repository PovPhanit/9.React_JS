import React from 'react'
import {Area,AreaChart, CartesianGrid,XAxis,Tooltip,YAxis,PieChart,Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosLock } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { easeInOut, motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { BsPersonPlus } from "react-icons/bs";

export default function Login() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "color": "#7671d7",
      "value": 2400,
      "name":"1 day"
    },
    {
      "color": "#fa688a",
      "value": 4567,
      "name":"2 day"
    },
    {
      "color": "#d9eb51",
      "value": 1398,
      "name":"3 day"
    },
    {
      "color": "#ed74ed",
      "value": 9800,
      "name":"4 day"
    },
    {
      "color": "orange",
      "value": 3908,
      "name":"5 day"
    },
    {
      "color": "cyan",
      "value": 4800,
      "name":"6 day"
    }
  ];


  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100} %`;
  };
                              
  return (
    <div className=' w-full h-[100vh] p-5  flex justify-center items-center '>
      <div className='lg:w-[50%] py-9  lg:h-[520px] hidden lg:flex lg:flex-col lg:justify-center lg:items-end'>
        <div className='flex flex-col justify-center items-center '>
        <motion.div
            initial={{ opacity: 0 ,x:'-30vw',scale:0.8}}
            animate={{ opacity: 1 ,x:'0'}}
            transition={{ duration: 2,scale:1.5}}
           >
          <img src="../../public/Homes.jpg" alt="" className='w-full h-[440px] object-cover'/>
          </motion.div>
          <h1 className='mt-4 font-bold text-[35px] uppercase '>Home For Rent</h1>
        </div>
      </div>
      <div className='flex flex-col items-center w-[98%]  py-9 lg:w-[50%]'>
        <div className='h-52 relative'>
          <motion.div
            initial={{ opacity: 0 ,x:'30vw',scale:0.8}}
            animate={{ opacity: 1 ,x:'0'}}
            transition={{ duration: 2,scale:1.5}}
           >
          <img src="../../public/room.png" alt="" className='w-48 md:w-56 md:mt-[-20px]'/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 ,y:'-30vw',scale:0.8}}
            animate={{ opacity: 1 ,y:'0'}}
            transition={{ duration: 2,scale:1.5}}
           >
          <img src="../../public/key.png" alt="" className='w-16 mt-[-180px] ml-[-16px] drop-shadow-lg ' />
          </motion.div>
          
          
        </div>
        <div className='text-center mt-[-20px]'>
          <div className='mb-[20px]'>
              <h1 className='font-bold text-[26px]'>Welcome Back</h1>
              <h3 className='text-[17px]'>Login to your account</h3>
          </div>
          <form action="" className='flex flex-col items-center gap-5 mb-[7px]'>
            <div className='w-full relative'>
             <input type="text" className='h-9 rounded-lg indent-[45px] w-full outline-4 border-b border-blue-400 caret-blue-400 drop-shadow-lg focus:outline-none focus:border-b focus:border-b-blue-400'  placeholder='Username'/>
                 <BsPersonPlus className='absolute text-blue-400 text-[27px] bg-white top-[-6px] left-[-10px] p-2 w-12 h-12 rounded-[50%] border-2 border-blue-400 drop-shadow-2xl'/>
            </div>
            <div className='w-full relative'>
             <input type="password" className='h-9 rounded-lg indent-[45px] w-full outline-4 border-b border-blue-400 drop-shadow-lg focus:outline-none focus:border-b focus:border-b-blue-400'  placeholder='Password'/>
                 <IoIosLock  className='absolute text-blue-400  text-[27px] bg-white top-[-6px] left-[-10px] p-2 w-12 h-12 rounded-[50%] border-2 border-blue-400 drop-shadow-2xl'/>
            </div>
            
            <button type="submit" className='bg-blue-400 px-3 py-1 rounded-md text-white'>Sign in</button>
          </form>
          Don't have an account? <Link to="/register" className='text-blue-700'>sign up here</Link>
       </div>
       
      
      </div>
      
    </div>
  )
}










// <ResponsiveContainer width="100%" height={240}>
//        <AreaChart width={730} height={250} data={data}
//               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//               <defs>
//                 <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="rgb(244, 36, 126)" stopOpacity={0.8}/>
//                   <stop offset="95%" stopColor="rgb(244, 36, 126)" stopOpacity={0}/>
//                 </linearGradient>
//                 <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
//                   <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
//                 </linearGradient>
//               </defs>
//               <XAxis dataKey="name" />
//               <YAxis unit="$" />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip />
//               <Area type="monotone" dataKey="uv" stroke="#fa688a" fillOpacity={1} fill="url(#colorUv)" />
//               <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
//         </AreaChart>
//        </ResponsiveContainer>

//         <ResponsiveContainer width="100%" height={240}>
//               <PieChart width={730} height={250}>
//                 {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={110} fill="#8884d8" /> */}
//                 <Pie  data={data02} dataKey="value" nameKey="names" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label paddingAngle={8} >
//                   {data02.map((data)=> <Cell fill={data.color} stroke={data.color} key={data.value} />)}
//                 </Pie>
//                 <Legend verticalAlign='middle' align='right' width="30%" layout='vertical' iconSize={15} iconType='circle' />
//               </PieChart>
//         </ResponsiveContainer>
        
//         <ResponsiveContainer width="100%" height={240}>
//               <PieChart width={730} height={250}>
//                 <Pie  data={data02} dataKey="value" nameKey="names" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label  />
//               </PieChart>
//         </ResponsiveContainer>