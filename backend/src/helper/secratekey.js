const verifySecretKey = (req, res, next) => {
  const secretKey = req.headers["username"] || req.query.secretKey;
  if (secretKey !== process.env.SECRET_KEY) {
    return res.status(403).json({ error: "Invalid secret key" });
  }
  next();
};

module.exports = verifySecretKey;
