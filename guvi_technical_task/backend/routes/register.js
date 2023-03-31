const { Mongoose } = require("mongoose")

const registerSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }

})

router.post("/register", (req, res) => {
    try {
        if (register) {
            const registerSchema = new register({
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                dob: req.body.dob,
                gender: req.body.gender,
                age: req.body.age
            })
        }

        else {
            res.send("register are not done")
        }
    }

    catch (error) {
        res.status(400).send(error);
    }
})
const Register = new Mongoose.model("register", userProfile);

module.exports = Register;
