import React from "react";
import { navigationMenu } from "./NavigationMenu.js";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-screen sticky top-0">
      <div className="py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </div>
      <div className="space-y-5">
        {navigationMenu.map((item) => (
          <div
            className="cursor-pointer flex space-x-3 items-center"
            onClick={() =>
              item.title === "Profile"
                ? navigate(`/profile/${1}`)
                : navigate(item.path)
            }
          >
            {item.icon}
            <p className="text-base">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="py-5">
        <Button
          sx={{
            width: "100%",
            borderRadius: "29px",
            py: "11px",
            bgColor: "#1e88e5",
            fontWeight: "bold",
          }}
          variant="contained"
        >
          Tweet
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${1}`)}
          className="cursor-pointer"
          alt="username"
          src="https://th.bing.com/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        />
          <div className=" flex flex-col w-20">
            <span className="text-md">Demo User</span>
            <span className="opacity-70 text-xs font-semibold">@demouser</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
