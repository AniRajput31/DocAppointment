// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: "Edward Vincent",
//     image: assets.profile_pic,
//     email: "richardjames1234@gmail.com",
//     phone: "+1 234 567 890",
//     address: {
//       line1: "00000 Willms Station",
//       line2: "Suite 000, Washington, USA",
//     },
//     gender: "Male",
//     dob: "01-01-1990",
//   });

//   const [isEdit, setIsEdit] = useState(false);
//   return (
//     <div className="max-w-lg flex flex-col gap-2 text-sm ">
//       <img className="w-36 rounded " src={userData.image} alt="" />
//       {isEdit ? (
//         <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 "
//           type="text"
//           value={userData.name}
//           onChange={(e) =>
//             setUserData((prev) => ({ ...prev, name: e.target.value }))
//           }
//         />
//       ) : (
//         <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
//       )}
//       <hr className="bg-zinc-400 h-[1px] border-none" />

//       <div>
//         <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium" >Email id:</p>
//           <p className="text-blue-500">{userData.email}</p>
//           <p className="font-medium">Phone:</p>
//           {isEdit ? (
//             <input className="bg-gray-100 max-w-52"
//               type="text"
//               value={userData.phone}
//               onChange={(e) =>
//                 setUserData((prev) => ({ ...prev, phone: e.target.value }))
//               }
//             />
//           ) : (
//             <p className="text-blue-400" >{userData.phone}</p>
//           )}
//           <p className="font-medium">Address:</p>
//           {isEdit ? (
//             <p>
//               <input className="bg-gray-50"
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev.address,
//                     line1: e.target.value,
//                   }))
//                 }
//                 value={userData.address.line1}
//                 type="text"
//               />
//               <br />
//               <input className="bg-gray-50"
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev.address,
//                     line2: e.target.value,
//                   }))
//                 }
//                 value={userData.address.line2}
//                 type="text"
//               />
//             </p>
//           ) : (
//             <p className="text-gray-500" >
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}
//             </p>
//           )}
//         </div>
//       </div>
//       <div>
//         <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
//         <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
//           <p className="font-medium">Gender:</p>
//           {isEdit ? <select className="max-w-20 bg-gray-100" onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select> : (
//             <p className="text-gray-400">{userData.gender}</p>
//           )}
         
//          <p className="font-medium">Birthday:</p>
//          {
//           isEdit ? <input className="max-w-28 bg-gray-100" type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}/>
//           : <p className="text-gray-400">{userData.dob}</p>
//          }

//         </div>
//       </div>
//       <div className="mt-10">
//         {
//           isEdit 
//           ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200" onClick={()=>setIsEdit(false)}>Save information</button>
//           : <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200" onClick={()=>setIsEdit(true)}>Edit</button>
//         }
//       </div>
//     </div>
//   );
// };

// export default MyProfile;


import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjames1234@gmail.com",
    phone: "+1 234 567 890",
    address: {
      line1: "00000 Willms Station",
      line2: "Suite 000, Washington, USA",
    },
    gender: "Male",
    dob: "01-01-1990",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-md mx-auto flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm font-sans">
      <div className="flex items-center justify-center">
        <img className="w-28 h-28 rounded-full shadow-md object-cover" src={userData.image} alt="Profile" />
      </div>
      {isEdit ? (
        <input
          className="bg-gray-100 text-2xl font-medium max-w-full mt-4 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className="font-medium text-2xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-200 h-[1px] border-none mt-3" />

      <div>
        <p className="text-neutral-500 font-semibold mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-2 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                className="bg-gray-50 p-2 rounded-md mb-2 w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                value={userData.address.line1}
                type="text"
              />
              <input
                className="bg-gray-50 p-2 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                value={userData.address.line2}
                type="text"
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 font-semibold mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-2 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-full bg-gray-100 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-full bg-gray-100 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              type="date"
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        {isEdit ? (
          <button
            className="border border-primary px-6 py-2 rounded-full text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary transition-all duration-200"
            onClick={() => setIsEdit(false)}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="border border-primary px-6 py-2 rounded-full text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary transition-all duration-200"
            onClick={() => setIsEdit(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
