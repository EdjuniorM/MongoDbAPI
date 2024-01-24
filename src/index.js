const express = require("express");
const mongoose = require("mongoose");
const Joi = require('joi');

const app = express();
const port = 9898

app.use(express.json());

const filmSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
})

const Film = mongoose.model("Film", filmSchema);

app.post("/save", async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        imageUrl: Joi.string().uri().required(),
    });

    try {
        const { error, value } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const film = new Film({
            ...value
        });

        await film.save();
        res.status(201).send(film);
    } catch (err) {
        console.error(err);
        res.status(500).send(err)
    }
});

app.get("/", async (req, res) => {
    const films = await Film.find();
    res.send(films)
});

app.put("/:id", async (req, res) => {
    const schemaUpdate = Joi.object({
        name: Joi.string(),
        description: Joi.string(),
        imageUrl: Joi.string().uri(),
    })

    try{
        const {error, value} = schemaUpdate.validate(req.body)
        if(error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const film = await Film.findByIdAndUpdate(req.params.id, {
            ...value
         }, {
            new: true
         });
         res.status(200).send(film);
    } catch (err) {

    }
    
});

app.delete("/:id", async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id);
    res.send(film);
})

app.delete("")

app.listen(port, () => {
    mongoose.connect("connection string")
    console.log(`running port ${port}`)
})