import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import Music from "./Components/Music/Music";
import Groups from "./Components/Groups/Groups";
import VideoGallery from "./Components/VideoGallery/VideoGallery";
import News from "./Components/News/News";
import Documents from "./Components/Documents/Documents";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/news' component={News} />
          <Route 
            path='/dialogs' 
            render={() => <DialogsContainer 
                            dispatch={props.dispatch}
                            companionData={props.state.messagesPage} />} />
          <Route path='/groups' component={Groups} />
          <Route 
            path='/profile' 
            render={() => <ProfileContainer
                            dispatch={props.dispatch}
                            postsData={props.state.profilePage} />} />
          <Route path='/photoGallery' component={PhotoGallery} />
          <Route path='/videoGallery' component={VideoGallery} />
          <Route path='/documents' component={Documents} />
          <Route path='/music' component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
