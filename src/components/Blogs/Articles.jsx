import React from "react";
import { Link } from "react-router";

const Articles = ({ article }) => {
  const {
    id,
    image,
    title,
    answer,
  } = article;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="h-60 w-full">
        <img
          src={image}
          alt="react"
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p>{answer.split(" ").splice(0, 15).join(" ")}...</p>
        <Link to={`/article/${id}`}>
          <div className="card-actions justify-center">
            <button
              // onClick={() => handleShowArticle(id)}
              className="btn btn-lg text-xl font-bold hover:bg-[#0EA106] hover:text-white rounded-xl"
            >
              Read Full Article
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
