import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FiberManualRecord, Verified } from "@mui/icons-material";

const features = [
  {
    id: 1,
    description: "Prioritized rankings in conversations and search.",
  },
  {
    id: 2,
    description:
      "See approximately twice as many Tweets between ads in your For You and Following timelines.",
  },
  {
    id: 3,
    description: "Add bold and italic text in your tweets.",
  },
  {
    id: 4,
    description: "Post longer videos and 1080p video uploads.",
  },
  {
    id: 5,
    description:
      "All the existing Blue features,including Edit Tweet,Bookmark Folders and early access to new features.",
  },
];

const SubscriptionModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 1,
    outline: "none",
    borderRadius: 4,
  };

  const [plan, setPlan] = useState("Annually");

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex justify-center py-2">
            <div className="w-[80%] space-y-8">
              <div className="p-5 rounded-md flex items-center justify-between shadow-lg bg-[#1d9bf0] text-white">
                <h1 className="text-xl">
                  Premium Subscribers with a verified phone number will get a
                  blue checkmark once approved.
                </h1>

                <Verified
                  sx={{ height: "5rem", width: "5rem" }}
                  className="text-[#1d9bf0] relative bg-white rounded-full p-2"
                />
              </div>

              <div className="flex justify-between border rounded-full px-[2rem] py-[0.8rem] border-[#1d9bf0]">
                <div>
                  <span
                    onClick={() => {
                      setPlan("Annually");
                    }}
                    className={`${
                      plan === "Annually"
                        ? "text-black font-semibold"
                        : "text-gray-400"
                    } cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-2 font-semibold">
                    SAVE 12%
                  </span>
                </div>

                <p
                  onClick={() => {
                    setPlan("Monthly");
                  }}
                  className={`${
                    plan === "Monthly"
                      ? "text-black font-semibold"
                      : "text-gray-400"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>

              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-5">
                    <FiberManualRecord sx={{ width: "7px", height: "7px" }} />
                    <span className="text-sm">{feature.description}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: "9999px",
                    width: "16rem",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  {plan === "Annually" ? (
                    <div>
                      <span className="line-through text-gray-400 mr-2">
                        ₹10,800 / year
                      </span>
                      ₹9,400 / year
                    </div>
                  ) : (
                    <div>₹900 / month</div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default SubscriptionModal;
