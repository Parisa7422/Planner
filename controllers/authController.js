// Mock user database (in-memory)
const mockUsers = [];

// Helper function to find user by email
const findUserByEmail = (email) => {
  return mockUsers.find((user) => user.email === email);
};

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";

// Register user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check for empty values
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  // Check for duplicate email
  if (findUserByEmail(email)) {
    throw new BadRequestError("Email already in use");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user object and add to mock users
  const newUser = {
    id: mockUsers.length + 1,
    name,
    email,
    password: hashedPassword,
    lastName: "Doe", // Default value for demonstration
  };
  mockUsers.push(newUser);

  // Generate JWT
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  // Send response
  res.status(201).json({
    user: {
      email: newUser.email,
      lastName: newUser.lastName,
      name: newUser.name,
    },
    token,
  });
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  // Check for empty values
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  // Find user by email
  const user = findUserByEmail(email);
  if (!user) {
    throw new unAuthenticatedError("Invalid credentials");
  }

  // Compare password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new unAuthenticatedError("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  // Send response without the password
  res.status(200).json({
    user: { email: user.email, lastName: user.lastName, name: user.name },
    token,
  });
};

// Update user (optional)
const updateUser = async (req, res) => {
  const { email, name, lastName } = req.body;

  // Find the user by email in mockUsers array (simulating updating data)
  const userIndex = mockUsers.findIndex((user) => user.email === email);
  if (userIndex === -1) {
    throw new BadRequestError("User not found");
  }

  // Update user information
  mockUsers[userIndex] = { ...mockUsers[userIndex], name, lastName };

  res.status(200).json({ message: "User updated successfully" });
};

// Export the functions
export { register, login, updateUser };
