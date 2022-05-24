import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Rating from "./Rating";
// add comments section instead of ratings

const Post = ({ post }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {post.post.images.length ? (
        <Link to={`/post/${post.post._id}`}>
          <Card.Img
            src={post.post?.images[0]?.src}
            variant="top"
            style={{ width: "50%", height: "50%" }}
          />
        </Link>
      ) : (
        ""
      )}
      <Card.Body>
        <Link to={`/post/${post.post._id}`}>
          <Card.Title as="div">
            <strong>{post.post.user.profile.name}</strong>
          </Card.Title>
        </Link>
        <Card.Title as="div">
          <strong>Summary:</strong>{" "}
          {post.post.comments.length
            ? `${post.post.summary.slice(0, 40)}...`
            : "No summary found"}
        </Card.Title>

        <Card.Text as="div">
          <strong>Comment:</strong>{" "}
          {post.post.comments.length
            ? `${post.post?.comments[0]?.body.slice(0, 40)}...`
            : "No comments found"}
        </Card.Text>
        <Card.Text as="div">
          <strong>Upvotes: </strong>
          {`${post.post.upvotes.length}`}
        </Card.Text>
        <Card.Text as="div">
          <strong>Downvotes: </strong>
          {`${post.post.downvotes.length}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
