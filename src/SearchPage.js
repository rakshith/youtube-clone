import "./SearchPage.css";

import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://lh3.googleusercontent.com/a-/AOh14GipwEqlk5h8JR3hGn5Es5MEe1w0wPDP2cn_545jEQ=s88-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programming"
        verified
        subs="670K"
        noOfVideos={382}
        description="Utlimate Guide to Becoming a React JS Developer"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="This clip is ultimate"
        timestamp="59 seconds ago"
        channel="Clever Programming"
        title="Utlimate Guide to Becoming a React JS Develope"
        image="https://i.ytimg.com/vi/rv8f-BxRq0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQPWxCKPylfsymqgz7RhIPimnkIw"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="This clip is ultimate"
        timestamp="59 seconds ago"
        channel="Clever Programming"
        title="Utlimate Guide to Becoming a React JS Develope"
        image="https://i.ytimg.com/vi/rv8f-BxRq0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQPWxCKPylfsymqgz7RhIPimnkIw"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="This clip is ultimate"
        timestamp="59 seconds ago"
        channel="Clever Programming"
        title="Utlimate Guide to Becoming a React JS Develope"
        image="https://i.ytimg.com/vi/rv8f-BxRq0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQPWxCKPylfsymqgz7RhIPimnkIw"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="This clip is ultimate"
        timestamp="59 seconds ago"
        channel="Clever Programming"
        title="Utlimate Guide to Becoming a React JS Develope"
        image="https://i.ytimg.com/vi/rv8f-BxRq0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQPWxCKPylfsymqgz7RhIPimnkIw"
      />
    </div>
  );
}

export default SearchPage;
