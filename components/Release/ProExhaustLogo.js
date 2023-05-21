import * as React from "react";


const ProExhaustLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "120px",
        height: '60px',
      }}
    >
      <div style={{ flex: "50%", height: '100%', backgroundColor: "gray" }}></div>
      <div
        style={{
          flex: "50%",
          display: "flex",
          height: '100%',
          flexDirection: "column",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
};

export default ProExhaustLogo;
