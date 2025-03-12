
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {assets} from '../assets/assets'
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
 
  const {userData,setUserData,token,backendUrl,loadUserProfileData}=useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);
  const [image,setImage]=useState(false)
  const updateUserProfileData=async()=>{
     
    try {
      const formData=new FormData()
      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append('image',image)


      const {data}=await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}} )

      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }

  }
  return userData && (
    <div className="max-w-md mx-auto flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm font-sans">
      {
        isEdit
        ? <label htmlFor="image">
            <div className="inline-block relative cursor-pointer justify-center">
              <img className="w-36 rounded opacity-75" src={image ? URL.createObjectURL(image):userData.image} alt="" />
              <img className="w-10 absolute bottom-12 right-12" src={image ? '':assets.upload_icon} alt="" />
            </div>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden />
        </label>

        :<div className="flex items-center justify-center">
        <img className="w-28 h-28 rounded-full shadow-md object-cover" src={userData.image} alt="Profile" />
      </div>
      }
      
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
              value={userData.gender || ""}
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
            onClick={updateUserProfileData}
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
