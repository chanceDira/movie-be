import { gql } from "apollo-server-express"

const typeDefs = gql`
type Movie {
    id: String
    title: String
    year: Int
    image: String
}

type Query {
  hello: String

  getAllMovies: [Movie]
  getSingleMovie(id: ID): Movie
}


type Mutation {
    registerMovie(title: String, year: Int, image: String): Movie
    deleteMovie(id: ID): String
    updateMovie(id: ID, title: String, year: Int, image: String): Movie
}

`

export default typeDefs
