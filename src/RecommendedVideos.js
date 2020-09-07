import "./RecommendedVideos.css";

import React from "react";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Utlimate Guide to Becoming a React JS Developer"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GipwEqlk5h8JR3hGn5Es5MEe1w0wPDP2cn_545jEQ=s88-c-k-c0x00ffffff-no-rj-mo"
          channel="Clever Programming"
          image="https://i.ytimg.com/vi/rv8f-BxRq0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQPWxCKPylfsymqgz7RhIPimnkIw"
        />
        <VideoCard
          title="Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chaninsmokers style"
          views="5.3M Views"
          timestamp="4 months ago"
          channelImage="https://lh3.googleusercontent.com/a-/AOh14GipwEqlk5h8JR3hGn5Es5MEe1w0wPDP2cn_545jEQ=s88-c-k-c0x00ffffff-no-rj-mo"
          channel="Queen Club"
          image="https://i.ytimg.com/an_webp/wHDVX2E8nLY/mqdefault_6s.webp?du=3000&sqp=CKTE2foF&rs=AOn4CLCU_Rs-_hw8MLURUMElzGKZ0_qe3w"
        />
        <VideoCard
          title="WAKANDA FOREVER | See You Again"
          views="1.3M Views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ghk3YEcdNG1Xp_omyT0j_wgItcGDIz_wWck4g=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="venomax"
          image="https://i.ytimg.com/an_webp/0s9FgmMwDFo/mqdefault_6s.webp?du=3000&sqp=CObZ2foF&rs=AOn4CLAL79C5jqn9otS4fXWBvBz-_bCroA"
        />
        <VideoCard
          title="Utlimate Guide to Becoming a React JS Developer"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gh9RvjF1TEbVXNUXPkAEhNBbcd4DDyoaI9-Xw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="TopMovieClips"
          image="https://i.ytimg.com/an_webp/PjJofEuSA78/mqdefault_6s_480x270.webp?du=3000&sqp=CPTY2foF&rs=AOn4CLD6OlI1HnMxdp_V8njsyDhowmI5Mw"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
