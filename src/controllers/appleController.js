const Apple = require('../models/apple');

const getAppleById = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const apple = await Apple.findByPk(id);

        if (!apple) {
            return res.status(400).json({ message: "L'ID fourni n'est pas trouvé en BDD" });
        }

        return res.status(200).json(apple);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

const getAppleByColor = async (req, res) => {
    try {
        const { color } = req.params;
        const allApple = await Apple.findAll({
            where: {
              color: color
            }
          });

        if (!allApple) {
            return res.status(400).json({ message: "La couleur fournie n'est pas trouvé en BDD" });
        }

        return res.status(200).json({ data: allApple });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};


const createApple = async (req, res) => {
    
    const apple = await Apple.create({
        color: req.body.apple.color,
        variety: req.body.apple.variety,
        weight: req.body.apple.weight
    })

    res.json(apple);
};

module.exports = { getAppleById, getAppleByColor, createApple };
