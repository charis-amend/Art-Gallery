import { render, screen } from "@testing-library/react";
import CommentForm from "./CommentForm";

// Test for:
// - The detail view has an input field to write a comment
// - The detail view has a submit button labeled "Send"

test("renders input field", () => {
  render(<CommentForm />);

  const inputElement = screen.getByLabelText(/add comment:/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders submit button", () => {
  render(<CommentForm />);

  const buttonElement = screen.getByRole("button", { name: /send/i });
  expect(buttonElement).toBeInTheDocument();
});
