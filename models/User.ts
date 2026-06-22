

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     kindeId: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     name: String,

//     email: String,

//     username: {
//       type: String,
//       unique: true,
//     },

//       avatar: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User =
//   mongoose.models.User ||
//   mongoose.model("User", userSchema);

// export default User; 

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     kindeId: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     name: String,

//     email: String,

//     username: {
//       type: String,
//       unique: true,
//     },

//     avatar: {
//       type: String,
//       default: "",
//     },

//     phone: {
//       type: String,
//       default: "",
//     },

//     whatsapp: {
//       type: String,
//       default: "",
//     },

//     bio: {
//       type: String,
//       default: "",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User =
//   mongoose.models.User ||
//   mongoose.model("User", userSchema);

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    kindeId: {
      type: String,
      required: true,
      unique: true,
    },

    name: String,

    email: String,

    username: {
      type: String,
      unique: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

export default User;