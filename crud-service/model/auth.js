import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

// how our document look like
const AuthSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

autoIncrement.initialize(mongoose.connection);
AuthSchema.plugin(autoIncrement.plugin, "auth");
// we need to turn it into a model
const postAuth = mongoose.model("auth", AuthSchema);

export default postAuth;
