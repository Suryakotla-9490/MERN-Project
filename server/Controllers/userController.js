import userModel from "../Models/userModel.js";
import jwt from 'jsonwebtoken';

let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Register User
export const userRegistration = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        let emailValid = regex.test(email);
        const user = await userModel.findOne({ email: email })
        if (user) {
            res.send({
                status: "Failed",
                message: "Email already exists"
            })
        } else if (name === "") {
            return res.status("401").json({ message: "Name is required" })
        } else if (email === "") {
            return res.status(400).json({ message: "Email is required" });
        } else if (!emailValid) {
            return res.status(400).json({ message: "Email is not valid" });
        } else if (password === "") {
            return res.status(400).json({ message: "Password required" });
        } else if (confirmPassword === "") {
            return res.status(400).json({ message: "confirmpassword required" });
        } else if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password incorrect" });
        } else {
            await userModel.create(req.body);
            return res.status(200).json({ message: "Registered Successfully" })
        }
    } catch (err) {
        console.log('error', err)
    }

}

// Login User
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        let existingUser = await userModel.findOne({ email: email })
        if (email === "") {
            return res.status(400).json({ message: "Email is required" });
        } else if (password === "") {
            return res.status(400).json({ message: "Password is required" });
        } else if (!existingUser) {
            return res.status(400).json({ message: "Email not existed" });
        } else if (existingUser.password !== password) {
            return res.status(400).json({ message: "password not matched" });
        } else {
            const payload = {
                user: {
                  id: existingUser.id,
                },
              };
              jwt.sign(
                payload,
                "jwtSecret",
                async (err, token) => {
                  try {
                    if (err) throw err;
                    else {
                      await res.json({ token });
                    }
                  } catch (e) {
                    console.log(e);
                  }
                }
              );
        }
    } catch (e) {
        console.log(e);
    }
}


