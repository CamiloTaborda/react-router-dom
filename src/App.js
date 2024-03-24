import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./Components/HomePage";
import { ProfilePage } from "./Components/ProfilePage";
import { BlogPage } from "./Components/BlogPage";
import { BlogPost } from "./Components/BlogPost";
import { LoginPage } from "./Components/LoguinPage";
import { LogoutPage } from "./Components/LogoutPage";
import { AuthProvider, AuthRoute } from "./auth";


function App() {
  return (
   <>
   <HashRouter>
    <AuthProvider>
    <Menu />

    <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/blog" element={<BlogPage />}>
    <Route path=":slug" element={<BlogPost />} />
    </Route>
 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/logout" element={
      <AuthRoute>
        <LogoutPage />
      </AuthRoute>
    } />
    <Route path="/profile" element={
      <AuthRoute>
        <ProfilePage />
      </AuthRoute>
    } />
 
    <Route path="*" element={<p>Not Found</p>} />
    </Routes>
    </AuthProvider>
   </HashRouter>
   </>
  );
}

export default App;
