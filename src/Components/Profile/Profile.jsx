import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab } from "@mui/material";
import toast from "react-hot-toast";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "../ProfileModal/ProfileModal";

const Profile = () => {
  const navigate = useNavigate();
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleCloseProfileModal = () => setOpenProfileModal(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFollowUser = () => {
    toast.success("Opened Follow User Successfully");
  };

  const [tabValue, setTabValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="">
      <section
        className={`z-50 flex items-center sticky top-0 bg-opacity-95 bg-white`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">Demo User</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[12.5rem] object-cover"
          src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/4_17.jpg"
          alt=""
        />
      </section>

      <section className="pl-4">
        <div className="flex justify-between items-start mt-1 h-[5rem]">
          <Avatar
            className="transform -translate-y-16"
            alt="Profile Picture"
            src="https://th.bing.com/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            sx={{
              width: "8.5rem",
              height: "8.5rem",
              border: "4px solid white",
            }}
          />
          <div className="mt-2 mr-1">
            {true ? (
              <Button
                onClick={handleOpenProfileModal}
                className="rounded-full"
                variant="contained"
                sx={{ borderRadius: "20px" }}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={handleFollowUser}
                className="rounded-full"
                variant="contained"
                sx={{ borderRadius: "20px" }}
              >
                {true ? "Follow" : "Unfollow"}
              </Button>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-xl">Demo User</h1>
            {true && (
              <VerifiedIcon className="text-[#1d9bf0] scale-[0.7] relative top-[0.16rem]" />
            )}
          </div>
          <h1 className="text-gray-500">@demouser</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>Hello Everyone , This is Demo User Profile Bio.</p>
          <div className="flex space-x-5 text-sm">
            <div className="flex items-center text-gray-500 gap-1">
              <BusinessCenterIcon />
              <p>Education</p>
            </div>

            <div className="flex items-center text-gray-500 gap-1">
              <LocationOnIcon />
              <p>India</p>
            </div>

            <div className="flex items-center text-gray-500 gap-1">
              <CalendarMonthIcon />
              <p>Joined September 2023</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>10000</span>
              <span>Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>10000</span>
              <span>Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[0.1rem]">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel sx={{ paddingX: "0.5rem" }} value="1">
              {[1, 1, 1, 1].map(() => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal
          open={openProfileModal}
          handleClose={handleCloseProfileModal}
        />
      </section>
    </div>
  );
};

export default Profile;
