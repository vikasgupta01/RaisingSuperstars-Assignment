import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listPosts } from "../actions/postActions";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/Pagination";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);

  const { loading, error, posts } = postList;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(listPosts(10, currentPage));
  }, [currentPage, dispatch]);

  return (
    <div>
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col
              key={post.post._id}
              sm={12}
              md={12}
              lg={6}
              xl={4}
              className="align-items-stretch d-flex"
            >
              <Link
                to={`/post/${post.post._id}`}
                style={{ textDecoration: "none" }}
              >
                <Post post={post} />
              </Link>
            </Col>
          ))}
          <Pagination
            postsPerPage={10}
            totalPosts={200}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
