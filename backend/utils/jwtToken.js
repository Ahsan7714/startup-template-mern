const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true, // Added for Vercel's HTTPS enforcement
    sameSite: "Lax", // Set appropriate SameSite attribute
    domain: "https://r-b.vercel.app", // Replace with your actual domain
    path: "/", 
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
