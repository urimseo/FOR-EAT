import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ScrollToTop from "./commons/ScrollRestoration";
import Landing from "routes/Landing";
import Feed from "routes/recommend/Feed";
import Category from "routes/Category";
import Auth from "routes/accounts/Auth";
import Home from "routes/Home";
import RecipeDetail from "routes/RecipeDetail";
import MyPage from "routes/accounts/MyPage";
import Ingredient from "routes/recommend/Ingredient";
import IngredientResult from "routes/recommend/IngredientResult";
import Search from "routes/Search";


const AppRouter = () => {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/" element={<Home />}>
            <Route path="/recommend" element={<Feed />} />
            <Route path="/category" element={<Category />} />
            <Route path="/ingredient" element={<Ingredient />} />
            <Route path="/search/ingredient" element={<IngredientResult />} />
            <Route path="/search/ingredient" element={<IngredientResult />} />
            <Route path="/search/title" element={<Search />} />
            <Route path="/members/kakao/login" element={<Auth />} />
            <Route path="/recipes/:recipe_seq" element={<RecipeDetail />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default AppRouter;
