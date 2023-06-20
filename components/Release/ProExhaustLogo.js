import * as React from "react";

const ProExhaustLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "175px",
        height: "60px",
        cursor: "default",
      }}
    >
      <div style={{ flex: "50%", height: "100%" }}>
        <svg fill="#e25336" height="100%" width="100%" viewBox="0 0 512 512">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <g>
              <g>
                <path d="M331.938,380.869c-5.049-1.675-10.508,1.026-12.203,6.08c-21.078,62.91-79.852,105.179-146.253,105.179 c-85.028,0-154.207-69.178-154.207-154.207c0-85.028,69.178-154.207,154.207-154.207c65.508,0,124.022,41.526,145.618,103.325 c1.755,5.017,7.261,7.661,12.273,5.92c5.026-1.76,7.675-7.257,5.92-12.283c-24.288-69.527-90.12-116.239-163.812-116.239 C77.823,164.44,0,242.268,0,337.922s77.823,173.482,173.482,173.482c74.698,0,140.818-47.559,164.531-118.337 C339.703,388.023,336.983,382.564,331.938,380.869z"></path>{" "}
              </g>
            </g>
            <g>
              <g>
                <path d="M338.518,0.595c-74.698,0-140.818,47.559-164.536,118.347c-1.69,5.045,1.031,10.504,6.076,12.198 c5.083,1.694,10.518-1.026,12.203-6.08c21.078-62.919,79.856-105.189,146.258-105.189c85.028,0,154.207,69.179,154.207,154.207 c0,85.028-69.178,154.207-154.207,154.207c-65.503,0-124.022-41.516-145.618-103.316c-1.755-5.026-7.233-7.661-12.278-5.92 c-5.021,1.76-7.671,7.257-5.915,12.283c24.292,69.517,90.125,116.229,163.812,116.229C434.177,347.56,512,269.732,512,174.078 S434.177,0.595,338.518,0.595z"></path>{" "}
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div
        style={{
          flex: "50%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "1.25rem",
            textTransform: "uppercase",
            color: "#ccc",
          }}
        >
          Pro
        </span>
        <span
          style={{
            fontSize: "1.25rem",
            textTransform: "uppercase",
            color: "#ccc",
          }}
        >
          Exhaust
        </span>
      </div>
    </div>
  );
};

export default ProExhaustLogo;
