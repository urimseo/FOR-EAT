import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "routes/Landing";
import Feed from "routes/recommend/Feed";
import Category from "routes/Category";


const AppRouter = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="recommend" element={<Feed />} />
          <Route path="category" element={<Category />} />
        </Routes>
      </>
    </Router>
  );
};

export default AppRouter;
