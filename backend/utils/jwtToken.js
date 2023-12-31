const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

// options for cookie setting in vercel 
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure:true,
    sameSite:"none"
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
