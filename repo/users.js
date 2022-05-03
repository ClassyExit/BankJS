const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const Repo = require("./repo");

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repo {
  // Create a user with given attributes
  async create(attrs) {
    attrs.id = this.randomId();

    // Encrypt the password
    const salt = crypto.randomBytes(8).toString("hex");
    const buf = await scrypt(attrs.password, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buf.toString("hex")}.${salt}`,
    };
    records.push(record);

    await this.writeAll(records);

    return record;
  }

  // Get a list of all users

  // Compare supplied password with stored password
  async comparePasswords(saved, supplied) {
    // Saved -> password saved in our database. 'hashed.salt'
    // Supplied -> password given to us by a user trying sign in
    // Result: Add salt to supplied password to see if match
    const [hashed, salt] = saved.split(".");
    const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

    return hashed === hashedSuppliedBuf.toString("hex");
  }
}

module.exports = new UsersRepository("users.json");
