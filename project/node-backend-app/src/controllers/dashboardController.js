const dashboardController = {
    renderDashboard: (req, res) => {
        // Logic to render the dashboard view
        res.render('dashboard', { user: req.user });
    },

    logout: (req, res) => {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/login');
        });
    }
};

module.exports = dashboardController;