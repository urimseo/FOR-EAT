import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
import Survey from "routes/Survey";
import Browse from "routes/Browse";
import WishRecipes from "components/accounts/mypage/WishRecipeAll"
import ReviewRecipes from "components/accounts/mypage/ReviewRecipeAll"

import {isLoginState} from 'atoms/atoms'
import { useRecoilValue } from 'recoil';


const AppRouter = () => {
  const isLogged = useRecoilValue(isLoginState);
  console.log(isLogged)
  return (
    <Router>
      <>
        <ScrollToTop />
          {isLogged ?(
            <>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="" exact element={<Navigate replace to="/recommend" />} />
            <Route path="/recommend" element={<Feed />} />
            <Route path="/category" element={<Category />} />
            <Route path="/ingredient" element={<Ingredient />} />
            <Route path="/search/ingredient" element={<IngredientResult />} />
            <Route path="/recipes/search" element={<Search />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/recipes/:recipe_seq" element={<RecipeDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/:member_seq/mypage" element={<MyPage />} />
            <Route path="/:member_seq/mypage/likes" element={<WishRecipes />} />
            <Route path="/:member_seq/mypage/reviews" element={<ReviewRecipes />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Route>
            </Routes>
            </>
          ):(
           <> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/members/kakao/login" element={<Auth />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
          </>
          )}
      </>
    </Router>
  );
};

export default AppRouter;
