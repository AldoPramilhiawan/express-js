const fs = require('fs');
const path = require('path');

exports.findAllNews = (req,res) => {
    res.send({
        status: 200,
        message: 'Successfully',
        data: [
            {
                id: 1,
                title: 'Kasus Covid 19 Meningkat di Indonesia',
                author: 'Jonathan WK',
                desc: 'COVID-19 varian omicron telah tersebar di beberapa kota besar terutama wilayah Jabodetabek',
                image: 'covid-19.png'
            },
            {
                id: 2,
                title: 'UEFA EUROPA LEAGUE: Napoli 2 - 4 Barcelona',
                author: 'Jonathan WK',
                desc: 'Dalam Lanjutan Europa League, tim asal catalan FC Barcelona berhasil menundukkan Napoli di kandangnya Stadion Diego Armando Maradona dengan skor meyakinkan 2-4',
                image: 'Barcelona-Napoli.png'
            }
        ]
    });
}

exports.findNewsById = (req,res) => {
    res.json({
        status: 200,
        message: 'Successfully',
        data:
            {
                id: req.params.id,
            }
    })
}

exports.createNews = (req,res) => {
    const {title, author, desc} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../uploads', image.originalname);
        fs.renameSync(image.path, target)
        res.json({
            status: 200,
            message: 'Successfully',
            data: {
                title,
                author,
                desc,
                date: new Date().toLocaleDateString(),
                image: req.file.originalname,
            }
        });
        res.sendFile(target);
    }
}