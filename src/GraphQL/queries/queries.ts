export const typeDefs = `
  enum Genre { 
    Mystery 
    Fantasy 
    Classic 
    Fiction 
  }

  type Book {
    id: ID!
    title: String
    author: String
    genre: Genre
    authorId: ID!
  }

  type Author {
    id: ID!
    name: String
    books: [Book]
  }
  type Image {
    id: ID!
    name: String
  }

  input inputBook {
    id: ID!
    title: String
    author: String
    genre: Genre
    authorId: ID!
  }
  input inputImage {
    id: ID!
    name: String
  }
  
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    Images: [Image]
    Image(id: ID!): Image
  },
  type Mutation {
    addBook(input: inputBook): Book
    addImage(input: inputImage): Image

  }`;