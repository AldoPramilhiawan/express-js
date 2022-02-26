exports.findNewsByCategory = (req,res) => {
    const {category} = req.params;
    res.send({
        status: 200,
        message: 'Successfully',
        category: category,
        data: [
            {},
            {},
        ]
    })
}

exports.findAllCategories = (req,res) => {
    res.send({
        status: 200,
        message: 'Successfully',
        category: [
            {
                id:1,
                category: 'Politic'
            },
            {
                id: 2,
                category: 'Sports' 
            },
            {
                id: 3,
                category: 'Health'
            },
        ]
    })
}