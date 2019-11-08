import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/pages/ExpenseDashboardPage";
import AddExpensePage from "../components/pages/AddExpensePage";
import EditExpensePage from "../components/pages/EditExpensePage";
import HelpExpensePage from "../components/pages/HelpExpensePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import NavBar from "../components/layout/NavBar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
