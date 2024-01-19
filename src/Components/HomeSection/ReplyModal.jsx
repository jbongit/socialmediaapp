import React, { useState } from "react";
import Box from "@mui/material/Box";
import VerifiedIcon from "@mui/icons-material/Verified";
import Modal from "@mui/material/Modal";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import toast from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({ open, handleClose }) {
  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet Text Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 1,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  <span className="text-gray-600">
                    @demouser · 5 minutes ago
                  </span>
                  <VerifiedIcon className="text-[#1d9bf0] scale-[0.7] relative left-[-0.4rem] top-[0.14rem]" />
                </div>
              </div>

              <div className="mt-2">
                <p className="mb-2 p-0">Motivational Quotes</p>
              </div>
            </div>
          </div>

          <section className="pt-5">
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://th.bing.com/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening?"
                      className="border-none outline-none text-xl bg-transparent"
                      {...formik.getFieldProps("content")}
                      {...(formik.errors.content && formik.touched.content && (
                        <span className="text-red-500">
                          {formik.errors.content}
                        </span>
                      ))}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "29px",
                          paddingX: "20px",
                          paddingY: "8px",
                          bgColor: "#1e88e5",
                          fontWeight: "bold",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
const handleSubmit = (values) => {
  toast.success(values.content + " " + values.image);
  console.log("values", values);
};
