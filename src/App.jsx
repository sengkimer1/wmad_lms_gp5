import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateUserAccountListPage from "./pages/UserAcc/CreatUserAccountListPage"
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import ViewBookCatalog from "./pages/bookCatalog/View-bookCatalog";
import CreateMember from "./components/CreateListMember"

import ViewMember from "./pages/member/ViewMember";

import UserAccountViewPage from "./pages/UserAcc/UserAccountViewPagess";
import NewUserAccount from "./pages/UserAcc/NewUserAccount";
import Create from "./pages/bookCatalog/CreateBookcatalog";


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
     


        <Route path="/view-member/:id" element={<ViewMember />} />

        <Route path="/Create-member/:id" element={<CreateMember />} />


        <Route path="/user_accounts/:id" element={<UserAccountViewPage />} />
        <Route path="/form" element={<NewUserAccount />} />
        <Route path="/create-book-catalog" element={<Create />} />



      </Route>
    </Routes>
    
    
  );
  
}

export default App;
