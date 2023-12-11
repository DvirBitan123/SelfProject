import { books, authors, Images } from '../../DATA/data.js';

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find(book => book.id === args.id),
    authors: () => authors,
    author: (_, args) => authors.find(author => author.id === args.id),
    Images: () => Images,
    Image: (_, args) => Images.find(Image => Image.id === args.id)
  },
  Mutation: {
    addBook: (_, args) => {
      const newBook = {
        id: args.input.id,
        title: args.input.title,
        author: args.input.author,
        genre: args.input.genre,
        authorId: args.input.authorId
      }
      books.push(newBook)
      return newBook
    },
    addImage: (_, args) => {
      const newImage = {
        id: args.input.id,
        name: args.input.name,
      }
      Images.push(newImage)
      return newImage
    },
  }
};