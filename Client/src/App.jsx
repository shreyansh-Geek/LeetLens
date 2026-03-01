import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"
import HomePage from "./Pages/HomePage"
import GeneratePage from "./Pages/GeneratePage"
import MyGenerations from "./Pages/MyGenerationsPage"
import CommunityPage from "./Pages/CommunityPage"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/my-generations" element={<MyGenerations />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App