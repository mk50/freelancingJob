import { Route, Switch } from "react-router-dom";
import SingleCenterPage from "./pages/SingleCenterPage";
import NCPage from "./pages/NCPage";
import NewAuditPage from "./pages/NewAuditPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import MySchedulePage from "./pages/MySchedulePage";
import AuditHistoryPage from "./pages/AuditHistoryPage";
import ProfileListPage from "./pages/ProfileListPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ResetSuccessPage from "./pages/ResetSuccessPage";
import NCFilledPage from "./pages/NCFilledPage";
import HomeAuditPage from "./pages/HomeAuditPage";
import UnscheduledCentersPage from "./pages/UnscheduledCentersPage";
import ScheduleVisitPage from "./pages/ScheduleVisitPage";
import AuditHistoryOpenedPage from "./pages/AuditHistoryOpenedPage";
import RescheduledVisitPage from "./pages/RescheduleVisitPage";
import HomeReviewPage from "./pages/HomeReviewPage";
import NCOpenCompletedPage from "./pages/NCOpenCompletedPage";
import NcOpCoCenterPage from "./pages/NcOpCoCenterPage";
import NCListReviewer from "./pages/NCListReviewer";
import AuditSchedulePage from "./pages/AuditSchedulePage";

function App() {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/my-schedule">
          <MySchedulePage />
        </Route>
        <Route path="/nc-list">
          {/* <NCListPage /> */}
          <NCListReviewer />
        </Route>
        <Route path="/profile-list/:ncId">
          <ProfileListPage />
        </Route>
        <Route path="/centers/:centerId">
          <SingleCenterPage />
        </Route>
        {/* ///////////////// */}
        <Route path="/add-question">
          <NCPage />
        </Route>
        <Route path="/nc/:questionId">
          <NCFilledPage />
        </Route>
        {/* ///////////////// */}
        <Route path="/new-audit/:centerId">
          <NewAuditPage />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordPage />
        </Route>
        <Route path="/reset-success">
          <ResetSuccessPage />
        </Route>
        {/* //////// NEW PAGES P1 //////// */}
        <Route path="/home-audit">
          <HomeAuditPage />
        </Route>
        <Route path="/unscheduled-centers">
          <UnscheduledCentersPage />
        </Route>
        <Route path="/schedule-visit/:centerId">
          <ScheduleVisitPage />
        </Route>
        <Route path="/audit-history">
          <AuditHistoryPage />
        </Route>
        <Route path="/audit-history-opened/:centerId">
          <AuditHistoryOpenedPage />
        </Route>
        <Route path="/reschedule-visit/:centerId">
          <RescheduledVisitPage />
        </Route>
        {/* //////// NEW PAGES P1 //////// */}

        {/* //////// NEW PAGES P2 //////// */}
        <Route path="/home-review">
          <HomeReviewPage />
        </Route>
        <Route path="/nc-open-completed-centers">
          <NCOpenCompletedPage />
        </Route>
        <Route path="/nc-open-completed/:centerId">
          <NcOpCoCenterPage />
        </Route>
        <Route path="/nc-list-reviewrs">
          <NCListReviewer />
        </Route>
        <Route path="/audit-schedule">
          <AuditSchedulePage />
        </Route>
        {/* //////// NEW PAGES P2 //////// */}
      </Switch>
    </ScrollToTop>
  );
}

export default App;
