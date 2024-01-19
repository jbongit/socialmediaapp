import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import toast from "react-hot-toast";
import ReplyModal from "./ReplyModal";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweets = () => {
    toast.success("Tweet is Deleted Successfully");
    handleClose();
  };

  const handleEditTweets = () => {
    toast.success("Tweet is Edited Successfully");
    handleClose();
  };

  const [openReplyModal, setOpenReplyModal] = useState(false);

  const handleOpenReplyModal = () => {
    toast.success("Comment Opened");
    setOpenReplyModal(true);
  };

  const handleCloseReplyModal = () => {
    toast.success("Comment Closed");
    setOpenReplyModal(false);
  };

  const handleCreateRetweets = () => {
    toast.success("Tweet Retweeted");
  };

  const handleLikeTweet = () => {
    toast.success("Tweet Liked");
  };

  const handleBookmarkTweet = () => {
    toast.success("Tweet Bookmarked");
  };

  return (
    <div className="pb-[0.8rem]">
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${1}`)}
          className="cursor-pointer"
          alt="username"
          src="https://th.bing.com/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className=" flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Demo User</span>
              <span className="text-gray-600">@demouser · 5 minutes ago</span>
              <VerifiedIcon className="text-[#1d9bf0] scale-[0.7] relative left-[-0.4rem] top-[0.14rem]" />
            </div>
            <div>
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
                <MenuItem onClick={handleDeleteTweets}>Delete</MenuItem>
                <MenuItem onClick={handleEditTweets}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div
              onClick={() => {
                window.scrollTo({
                  top: 0,
                });
                navigate(`/tweet/${1}`);
              }}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">Motivational Quotes</p>
              <img
                className="w-[28rem] h-[25rem] border border-gray-400 p-4 rounded-md"
                src="https://motivationping.com/wp-content/uploads/2017/10/motivational-quotes-72.jpg"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>10</p>
              </div>
              <div
                className={`${
                  true ? "text-blue-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweets}
                />
                <p>20</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                )}
                <p>40</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon className="cursor-pointer" />
                <p>80</p>
              </div>
              <div
                className={`${
                  true ? "text-blue-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <BookmarkIcon
                    className="cursor-pointer"
                    onClick={handleBookmarkTweet}
                  />
                ) : (
                  <BookmarkBorderIcon
                    className="cursor-pointer"
                    onClick={handleBookmarkTweet}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </div>
  );
};

export default TweetCard;
