exports.findAuthorById = (req,res) => {
    const {id} = req.params;
    res.send({
        status: 200,
        message: 'Successfully',
        data: 
            {
                id: parseInt(id),
                name: 'Jonathan WK',
                city: 'Jakarta',
                news: [
                    {}
                ]
            }
    });
}

exports.findAllAuthors = (req, res) => {
    res.send({
        status: 200,
        message: 'Successfully',
        data: [
            {
                id: 1,
                name: 'Jonathan WK',
                city: 'Jakarta',
                news: [
                    {}
                ],
            },
            {
                id: 2,
                name: 'Jacky K',
                city: 'Surabaya',
                news: [
                    {}
                ]
            }
        ]
    })
}