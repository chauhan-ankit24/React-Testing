import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

test("renders main app component", () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
