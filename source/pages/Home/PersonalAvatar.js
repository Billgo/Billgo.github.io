import React from "react";
import { Image, Card, Button } from "teasim";

export default (props) => (
  <div className="ds-block ba-auto mb-wide">
    <div className="ds-fable a-avatar">
      <div className="a-avatar-brand">
        <Image
          className="ds-block dw-100"
          defaultSource="https://avatars3.githubusercontent.com/u/5780482?s=460&v=4"
          src="https://avatars3.githubusercontent.com/u/5780482?s=460&v=4"
        />
      </div>
      <div className="a-avatar-board">
        <div className="pa-medium">
          <h3 className="my-none pb-medium">YE WENBIAO</h3>
          <hr className="mb-medium" />
          <ul className="list-none">
            <li>yewenbill@outlook.com</li>
            <li>Singapore ⇄ China</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);