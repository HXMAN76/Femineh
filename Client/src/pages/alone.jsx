import React, { useEffect } from "react";

const Alone = () => {
  useEffect(() => {
    // Redirect to your deployment URL
    window.location.href = "https://empathic-voice-interface-starter-cyan-five.vercel.app/";
  }, []);

  return null; // Return nothing since the user will be redirected
};

export default Alone;
