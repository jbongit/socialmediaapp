import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";

const RightPart = () => {
  const [isTheme, setIsTheme] = useState(false);

  const handleChangeTheme = () => {
    if (isTheme) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setIsTheme(false);
      toast("Light Mode Enabled Successfully !!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#1a202c",
          color: "#fff",
          fontWeight: "500",
        },
        duration: 2000,
      });
    } else {
      document.body.style.backgroundColor = "#1a202c";
      document.body.style.color = "white";
      setIsTheme(true);
      toast("Dark Mode Enabled Successfully !!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
          fontWeight: "500",
        },
        duration: 2000,
      });
    }
  };

  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);

  const handleOpenSubscriptionModal = () => {
    setOpenSubscriptionModal(true);
  };

  const handleCloseSubscriptionModal = () => {
    setOpenSubscriptionModal(false);
  };

  return (
    <div className="pl-5 py-2 sticky top-0">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className={isTheme ? "text-black" : "text-black"} />
        </div>
        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>

      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">
          Subscribe to Unlock Exciting Features
        </h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          onClick={handleOpenSubscriptionModal}
        >
          Get Verified
        </Button>
      </section>

      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's Happening</h1>
        <div>
          <p className="text-sm">ICC Cricket World Cup 2023 · Live</p>
          <p className="font-bold">India vs New Zealand</p>
        </div>

        {[1, 1].map(() => (
          <div className="flex justify-between w-full">
            <div>
              <p>Sports · Treding</p>
              <p className="font-bold">#India</p>
              <p>500k tweets</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>

      <section>
        <SubscriptionModal
          open={openSubscriptionModal}
          handleClose={handleCloseSubscriptionModal}
        />
      </section>
    </div>
  );
};

export default RightPart;
