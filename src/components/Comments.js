// Comments.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { COMMENTS_API } from "../utils/constants";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [repliesShown, setRepliesShown] = useState({});

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${COMMENTS_API}&videoId=${videoId}&key=` +
          process.env.REACT_APP_GOOGLE_API_KEY
      );
      setComments(response.data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const toggleReplies = (commentId) => {
    setRepliesShown((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  useEffect(() => {
    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  return (
    <div className="max-w-screen md:max-w-screen-md">
      <h2 className="my-2 font-bold text-xl">Comments</h2>
      <ul className="">
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className="flex my-2">
              <img
                className="h-10 mx-1 my-1 rounded-full"
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt="Profile"
              />
              <div className="flex flex-col text-sm">
                <h4 className="text-gray-700 font-semibold">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </h4>
                <p>
                  {comment.snippet.topLevelComment.snippet.textDisplay}
                </p>
                {comment.snippet.totalReplyCount > 0 && (
                  <button
                    onClick={() => toggleReplies(comment.id)}
                    className="max-w-fit text-black p-1 hover:bg-blue-100 hover:rounded-xl"
                  >
                    {repliesShown[comment.id]
                      ? "Hide Replies"
                      : "Show Replies"}
                  </button>
                )}
                {repliesShown[comment.id] && (
                  <ul className="max-w-screen-md">
                    {comment.replies.comments.map((reply) => (
                      <li key={reply.id}>
                        <div className="flex my-2">
                          <img
                            className="h-8 mx-1 my-1 rounded-full"
                            src={reply.snippet.authorProfileImageUrl}
                            alt="Profile"
                          />
                          <div className="flex flex-col text-sm">
                            <h4 className="text-gray-700 py-1 font-semibold">
                              {reply.snippet.authorDisplayName}
                            </h4>
                            <p className="py-1">{reply.snippet.textDisplay}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
