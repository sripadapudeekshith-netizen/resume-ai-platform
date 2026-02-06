/**
 * Resume Service
 * Handles resume-related API calls
 * Currently uses mock data
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const resumeService = {
  /**
   * Get user's resume
   * @param {string} userId - User ID
   * @returns {Promise} Resume data
   */
  getResume: async (userId) => {
    try {
      const response = await fetch(`${API_URL}/resume/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching resume:', error);
      // Return mock data on error
      return {
        success: true,
        data: {
          template: 'modern',
          content: {},
          score: 0
        }
      };
    }
  },

  /**
   * Generate resume with AI
   * @param {Object} profileData - User profile data
   * @param {string} template - Resume template
   * @returns {Promise} Generated resume
   */
  generateResume: async (profileData, template = 'modern') => {
    try {
      const response = await fetch(`${API_URL}/resume/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profileData, template })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error generating resume:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Analyze resume for ATS compatibility
   * @param {Object} resumeContent - Resume content
   * @returns {Promise} Analysis results
   */
  analyzeResume: async (resumeContent) => {
    try {
      const response = await fetch(`${API_URL}/resume/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeContent })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error analyzing resume:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Export resume as PDF (placeholder)
   * @param {Object} resumeData - Resume data
   * @returns {Promise} PDF blob
   */
  exportToPDF: async (resumeData) => {
    // Placeholder for PDF export functionality
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('PDF export will be implemented in future phase');
        resolve({ success: true, message: 'PDF export coming soon' });
      }, 500);
    });
  }
};

export default resumeService;
