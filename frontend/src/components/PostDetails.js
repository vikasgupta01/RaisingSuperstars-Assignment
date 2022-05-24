import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PostDetails.css";
// import Rating from "./Rating";
// add comments section instead of ratings

const PostDetails = ({ post, setShowPostDetailsPopup }) => {
  console.log("post: ", post);
  return (
    <div className="popup">
      <div className="popup-inner">
        <Card className="my-3 p-3 rounded">
          <button
            className="close-btn"
            onClick={() => setShowPostDetailsPopup(false)}
          >
            close
          </button>
          {post.post.images?.length
            ? post.post.images.map((image) => (
                <Card.Img
                  src={image.src}
                  variant="top"
                  style={{ width: "30%", height: "30%" }}
                />
              ))
            : ""}
          <Card.Body>
            {/* <Link to={`/post/${post.post._id}`}> */}
            <Link to="#">
              <Card.Title as="div">
                <strong>{post.post.user?.profile?.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">
              <strong>Post Body:</strong>{" "}
              {post.post.content?.length
                ? `${post.post.content}`
                : "No content found"}
            </Card.Text>
            {post.post.comments.length
              ? post.post.comments?.map((comment) => (
                  <Card.Text as="div">
                    <strong>{comment.user.profile.name} Commented:</strong>{" "}
                    {`${comment?.body}`}
                  </Card.Text>
                ))
              : ""}
            <Card.Text as="div">
              <strong>Upvotes: </strong>
              {`${post.post.upvotes?.length}`}
            </Card.Text>
            <Card.Text as="div">
              <strong>Downvotes: </strong>
              {`${post.post.downvotes?.length}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PostDetails;
