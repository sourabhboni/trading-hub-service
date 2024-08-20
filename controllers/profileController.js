const Profile = require('../models/profileModel');

// Controller to handle profile creation
const createProfile = async (req, res) => {
  try {
    const { profileId, name, profession } = req.body;
    const profile = new Profile({ profileId, name, profession });
    await profile.save();
    res.status(201).json({ message: 'Profile created successfully', profile });
  } catch (error) {
    console.error('Error creating profile:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to add a connection to a profile
const addConnection = async (req, res) => {
  try {
    const { profileId, connectionId } = req.body;
    const profile = await Profile.findOne({ profileId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    const connection = await Profile.findOne({ profileId: connectionId });
    if (!connection) {
      return res.status(404).json({ error: 'Connection profile not found' });
    }
    profile.connections.push(connection._id);
    await profile.save();
    res.json({ message: 'Connection added successfully', profile });
  } catch (error) {
    console.error('Error adding connection:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to post a job
const postJob = async (req, res) => {
  try {
    const { profileId, title, description } = req.body;
    const profile = await Profile.findOne({ profileId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    profile.jobPostings.push({ title, description });
    await profile.save();
    res.json({ message: 'Job posted successfully', profile });
  } catch (error) {
    console.error('Error posting job:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createProfile,
  addConnection,
  postJob,
};
