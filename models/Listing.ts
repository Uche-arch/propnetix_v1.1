// import mongoose from "mongoose";

// const listingSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//       required: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     location: {
//       type: String,
//       required: true,
//     },

//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Listing =
//   mongoose.models.Listing ||
//   mongoose.model("Listing", listingSchema);

// export default Listing;

import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    // amount: {
    //   type: Number,
    //   required: true,
    // },

    duration: {
      type: String,
      enum: ["month", "year"],
      default: "year",
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Listing =
  mongoose.models.Listing || mongoose.model("Listing", listingSchema);

export default Listing;
