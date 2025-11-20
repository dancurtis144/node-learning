const User = require('../models/userModel');
const APIFeatures = require('../utils/APIFeatures');
const catchAsync = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const users = await features.query;

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
};
