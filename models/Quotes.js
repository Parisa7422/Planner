// Mock data for quotes (simulating a database)
const mockQuotes = [
  {
    id: 1,
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    id: 2,
    text: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 3,
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
];

// Functions to handle operations
export const getQuotes = () => {
  return mockQuotes;
};

export const getQuoteById = (id) => {
  return mockQuotes.find((quote) => quote.id === id);
};

export const addQuote = (quote) => {
  const newQuote = {
    id: mockQuotes.length + 1,
    ...quote,
  };
  mockQuotes.push(newQuote);
  return newQuote;
};
