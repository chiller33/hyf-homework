import express from 'express'
import fs from 'fs';

const app = express();
const router = express.Router();
const port = process.env.PORT || 9999;

app.use(express.json());

const documents = JSON.parse(fs.readFileSync('./documents.json', 'utf-8'));

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

router.get("/search", (req, res) => {
    const q = req.query.q;

    if (!q) {
        return res.json(documents);
    }

    const filtered = documents.filter(doc =>
        Object.values(doc).some(value =>
            typeof value === 'string' && value.includes(q)
        )
    );
    res.json(filtered);
});

router.post('/search', (req, res) => {
    const q = req.query.q;
    const fields = req.body.fields;

    if (q && fields) {
        return res.status(400).json({
            error: "Cannot use both query parameter 'q' and body 'fields'"
        });
    }

    if (q) {
        
        const filtered = documents.filter(doc =>
            Object.values(doc).some(value =>
                typeof value === 'string' && value.includes(q)
            )
        );
        
        return res.json(filtered);
    }

    if (fields && typeof fields === 'object') {
        const filtered = documents.filter(doc =>
            Object.entries(fields).every(([key, val]) => doc[key] == val)
        );

        return res.json(filtered);
    }

    res.json(documents);
});

router.get('/documents/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const doc = documents.find(d => d.id === id);

    if (!doc) {
        return res.status(404).send({ error: 'Document not found' });
    }

    res.json(doc);
});

app.use(router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});