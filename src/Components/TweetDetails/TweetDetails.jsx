import React from "react";
import TweetCard from "../HomeSection/TweetCard";
import { Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const TweetDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <section
        className={`z-50 flex items-center sticky top-0 bg-opacity-95 bg-white`}
      >
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">
          Tweet Information
        </h1>
      </section>

      <section>
        <TweetCard />
        <Divider sx={{ marginLeft: "2.5rem" }} />
      </section>

      <section className="mt-7">
        {[1, 1, 1, 1].map(() => (
          <TweetCard />
        ))}
      </section>
    </React.Fragment>
  );
};

export default TweetDetails;
