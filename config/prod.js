const mongoUser = process.env.MONGOUSER;
const mongoPass = process.env.MONGOPASS;
const mongoHost = process.env.MONGOHOST || 'localhost';
const mongoURI = mongoHost === 'localhost' ? 'mongodb://localhost:27017' : `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:27017/?authSource=admin`;
const secretOrKey = process.env.JWT_SECRET || 'secret';
module.exports = {
  mongoURI,
  secretOrKey,
};
