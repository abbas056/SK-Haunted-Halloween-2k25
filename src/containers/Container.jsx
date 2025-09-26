import React from "react";

const Container = ({
  children,
  height = "",
  width = "",
  size = "contain",
  postion = "center",
  image,
  alt = "",
  className = "",
  style = {},
  ...props
}) => {
  const containerStyle = {
    height,
    width,
    position: "",
    backgroundImage: image ? (image.includes("gradient") ? image : `url(${image})`) : "none",
    backgroundSize: size,
    backgroundPosition: postion,
    backgroundRepeat: "no-repeat",
    ...style,
  };

  return (
    <div className={className} style={containerStyle} {...props}>
      {children}
    </div>
  );
};

export default Container;
