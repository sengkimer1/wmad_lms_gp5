import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./components/AppLayout";
import UserAccountViewPage from "./pages/UserAcc/UserAccountViewPagess";
import CreateUserAccountListPage from "./pages/UserAcc/CreatUserAccountListPage"
import NewUserAccount from "./pages/UserAcc/NewUserAccount";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import Create from "./pages/bookCatalog/CreateBookcatalog";
import ViewBookCatalog from "./pages/bookCatalog/View-bookCatalog";
import MemberPage from "./pages/member/MemberPage";
import CreateMember from "./components/CreateListMember"
import ViewMember from "./pages/member/ViewMember";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import BookIssueInformation from "./pages/bookIssue/Bookissue-information"



function App() {
  return (

    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<CreateUserAccountListPage />} />
          <Route path=":id" element={<UserAccountViewPage />} />
          <Route path="new" element={<NewUserAccount />} />
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-catalog/:id" element={<ViewBookCatalog />} />
        <Route path="/book-catalog/new" element={<Create />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/book-issue/:id" element={<BookIssueInformation />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/member/:id" element={<ViewMember />} />
        <Route path="/member/new" element={<CreateMember />} />
{/* refator code */}
      </Route>
    </Routes>


  );

}

export default App;
