import React from "react";
import { useLoaderData, useParams } from "react-router";

const Article = () => {
  const id = useParams().id;
  const allArticles = useLoaderData();
  const selectedArticle = allArticles.find((article) => article.id == id);

  const {
    image,
    title,
    time_posted,
    read_min,
    answer,
    author_name,
    author_image,
  } = selectedArticle;

  const date = new Date(time_posted).toDateString().slice(4);

  return (
    <div className="w-9/11 mx-auto">
      <div className="w-[70%] mx-auto">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="mt-9 space-y-5">
        <h3 className="sm:text-4xl text-lg font-black text-center">{title}</h3>
        <p className="sm:text-2xl text-black/70 font-bold text-center">
          Welcome to another blogpost of React where we understand, what, why
          and how very clearly:)
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-5">
          <div className="flex gap-2 items-center font-bold">
            <img src={author_image} alt="" className="rounded-full w-15" />
            <p>{author_name}</p>
          </div>
          <div className="flex gap-5 mt-5 sm:mt-0 items-center">
          <p className="font-bold text-black/60 flex gap-2 items-center">
            <img src="/gif2.gif" alt="" className="w-7" />
            {date}
          </p>
          <p className="font-bold text-black/60 flex gap-2 items-center">
            <img src="/gif.gif" alt="" className="w-7" />
            {read_min} min read
          </p>
          </div>
        </div>
      </div>
        <p className="2xl:w-[50%] mx-auto my-5 text-xl">{answer}</p>
    </div>
  );
};

export default Article;
