/**
 * Profile Controller
 * Handles user profile operations (mock implementation)
 */

// Mock database
const mockProfiles = {};

const profileController = {
  // Get user profile
  getProfile: (req, res) => {
    const { userId } = req.params;
    const profile = mockProfiles[userId];
    
    if (profile) {
      res.json({ success: true, data: profile });
    } else {
      res.status(404).json({ success: false, message: 'Profile not found' });
    }
  },

  // Create new profile
  createProfile: (req, res) => {
    const profileData = req.body;
    const userId = Date.now().toString(); // Mock user ID
    
    mockProfiles[userId] = {
      ...profileData,
      userId,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json({
      success: true,
      message: 'Profile created successfully',
      data: mockProfiles[userId]
    });
  },

  // Update profile
  updateProfile: (req, res) => {
    const { userId } = req.params;
    const updates = req.body;
    
    if (mockProfiles[userId]) {
      mockProfiles[userId] = {
        ...mockProfiles[userId],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: mockProfiles[userId]
      });
    } else {
      res.status(404).json({ success: false, message: 'Profile not found' });
    }
  }
};

module.exports = profileController;
