const notFound = (req, res) => res.status(404).send("Route does note exits");

module.exports = notFound;
