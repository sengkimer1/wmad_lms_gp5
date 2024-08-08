import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
// import UserAccountPage from "./pages/userAccount/UserAccountPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
// import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
import CreateUserAccountListPage from "./pages/UserAcc/CreatUserAccountListPage"
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import UserAccountViewPage from "./pages/UserAcc/UserAccountViewPagess";
import NewUserAccount from "./pages/UserAcc/NewUserAccount";

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<CreateUserAccountListPage />} />
          {/* <Route index element={<UserAccountDetailsPage />} /> */}
    
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/user_accounts/:id" element={<UserAccountViewPage />} />
        <Route path="/form" element={<NewUserAccount />} />
        
      </Route>
    </Routes>
    
    
  );
  
}

export default App;
