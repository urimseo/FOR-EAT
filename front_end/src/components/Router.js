import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "routes/Landing";
import Feed from "routes/recommend/Feed";
import Category from "routes/Category";
import Auth from "routes/accounts/Auth";
import Home from "routes/Home";
import RecipeDetail from "routes/RecipeDetail";
import MyPage from "routes/accounts/MyPage";


const AppRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          
          <Route path="" element={<Landing />} />
        <Route path="/" element={<Home />}>
          <Route path="/recommend" element={<Feed />} />
          <Route path="/category" element={<Category />} />
          <Route path="/members/kakao/login" element={<Auth />} />
          <Route path="/recipes/1" element={<RecipeDetail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
          {/* <Route path="/recipes/:recipe_seq" element={<RecipeDetail />} /> */}
        </Routes>
      </>
    </Router>
  );
};

export default AppRouter;
