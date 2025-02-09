import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, test, expect } from "vitest";
import '@testing-library/jest-dom';

describe("App Component", () => {
  test("renders the Vite and React logos", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  test("renders the heading", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("renders the button and updates count on click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("count is 0");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  test("renders the paragraph", () => {
    render(<App />);
    const paragraph = document.querySelector("p");
    expect(paragraph).toHaveTextContent("Edit src/App.tsx and save to test HMR");
  });  

  test("renders the paragraph", () => {
    render(<App />);
    expect(screen.getByText("Click on the Vite and React logos to learn more")).toBeInTheDocument();
});
})