import mongoose from 'mongoose';

var bookSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  isbn:{type:String,required:true, unique:true, index:true},
  title: String,
  description: String,
  releaseDate: mongoose.Schema.Types.Date
  // TODO update Schema to a more detailed one
});

let book = mongoose.model('book', bookSchema);

module.exports = book;

module.exports.getListOfBooks = () => {
  return new Promise((resolve, reject) => {
    user.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getBookById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
        id: id
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getBooksByTitle = (root, {title}) => {
  return new Promise((resolve, reject) => {
    user.findOne({
      // TODO update to $reg, so the search won't be strict
      title: title
    }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.addBook = (root, {isbn, title, description, releaseDate}) => {
  var newBook = new book({isbn:isbn,title:title,description:description,releaseDate:releaseDate});

  return new Promise((resolve, reject) => {
    newBook.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
}

module.exports.updateBook = (root, {id,isbn, title, description, releaseDate}) => {
  var updateBook = {isbn:isbn, title:title, description:description, releaseDate:releaseDate};
  return new Promise((resolve, reject) => {
    // TODO update this -_- really not what I should update here
    book.findOneAndUpdate(
        { id: id },
        { $set: updateUser },
        { returnNewDocument: true }
    ).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
}