import "./App.css";
import { getUsers } from "./api/users";
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/navbar/navBar";
import Home from "./components/home/home";
import AddPost from "./components/addPost/addPost";
import SubRedditIndex from "./components/subRedditIndex/subRedditIndex";
import SubRedditHome from "./components/subredditHome/subredditHome";

import LoginPage from "./pages/loginPage";
//step 1, setup redux
// step 2, the rest of the application

function App() {
    const token = useSelector((state) => state.user.jwt);
    console.log(token);

    return !token ? (
        <LoginPage />
    ) : (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/add-post">
                    <AddPost />
                </Route>

                <Route exact path="/r">
                    <SubRedditIndex />
                </Route>

                <Route path="/r/:subreddit">
                    <SubRedditHome />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
