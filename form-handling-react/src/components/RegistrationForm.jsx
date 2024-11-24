import React, { useState } from "react";

const RegistrationForm = () => {
  // States for form fields and errors
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors before validation
    setErrors({ username: "", email: "", password: "" });
    
    let hasError = false;
    
    // Validate username
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username is required!" }));
      hasError = true;
    }

    // Validate email
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required!" }));
      hasError = true;
    } else if (!email.includes("@")) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address!" }));
      hasError = true;
    }

    // Validate password
    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required!" }));
      hasError = true;
    } else if (password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be at least 6 characters long!" }));
      hasError = true;
    }

    // If there are validation errors, prevent form submission
    if (hasError) return;

    // Form submission (successful case)
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;

