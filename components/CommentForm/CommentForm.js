export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data);

    event.target.reset();
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form__fields">
        <div className="comment-form__field">
          <label htmlFor="comment">Add comment:</label>
          <textarea name="comment" id="comment" rows="4" />
        </div>
        <div className="comment-form__button-wrapper">
          <button className="send-comment-button" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
