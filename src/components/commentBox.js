import React from 'react';
import CommentList from './commentList.js'

const CommentBox = () => (
      <div className="Comment-box">
        <CommentList data={[
          { id: 1, author: "Adam Żaczek", text: "Best app ever dude!" },
          { id: 2, author: "David Poliszak", text: "Amazing, I stopped drinking after seeing this! Now Im sober for life." },
          { id: 3, author: "Ewa z Wawy", text: "Legit!" }
        ]} />
      </div>
    );

export default CommentBox;
