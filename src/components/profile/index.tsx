import React from "react";
import * as s from "./styled";

const Profile = () => {
  return (
    <s.Wrapper>
      <s.WrapperImage src="https://avatars.githubusercontent.com/u/82184751?v=4" alt="avatar of user" />
      <s.WrapperInfoUser>
        <div>
          <h1>Gabriel José</h1>
          <s.WrapperUsername>
            <h3>Username: </h3>
            <a href="#" target="_blank">gabrieljgs</a>
          </s.WrapperUsername>
        </div>
        <s.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5</span>
          </div>
        </s.WrapperStatusCount>
      </s.WrapperInfoUser>
    </s.Wrapper>
  );
};

export default Profile;
