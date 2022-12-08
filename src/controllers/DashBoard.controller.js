const mainView = (req, res) => {
  res.render("home");
};

const tablesView = (req, res) => {
  res.render("tables");
};

const notifyView = (req, res) => {
  res.render("notifications");
};
export const DsB = {
  mainView,
  tablesView,
  notifyView,
};
