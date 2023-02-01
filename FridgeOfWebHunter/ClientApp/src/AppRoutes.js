import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AppRoutes = [
  {
    index: true,
    path: '/',
    element: <Main />
  },
  {
    path: '/recipes',
    element: <Recipes />
  },
  {
    path: '/recipes/:id',
    element: <RecipePage />
  },
  {
    path: '/ingredients',
    element: <Ingredients />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
];

export default AppRoutes;
