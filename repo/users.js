const fs = require("fs");
const crypto = require("crypto");

class UsersRepository {
  constructor(filename) {
    // Check if file exists
    // If not create one
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  // Generate random ID
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  // Get all users information from file
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }
}

//Testing!!!
const test = async () => {
  const repo = new UsersRepository("users.json");

  await repo.getAll();
};

test();

// module.exports = new UsersRepository("users.json");
