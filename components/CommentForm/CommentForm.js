export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data, slug);

    event.target.reset();
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment">Add comment:</label>
      <textarea
        className="comment-text-input"
        name="comment"
        id="comment"
        rows="4"
        required
      />
      <button className="send-comment-button" type="submit">
        Send
      </button>
    </form>
  );
}
