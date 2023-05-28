class NewsController {
    // [GET] /news
    index(req,res){
        res.render('news');
    }
    //[Get] /news/:slug
    show(req,res){
        res.render('search');
    }
}

module.exports = new NewsController;