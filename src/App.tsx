import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import userManager, {
  loadUser,
  signinRedirect,
  signoutRedirect
} from './auth/user-service';
import AuthProvider from './auth/auth_provider';
import SigninOidc from './auth/SignInOidc';
import SignoutOidc from './auth/SignoutOidc';
import NoteList from './notes/NoteList';

const App: FC<{}> = (): ReactElement => {
  loadUser();
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <button onClick={() => signinRedirect()}>Login</button>
          <button onClick={() => signoutRedirect()}>Logout</button>
        </div>
        <AuthProvider userManager={userManager}>
          <Router>
            <Routes>
              <Route path="/" Component={NoteList}/>
              <Route path='/signout-oidc' Component={SignoutOidc} />
              <Route path='/signin-oidc' Component={SigninOidc}/>
            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
