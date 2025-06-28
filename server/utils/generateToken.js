import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateJWT(owner_id) {
  // payload is just an object which usually contains some information about user but not confidential information such as password.
  const payload = {
    user: {
      id: owner_id,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}
