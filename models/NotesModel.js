import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      descp: { type: String, required: true, unique: true },

    },
    {
      timestamps: true,
    }
  );
const notee = mongoose.model('notee', noteSchema);
export default notee;