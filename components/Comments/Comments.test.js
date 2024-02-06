import { render, screen } from "@testing-library/react";
import Comments from "./Comments";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Test for:
// - The detail view has a list of comments for this art piece with the headline "Comments"
// - Each comment's text is displayed
// - Each comment's date and time is displayed

// Example data:
const comments = [
  {
    id: "1",
    artPiece: "slug",
    comment: "Test comment 1",
    date: "2024-02-06",
    time: "14:24:56",
  },
  {
    id: "2",
    artPiece: "slug",
    comment: "Test comment 2",
    date: "2024-02-06",
    time: "14:24:56",
  },
];

test("renders a list of comments with the headline 'Comments'", () => {
  // Mock a query parameter return value for the useRouter hook
  useRouter.mockReturnValue({
    query: { slug: "my-slug" },
  });
  //
  render(<Comments comments={comments} />);

  const headline = screen.getByText(/Comments/i);
  expect(headline).toBeInTheDocument();
});

// THESE TESTS ARE FAILING

test("renders the comment text", () => {
  render(<Comments comments={comments} />);

  comments.forEach((comment) => {
    const commentText = screen.getByText(new RegExp(comment.comment, "i"));
    expect(commentText).toBeInTheDocument();
  });
});

test("renders comment with date and time", () => {
  render(<Comments comments={comments} />);

  comments.forEach((comment) => {
    const commentText = screen.getByText(
      new RegExp(`${comment.date}, ${comment.time}`, "i")
    );
    expect(commentText).toBeInTheDocument();
  });
});
