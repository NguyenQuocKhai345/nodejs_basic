
const getHomePage = (req, res) => {
    return res.send('Hello World from controller');
}

const getABC = (req, res) => {
    return res.send('Hello World from controller abc');
}

module.exports = {
    getHomePage,
    getABC
}