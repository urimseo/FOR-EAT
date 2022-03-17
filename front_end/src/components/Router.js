import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "routes/Landing";
import Feed from "routes/recommend/Feed";
import Category from "routes/Category";
import Auth from "routes/accounts/Auth";
<<<<<<< Updated upstream
import Home from "routes/Home";
=======
import RecipeDetail from "routes/RecipeDetail";
>>>>>>> Stashed changes


const AppRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          
          <Route path="" element={<Landing />} />
        <Route path="/" element={<Home />}>
          <Route path="/recommend" element={<Feed />} />
          <Route path="category" element={<Category />} />
          <Route path="/members/kakao/login" element={<Auth />} />
<<<<<<< Updated upstream
        </Route>
=======
          {/* <Route path="/recipes/:recipe_seq" element={<RecipeDetail />} /> */}
          <Route path="/recipes/1" element={<RecipeDetail />} />
>>>>>>> Stashed changes
        </Routes>
      </>
    </Router>
  );
};

export default AppRouter;
