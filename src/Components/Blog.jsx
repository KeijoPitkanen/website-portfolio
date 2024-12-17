import React from "react";
import "./SharedStyles.css";
function Blog() {
  return (
    <div className="main-view">
      <div className="page-desc">
        <h1>Average Arch Programming Blog</h1>
      </div>
      <div className="text-box">
        <p>
          I try to maintain my programming blog. Most of it is code review /
          code reflection of my own projects. I maintain this blog through
          WordPress.
        </p>
        <p>
          I also sometimes write about some other topics that interest. These
          incldue the inner workings of retro games, game consoles, analog video
          signals and software optimazation.
        </p>
        <p>Please come read and comment on my blog!</p>
        <div className="link-box">
          <a href="https://averagearchprogramming.wordpress.com/?utm_medium=email&utm_campaign=wpcom-happy-moments%2Ffirst-post&utm_source=guides">
            📜Average Arch Programming
          </a>
        </div>
        <p>
          I hope you can get some insight on programming or one of the other
          topics. See you in the comments ;)
        </p>
      </div>
    </div>
  );
}
export default Blog;
