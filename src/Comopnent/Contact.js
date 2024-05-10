import React, { useState } from "react";
import banner from "../assets/img/anshu.jpeg";

const Contact = () => {
    const [data, setData] = useState('')
  return (
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "red" }}>

        {/* Top  */}
        <div>
          <img src={banner} alt="banner" />
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
          <div style={{ width: 680, height: 200 }}>
            <div style={join}>
              <label style={linp}>Name</label>
              <input style={inp} type="text" />
            </div>

            <div style={join}>
              <label style={linp}>Email</label>
              <input style={inp} type="email" />
            </div>

            <div style={join}>
              <label style={linp}>Phone</label>
              <input style={inp} type="text" maxLength={10} />
            </div>
          </div>

          <div style={{ width: 680, height: 200 }}>
            <div style={join1}>
              <label style={linp}>Feedback</label>
              {/* <input style={inp} type="text" maxLength={10}/> */}
              <textarea style={inp} cols={10} aria-multiline={true} row={50} />
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            marginBottom: 50,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <button style={{ fontSize: 25, paddingRight: 50, paddingLeft: 50 }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const join = {
  display: "flex",
  gap: 10,
  marginTop: 25,
  marginBottom: 25,
};
const inp = {
  fontSize: 25,
  borderRadius: 10,
  outline: "none",
};
const linp = {
  fontSize: 25,
  borderRadius: 10,
  outline: "none",
};
const join1 = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 25,
  marginBottom: 25,
};

export default Contact;
