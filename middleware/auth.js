const auth = async (req, res, next) => {
  // Mock the user authentication logic
  const mockUserId = "12345"; // Use a hard-coded user ID for demonstration

  // Assigning mock userId
  req.user = { userId: mockUserId };
  next();
};

export default auth;
