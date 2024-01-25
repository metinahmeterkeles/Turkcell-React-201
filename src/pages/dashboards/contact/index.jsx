import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

const Contact = () => {
  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);

      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <div>
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            disabled={isSubmitting}
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>
        <div>
          <label htmlFor="text">Email</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            type="message"
            disabled={isSubmitting}
            value={values.message}
            onChange={handleChange("message")}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
