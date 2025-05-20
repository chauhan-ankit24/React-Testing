export const Application = () => {
  return (
    <>
      <style>
        {`
          .application-container {
            max-width: 400px;
            margin: 2rem auto;
            padding: 2rem;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: #fafbfc;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            font-family: Arial, sans-serif;
          }
          .application-container h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #333;
          }
          .application-container h2 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            color: #555;
          }
          .application-container p {
            color: #666;
            margin-bottom: 1rem;
          }
          .application-container span[title="close"] {
            float: right;
            cursor: pointer;
            color: #888;
            font-weight: bold;
            font-size: 1.2rem;
          }
          .application-container img {
            display: block;
            margin: 1rem auto;
            border-radius: 4px;
          }
          .application-container form > div {
            margin-bottom: 1rem;
          }
          .application-container label {
            display: block;
            margin-bottom: 0.3rem;
            color: #444;
          }
          .application-container input[type="text"],
          .application-container textarea,
          .application-container select {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
            margin-bottom: 0.3rem;
          }
          .application-container input[type="checkbox"] {
            margin-right: 0.5rem;
          }
          .application-container button {
            width: 100%;
            padding: 0.7rem;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: not-allowed;
            opacity: 0.7;
          }
          .application-container [data-testid="custom-element"] {
            background: #e3f2fd;
            padding: 0.5rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            text-align: center;
            color: #1976d2;
            font-weight: 500;
          }
        `}
      </style>
      <div className="application-container">
        <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <img
          src="https://picsum.photos/id/1/200/100"
          alt="a person with a laptop"
        />
        <div data-testid="custom-element">Custom HTML element</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Fullname"
              value="Ankit"
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" />
          </div>
          <div>
            <label htmlFor="job-location">Job location</label>
            <select id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled>Submit</button>
        </form>
      </div>
    </>
  );
};
