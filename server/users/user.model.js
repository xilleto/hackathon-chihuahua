//AMO INI IT MODEL HIN USER HA DATABASE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//ITO KAILANGAN NIYO SA PAG REGISTER EXCPET SA HASH AND CREATED DATE
const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ["VOLUNTEER", "NORMAL"], default: "NORMAL" },
  cellphone_number: { type: String, required: true },
  volunteer_cellphone_number: { type: String, required: false },
  createdDate: { type: Date, default: Date.now },
  address: { type: String, required: true },
  lng: { type: Number, required: true },
  lat: { type: Number, required: true },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("User", schema);
