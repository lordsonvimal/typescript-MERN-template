import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true}
);

UserSchema.pre("save", async function(next: mongoose.HookNextFunction) {
  const user = this as UserDocument;

  // Only hash the password if it is modified/new
  if (!user.isModified("password")) return next();

  const saltFactor = Number(process.env.SALT_FACTOR);
  const salt = await bcrypt.genSalt(saltFactor);

  const hash = await bcrypt.hashSync(user.password, salt);
  // Replace the password
  user.password = hash;

  return next();
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch(() => false);
};

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;