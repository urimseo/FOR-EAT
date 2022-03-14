import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "routes/Landing";
import Feed from "routes/recommend/Feed";
import Category from "routes/Category";
import Auth from "routes/accounts/Auth";


const AppRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recommend" element={<Feed />} />
          <Route path="category" element={<Category />} />
          <Route path="/members/kakao/login" element={<Auth />} />
        </Routes>
      </>
    </Router>
  );
};

export default AppRouter;
