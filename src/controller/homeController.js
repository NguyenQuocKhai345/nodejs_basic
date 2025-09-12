
const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    return res.send('Hello World from controller abc');
}

module.exports = {
    getHomePage,
    getABC
}