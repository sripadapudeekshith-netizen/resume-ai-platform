/**
 * Interview Controller
 * Handles mock interview sessions (mock implementation)
 */

// Mock sessions storage
const mockSessions = {};

const interviewController = {
  // Start new interview session
  startInterview: (req, res) => {
    const { userId, interviewType } = req.body;
    const sessionId = Date.now().toString();
    
    // Mock questions based on type
    const questions = {
      technical: [
        'Explain the difference between var, let, and const in JavaScript.',
        'What is the time complexity of binary search?',
        'Describe how React hooks work.'
      ],
      behavioral: [
        'Tell me about a time you faced a challenging problem.',
        'Describe a situation where you worked with a difficult team member.',
        'What motivates you in your career?'
      ],
      hr: [
        'Why do you want to work for our company?',
        'What are your greatest strengths?',
        'Tell me about yourself.'
      ]
    };
    
    mockSessions[sessionId] = {
      sessionId,
      userId,
      interviewType,
      questions: questions[interviewType] || questions.technical,
      answers: [],
      startedAt: new Date().toISOString()
    };
    
    res.json({
      success: true,
      data: {
        sessionId,
        questions: mockSessions[sessionId].questions
      }
    });
  },

  // Submit answer
  submitAnswer: (req, res) => {
    const { sessionId, questionIndex, answer } = req.body;
    
    if (mockSessions[sessionId]) {
      mockSessions[sessionId].answers.push({
        questionIndex,
        answer,
        submittedAt: new Date().toISOString()
      });
      
      res.json({
        success: true,
        message: 'Answer submitted successfully'
      });
    } else {
      res.status(404).json({ success: false, message: 'Session not found' });
    }
  },

  // Get interview feedback
  getFeedback: (req, res) => {
    const { sessionId } = req.params;
    
    if (mockSessions[sessionId]) {
      // Mock AI feedback
      const feedback = {
        sessionId,
        overallScore: 78,
        metrics: {
          clarity: 82,
          relevance: 75,
          confidence: 80,
          structure: 76
        },
        strengths: [
          'Clear communication',
          'Good technical knowledge',
          'Structured responses'
        ],
        improvements: [
          'Provide more specific examples',
          'Quantify achievements',
          'Practice STAR method'
        ],
        generatedAt: new Date().toISOString()
      };
      
      res.json({ success: true, data: feedback });
    } else {
      res.status(404).json({ success: false, message: 'Session not found' });
    }
  }
};

module.exports = interviewController;
