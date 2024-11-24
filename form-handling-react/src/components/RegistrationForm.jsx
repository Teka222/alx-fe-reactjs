import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "", // Initial value for username
      email: "",    // Initial value for email
      password: "", // Initial value for password
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters long")
        .max(15, "Username must be 15 characters or less")
        .matches(/^[a-zA-Z0-9_]*$/, "Username can only contain letters, numbers, and underscores")
        .required("Username is required."),
      email: Yup.string()
        .email("Invalid email format.")
        .required("Email is required."),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required."),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values); // Handle form submission
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Username Field */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}  // Formik's handleChange
          onBlur={formik.handleBlur}      // Formik's handleBlur
          value={formik.values.username}  // Bind value to Formik's state
        />
        {formik.touched.username && formik.errors.username && (
          <div>{formik.errors.username}</div>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}  // Formik's handleChange
          onBlur={formik.handleBlur}      // Formik's handleBlur
          value={formik.values.email}     // Bind value to Formik's state
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}  // Formik's handleChange
          onBlur={formik.handleBlur}      // Formik's handleBlur
          value={formik.values.password}  // Bind value to Formik's state
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
