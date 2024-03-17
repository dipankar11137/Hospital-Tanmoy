import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { RiFolderSettingsFill } from 'react-icons/ri';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import arrow from '../../../Images/Logo/arrow.png';
import auth from '../../../firebase.init';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [open, setOpen] = useState(false);
  const [users] = useAuthState(auth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="pt-16 flex z-50">
      {/* dashboard side bar */}
      <div
        className={`bg-cyan-600 min-h-screen relative duration-300 overflow-hidden ${
          open ? 'w-64 md:w-48' : 'w-20 md:w-16'
        }`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/White_right_arrow.svg/2108px-White_right_arrow.svg.png"
          className={`absolute cursor-pointer right-0 top-9 w-7 -mt-7  
             border-2 rounded-full ${open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          alt="arrow"
        />
        <ul className="menu  pt-16 text-white ">
          <li>
            <NavLink to="/dashboard">
              <BsFillCartCheckFill className="text-xl text-white" />
              {open && <> Bookings</>}
            </NavLink>
          </li>
          {/* <li className="mt-3 text-white">
            <NavLink className="text-white " to="/dashboard">
              <BsFillCartCheckFill className="text-xl" />
              {open && <> Bookings</>}
            </NavLink>
          </li> */}
          <li className="mt-3 text-white">
            <NavLink
              activeClassName="bg-secondary"
              className="text-white "
              to="/dashboard/addDoctor"
            >
              <MdOutlineLibraryAdd className="text-xl" />
              {open && <> Add Doctor</>}
            </NavLink>
          </li>
          <li className="mt-3 text-white">
            <NavLink className="text-white " to="/dashboard/manageCar">
              <RiFolderSettingsFill className="text-xl" />
              {open && <> Manage Car</>}
            </NavLink>
          </li>
          {/* <li className="mt-3 text-white">
            <NavLink className="text-white " to="/dashboard/profile">
              <AiOutlineUser className="text-xl" />
              {open && <> Profile</>}
            </NavLink>
          </li> */}
          <li className="mt-3 text-white">
            <NavLink className="text-white " to="/dashboard/happyClient">
              <FaUserFriends className="text-xl" />
              {open && <> Edit Profile</>}
            </NavLink>
          </li>
          {users?.email === 'rosemotors@gmail.com' && (
            <li className="mt-3 text-white">
              <NavLink className="text-white " to="/dashboard/users">
                <AiOutlineUser className="text-xl" />
                {open && <> User</>}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="p-2 bg-white flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { AiOutlineUser } from 'react-icons/ai';
// import { BiEdit } from 'react-icons/bi';
// import { BsFillCartCheckFill } from 'react-icons/bs';

// import {
//   MdContactMail,
//   MdDashboard,
//   MdOutlineLibraryAdd,
// } from 'react-icons/md';
// import { RiFolderSettingsFill } from 'react-icons/ri';
// import { Link, Outlet } from 'react-router-dom';
// import auth from '../../../firebase.init';

// const Dashboard = () => {
//   const [user] = useAuthState(auth);

//   const [open, setOpen] = useState(false);
//   const [selectedButton, setSelectedButton] = useState('');
//   return (
//     <div className="bg-white pt-16">
//       <div className="">
//         <div className="drawer drawer-mobile">
//           <input
//             id="dashboard-sidebar"
//             type="checkbox"
//             className="drawer-toggle"
//           />
//           <div className="drawer-content">
//             <Outlet></Outlet>
//           </div>
//           <div className="drawer-side navigation ">
//             <label
//               htmlFor="dashboard-sidebar"
//               className="drawer-overlay "
//             ></label>
//             <section className="flex ">
//               <div
//                 className={` ${
//                   open ? 'w-60' : 'w-20 '
//                 } bg-slate-700 h-screen p-5 text-white pt-8 relative duration-300`}
//               >
//                 <img
//                   src="https://cdn.pixabay.com/photo/2012/04/11/17/14/left-28998_1280.png"
//                   className={`absolute cursor-pointer -right-3 top-9 w-7
//              border-2 rounded-full  ${!open && 'rotate-180'}`}
//                   onClick={() => setOpen(!open)}
//                   alt=""
//                 />
//                 <div className="flex gap-x-4 items-center">
//                   <div onClick={() => setSelectedButton('Button 10')}>
//                     {' '}
//                     <Link to={'/dashboard'}>
//                       {' '}
//                       <img
//                         src="https://www.svgrepo.com/download/7869/settings.svg"
//                         className={`cursor-pointer duration-500 rounded-full ${
//                           open && 'rotate-[360deg] h-20  '
//                         }`}
//                         alt=""
//                       />
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex flex-col gap-4 relative">
//                   {/* Dashboard */}
//                   <div
//                     onClick={() => setSelectedButton('Button 10')}
//                     className={
//                       selectedButton === 'Button 10'
//                         ? 'bg-primary text-black rounded-lg'
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(MdDashboard, {
//                           size: '20',
//                           color: 'white',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 text-white ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Dashboard
//                       </h2>
//                     </Link>
//                   </div>
//                   {/* My booking */}
//                   <div
//                     onClick={() => setSelectedButton('Button 3')}
//                     className={
//                       selectedButton === 'Button 3'
//                         ? 'bg-primary text-black rounded-lg'
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/carBooking"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(BsFillCartCheckFill, {
//                           size: '20',
//                           color: 'white',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 text-white ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Car Booking
//                       </h2>
//                     </Link>
//                   </div>{' '}
//                   {/* Manage booking */}
//                   {/* <div
//                         onClick={() => setSelectedButton('Button 4')}
//                         className={
//                           selectedButton === 'Button 4'
//                             ? 'bg-primary text-black rounded-lg w-[215px]'
//                             : ''
//                         }
//                       >
//                         {' '}
//                         <Link
//                           to="/dashboard/manageBooking"
//                           className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 w-[215px] hover:bg-primary rounded-md`}
//                         >
//                           <div>
//                             {React.createElement(RiLuggageCartFill, {
//                               size: '20',
//                             })}
//                           </div>
//                           <h2
//                             style={{
//                               transitionDelay: `${0 + 3}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500 ${
//                               !open &&
//                               'opacity-0 translate-x-28 overflow-hidden '
//                             }`}
//                           >
//                             Manage Booking
//                           </h2>
//                         </Link>
//                       </div> */}
//                   {/* add product */}
//                   <div
//                     onClick={() => setSelectedButton('Button 5')}
//                     className={
//                       selectedButton === 'Button 5'
//                         ? 'bg-primary text-white rounded-lg'
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/addCar"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(MdOutlineLibraryAdd, {
//                           size: '24',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Add Car
//                       </h2>
//                     </Link>
//                   </div>
//                   {/* add rent */}
//                   {/* <div
//                     onClick={() => setSelectedButton('Button 15')}
//                     className={
//                       selectedButton === 'Button 15'
//                         ? 'bg-primary text-white rounded-lg'
//                         : ''
//                     }
//                   >

//                     <Link
//                       to="/dashboard/addRent"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(FaPlusSquare, {
//                           size: '24',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Add Rent Car
//                       </h2>
//                     </Link>
//                   </div> */}
//                   {/* Manage Porduct */}
//                   <div
//                     onClick={() => setSelectedButton('Button 6')}
//                     className={
//                       selectedButton === 'Button 6'
//                         ? 'bg-primary text-white rounded-lg '
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/manageCar"
//                       className={`  group flex items-center text-xl w-[215px]  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(RiFolderSettingsFill, {
//                           size: '20',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 ${
//                           !open &&
//                           'opacity-0 translate-x-28 overflow-hidden w-[215px]'
//                         }`}
//                       >
//                         Manage Car
//                       </h2>
//                     </Link>
//                   </div>
//                   {/* Profile */}
//                   <div
//                     onClick={() => setSelectedButton('Button 1')}
//                     className={
//                       selectedButton === 'Button 1'
//                         ? 'bg-primary text-black rounded-lg'
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/profile"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(AiOutlineUser, {
//                           size: '20',
//                           color: 'white',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 text-white ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Profile
//                       </h2>
//                     </Link>
//                   </div>
//                   {/* edit profile */}
//                   <div
//                     onClick={() => setSelectedButton('Button 2')}
//                     className={
//                       selectedButton === 'Button 2'
//                         ? 'bg-primary text-black rounded-lg'
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/editProfile"
//                       className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(BiEdit, {
//                           size: '20',
//                           color: 'white',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 text-white ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Edit Profile
//                       </h2>
//                     </Link>
//                   </div>
//                   {/* Manage contact */}
//                   <div
//                     onClick={() => setSelectedButton('Button 7')}
//                     className={
//                       selectedButton === 'Button 7'
//                         ? 'bg-primary text-white rounded-lg '
//                         : ''
//                     }
//                   >
//                     {' '}
//                     <Link
//                       to="/dashboard/users"
//                       className={`  group flex items-center text-xl  w-[215px] gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
//                     >
//                       <div>
//                         {React.createElement(MdContactMail, {
//                           size: '20',
//                         })}
//                       </div>
//                       <h2
//                         style={{
//                           transitionDelay: `${0 + 3}00ms`,
//                         }}
//                         className={`whitespace-pre duration-500 ${
//                           !open && 'opacity-0 translate-x-28 overflow-hidden '
//                         }`}
//                       >
//                         Manage Contact
//                       </h2>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
