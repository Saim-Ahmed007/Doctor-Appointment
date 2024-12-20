import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          value={userData.name}
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />

      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              value={userData.phone}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address :</p>
          {
            isEdit ?
            <p>
              <input value={userData.address.line1} onChange={(e)=> 
                setUserData(prev => ({...prev, address:{...prev.address, line1: e.target.value}}))} type="text" />
              <br />
              <input value={userData.address.line2} onChange={(e)=> 
                setUserData(prev => ({...prev, address:{...prev.address, line2: e.target.value}}))} 
                type="text" />
            </p>
            : <p>{userData.address.line1} <br /> {userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit ?
            <select value={userData.gender} 
            onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
          }
          <p>Birthday:</p>
          {
            isEdit ?
            <input type="date" value={userData.dob}
            onChange={(e) => setUserData(prev => ({...prev, dob:e.target.value}))} />
            : <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit ? 
          <button onClick={()=>setIsEdit(false)}>Save information</button>
          : <button onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
