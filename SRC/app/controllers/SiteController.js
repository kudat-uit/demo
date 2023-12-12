class SiteController {
  // GET /
  home(req, res) {
    res.render('home', { title: 'Game World' });
  }
}

module.exports = new SiteController();
