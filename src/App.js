import { lazy, Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout";
import LogInRegisterLayout from "./layouts/LogInRegisterLayout";
import AdminRoute from "./routes/AdminRoute";
import BookingRoute from "./routes/BookingRoute";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";

const Account = lazy(() => import ("./modules/account/pages/Account"))
const DetailPage = lazy(() => import("./modules/detailPage/pages/DetailPage"));
const Login = lazy(() => import("./modules/login/pages/Login"));
const Register = lazy(() => import("./modules/register/pages/Register"));
const Admin = lazy(() => import("./modules/admin/pages/Admin"));
const BookingPage = lazy(() => import("./modules/booking/pages/BookingPage"));
const CheckOutPage = lazy(() => import("./modules/booking/pages/CheckOutPage"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const NotFound = lazy(() => import("./components/NotFound"));
const HomePage = lazy(() => import('./modules/homePage/pages/HomePage'))

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>

            {/* Layout có chung header và footer */}
            <Route exact path={["/", "/detail/:id"]}>
              <MainLayout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>

                  <Route path="/detail/:id">
                    <DetailPage />
                  </Route>
                </Switch>
              </MainLayout>
            </Route>





            <Route exact path={["/login", "/register"]}>
              <LogInRegisterLayout>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>

                  <Route path="/register">
                    <Register />
                  </Route>
                </Switch>
              </LogInRegisterLayout>
            </Route>

            {/* Admin  pages*/}
            <AdminRoute exact path={["/admin", "/admin/movie", "/admin/user"]}>
              <Admin />
            </AdminRoute>


            <BookingRoute path={["/booking/:id", "/booking/:id/checkout"]}>
              <Route exact path="/booking/:id">
                <BookingPage />
              </Route>
              <Route path="/booking/:id/checkout">
                <CheckOutPage />
              </Route>
            </BookingRoute>

            {/* Page not found */}

            <Route path="/account">
              <Account />
            </Route>

            <Route path="/coming-soon">
              <ComingSoon />
            </Route>

            <Route>
              <NotFound />
            </Route>

          </Switch>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}



// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Switch>
//           <MainLayout>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route  path="/detail/:id">
//               <DetailPage />
//             </Route>
//           </MainLayout>
//           <LogInRegisterLayout>
//             <Route  path="/login">
//               <Login />
//             </Route>
//             <Route  path="/register">
//               <Register />
//             </Route>
//           </LogInRegisterLayout>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }




export default App;
