import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    style: {
      type: String,
      required: true,
      enum: ["bold", "minimal", "photo", "illustrated", "tech"],
    },

    aspect_ratio: {
      type: String,
      enum: ["16:9", "1:1", "9:16"],
      default: "16:9",
    },

    color_scheme: {
      type: String,
      enum: [
        "vibrant",
        "warm",
        "cool",
        "pastel",
        "sunset",
        "ocean",
        "forest",
        "purple",
        "neon",
        "retro",
        "luxury",
        "mono",
      ],
    },

    text_overlay: {
      type: Boolean,
      default: false,
    },

    image_url: {
      type: String,
      default: "",
    },

    user_prompt: {
      type: String,
      trim: true,
    },

    prompt_used: {
      type: String,
      trim: true,
    },

    model_used: {
      type: String,
      enum: ["basic", "premium"],
      default: "premium",
    },

    isGenerating: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const thumbnailModel =
  mongoose.model("thumbnail", thumbnailSchema);

export default thumbnailModel;