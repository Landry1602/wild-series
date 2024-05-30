// Declare the action

const sayWelcome = (req, res) => {
    console.info(req.query);
    res.send("Bienvenue sur Wild Series !");
  };
  
  // Export it to import it somewhere else
  
  module.exports = { sayWelcome };