function errorHandler(err, req, res, next) {
  res.status(err?.response?.status || 500).json({
      success: false,
      message: err.message,
  });
}

module.exports = {errorHandler}

