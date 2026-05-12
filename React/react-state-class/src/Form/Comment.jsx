import { useState } from "react";
import "./Comment.css";
import CommentsForms from "./CommentsForms";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "Great job!!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment");
  };

  
  return (
    <div>
      <h3>All Comments</h3>

      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;&nbsp;
          <span>(rating = {comment.rating})</span>
          <p>- {comment.username}</p>
        </div>
      ))}

      <CommentsForms addNewComment={addNewComment} />
    </div>
  );
}
