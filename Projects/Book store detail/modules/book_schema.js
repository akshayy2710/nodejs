import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true

  },
  publisher: {
    type: String

  },
  publishedYear: {
    type: Number

  },
  price: {
    type: Number,
    min: 0

  },
  totalCopie: {
    type: Number,
    default: 1,
    min: 1

  },
  availableCopie: {
    type: Number,
    default: 1,
    min: 0

  },
  shelfNo: {
    type: String

  },
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;
