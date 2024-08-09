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
import ViewBookCatalog from "./pages/bookCatalog/View-bookCatalog";


function App() {
  return (
    
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<CreateUserAccountListPage />} />
         
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/book-catalog/:id" element={<ViewBookCatalog />} />
     

      </Route>
    </Routes>
    
  );
  
}

export default App;
