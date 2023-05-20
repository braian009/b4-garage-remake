import * as React from "react";

const LineDecoration = ({
  top,
  right,
  bottom,
  left,
  width,
  height,
  translateX,
  translateY,
  skew,
  backgroundColor,
  opacity,
  luminescence = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        height: height,
        width: width,
        top: `${top ? top : "none"}`,
        right: `${right ? right : "none"}`,
        bottom: `${bottom ? bottom : "none"}`,
        left: `${left ? left : "none"}`,
        background: `${backgroundColor}`,
        transform: `skew(${skew ? skew : 0}) translateX(${
          translateX ? translateX : 0
        }) translateY(${translateY ? translateY : 0})`,
        opacity: `${opacity ? opacity : 1}`,
        boxShadow: `${
          luminescence
            ? `0 0 13.1544px ${backgroundColor}, 0 0 3.7584px ${backgroundColor}, 0 0 1.8792px ${backgroundColor}`
            : "none"
        }`,
      }}
    ></div>
  );
};

export default LineDecoration;