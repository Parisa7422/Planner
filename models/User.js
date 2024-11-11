import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Mock user database (this is an in-memory array to simulate users)
const mockUsers = [
  {
    id: "1",
    name: "testuser",
    email: "testuser@example.com",
    password: await bcrypt.hash("password123", 10), // Pre-hashed password for simplicity
    lastName: "Doe",
  },
];

// Function to create a new user (Registration)
export const registerUser = async (name, email, password) => {
  // Validate email
  if (!validator.isEmail(email)) {
    throw new Error("Please provide a valid email");
  }

  // Check if the email already exists
  if (mockUsers.some((user) => user.email === email)) {
    throw new Error("Email already in use");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user object
  const newUser = {
    id: (mockUsers.length + 1).toString(),
    name,
    email,
    password: hashedPassword,
    lastName: "Doe",
  };

  // Add new user to the mock database
  mockUsers.push(newUser);
  return newUser;
};

// Function to login a user
export const loginUser = async (email, password) => {
  // Find user by email
  const user = mockUsers.find((user) => user.email === email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Create and return JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  return { user, token };
};

// Mock password comparison method (for reuse)
export const comparePassword = async (hashedPassword, candidatePassword) => {
  return await bcrypt.compare(candidatePassword, hashedPassword);
};
