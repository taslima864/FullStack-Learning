import { useState } from "react";

export default function CommentsForms({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value,
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    addNewComment(formData);

    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a comment!</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>

        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />

        <br />
        <br />

        <label htmlFor="remark">Remarks</label>

        <textarea
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputChange}
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
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />

        <br />
        <br />

        <button>Add comment</button>
      </form>
    </div>
  );
}