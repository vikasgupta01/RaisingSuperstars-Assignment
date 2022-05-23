import axios from "axios";
import {
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../constants/postConstants";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });

    const config = {
      headers: {
        // "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlAaHlkLmh5ZCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jVAWWrvQ6gQOQbmonmL8Fbl_l0tfwksW6L20wlUcMhY",
      },
    };

    const { data } = await axios.get(
      "https://api.xcess.cloud/users/feed?limit=10&page=1",
      config
    );

    dispatch({ type: POST_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const { data } = await axios.get(
      "https://api.xcess.cloud/users/feed?limit=10&page=1"
    );

    dispatch({ type: POST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
