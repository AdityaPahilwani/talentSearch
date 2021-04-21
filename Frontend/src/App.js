/** @format */

import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Paths from "./Constants/paths";
import HomePage from "./Pages/Homepage/HomePage";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN, me } from "./Custom Queries/user";
import Feed from "./Pages/Feed/Feed";
import SignIn from "./Pages/Sign In/SignIn";
import { cache } from ".";
import Settings from "./Pages/User Settings/Settings";
import Requests from "./Pages/Requests/Requests";
import Search from "./Pages/Search/Search";
import Post from "./Pages/Post/Post";

const App = () => {
  const { data, error } = useQuery(me);
  const history = useHistory();
  try {
    if (error) {
      // if (history.location.pathname !== "/") {
      history.push("/signin");
      // }
    }
    if (data.getMe) {
      cache.writeQuery({
        query: IS_LOGGED_IN,
        data: {
          loggedIn: true,
          id: data.getMe.id,
          name: data.getMe.name,
          gender: data.getMe.gender,
          email: data.getMe.email,
          profilePic: data.getMe.profilePic,
          bio: data.getMe.bio,
          userType: data.getMe.userType,
        },
      });
       }
  } catch (error) {
    // console.log("erro", JSON.stringify(error, null, 2));
  }
  return (
      <Switch>
        <Route path={Paths.posts} component={Post} />
        <Route path={Paths.profile} component={Profile} />
        <Route path={Paths.signIn} exact component={SignIn} />
        <Route path={Paths.register} exact component={Register} />
        <Route path={Paths.settings} exact component={Settings} />
        <Route path={Paths.feed} exact component={Feed} />
        <Route path={Paths.requests} exact component={Requests} />
        <Route path={Paths.search} exact component={Search} />
        <Route path={Paths.homepage} exact component={HomePage} />
      </Switch>
  );
};

export default App;
