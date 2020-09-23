import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            _id,
            url,
            channel,
            likes,
            shares,
            messages,
            description,
            song,
          }) => (
            <Video
              key={_id}
              url={url}
              channel={channel}
              likes={likes}
              description={description}
              song={song}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
