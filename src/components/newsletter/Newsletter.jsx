import { useState } from "react";

const NewsLetter = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setMessage("");
      setError("Please provide your email");
    }

    if (input.length > 0) {
      setError("");
      setInput("");
      setMessage("Thank you!");
      setTimeout(() => {
        setMessage("");
      }, 2500);
    }
  };

  return (
    <div className="newsletter">
      <p className="newsletter__text">Join the adventure and stay up to date</p>
      <form className="newsletter__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="newsletter__input-wrapper">
          <input
            placeholder="youremail@gmail.com"
            type="email"
            value={input}
            className="newsletter__email-input"
            onChange={handleInputChange}
          />
          {error && <span className="newsletter__error">{error}</span>}
          {message && <span className="newsletter__message">{message}</span>}
        </div>

        <input
          type="submit"
          name="Submit"
          className="newsletter__submit"
          value="Sign Me Up"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
