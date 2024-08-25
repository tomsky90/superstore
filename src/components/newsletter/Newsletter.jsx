const NewsLetter = () => {
  return (
    <div className="newsletter">
      <p className="newsletter__text">Join the adventure and stay up to date</p>
      <input
        placeholder="youremail@gmail.com"
        type="email"
        className="newsletter__email-input"
      />
      <input
        type="submit"
        name="Submit"
        className="newsletter__submit"
        value="Sign Me Up"
      />
    </div>
  );
};

export default NewsLetter;
