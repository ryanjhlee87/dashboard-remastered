import UserList from '../models/UserList.js';

export const users = async (req, res) => {
  try {
    const userList = await UserList.find();
    if (!userList) {
      res.status(501).json({ message: 'No user found' });
    }
    res.json({ userList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const usersByAge = async (req, res) => {
  console.log('This is usersByAge route');
};
