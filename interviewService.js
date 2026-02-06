/**
 * Interview Service
 * Handles interview-related API calls
 * Currently uses mock data
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const interviewService = {
  /**
   * Start new interview session
   * @param {string} userId - User ID
   * @param {string} interviewType - Type of interview (technical, behavioral, hr)
   * @returns {Promise} Session data with questions
   */
  startInterview: async (userId, interviewType) => {
    try {
      const response = await fetch(`${API_URL}/interview/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, interviewType })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error starting interview:', error);
      // Return mock data on error
      return {
        success: true,
        data: {
          sessionId: Date.now().toString(),
          questions: [
            'Tell me about yourself.',
            'What are your strengths?',
            'Why do you want this position?'
          ]
        }
      };
    }
  },

  /**
   * Submit interview answer
   * @param {string} sessionId - Interview session ID
   * @param {number} questionIndex - Question index
   * @param {string} answer - User's answer
   * @returns {Promise} Submission result
   */
  submitAnswer: async (sessionId, questionIndex, answer) => {
    try {
      const response = await fetch(`${API_URL}/interview/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, questionIndex, answer })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting answer:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Get interview feedback
   * @param {string} sessionId - Interview session ID
   * @returns {Promise} Feedback data
   */
  getFeedback: async (sessionId) => {
    try {
      const response = await fetch(`${API_URL}/interview/feedback/${sessionId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching feedback:', error);
      // Return mock feedback on error
      return {
        success: true,
        data: {
          overallScore: 78,
          metrics: {
            clarity: 82,
            relevance: 75,
            confidence: 80,
            structure: 76
          },
          strengths: ['Clear communication', 'Good examples'],
          improvements: ['Add more details', 'Quantify achievements']
        }
      };
    }
  },

  /**
   * Get practice questions by category
   * @param {string} category - Question category
   * @returns {Promise} List of questions
   */
  getPracticeQuestions: async (category) => {
    // Mock practice questions
    const questions = {
      technical: [
        'Explain the concept of closures in JavaScript',
        'What is the difference between REST and GraphQL?',
        'Describe the SOLID principles',
        'How does garbage collection work?'
      ],
      behavioral: [
        'Describe a time you failed and what you learned',
        'How do you handle conflicts in a team?',
        'Tell me about your biggest achievement',
        'How do you prioritize tasks?'
      ],
      hr: [
        'What are your salary expectations?',
        'Why are you leaving your current job?',
        'What is your ideal work environment?',
        'How do you handle stress?'
      ]
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: questions[category] || questions.technical
        });
      }, 300);
    });
  }
};

export default interviewService;
