import { useState } from "react";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }

  return errors;
};

export default function CommentsForms({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let [isValid, setIsValid] = useState(true);

  return (
    <div>
      <h4>Give a comment!</h4>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>

        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <br />
        <br />

        <label htmlFor="remark">Remarks</label>

        <textarea
          placeholder="add few remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          id="remark"
          name="remarks"
        ></textarea>

        <br />
        <br />

        <label htmlFor="rating">Ratings</label>

        <input
          placeholder="Ratings"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />

        <br />
        <br />

        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
