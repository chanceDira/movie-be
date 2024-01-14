import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {
      hello: () => {
        return 'Hello world'
      },
      getAllMovies: async () => {
        const movies = await prisma.movie.findMany()
        return movies
      },
      getSingleMovie: async (parent, args, context, info) => {
        const { id } = args
        const movie = await prisma.movie.findUnique({
          where: {
            id,
          },
        })
        return movie
      }
    },
    Mutation: {
      registerMovie: async (parent, args, context, info) => {
        const { title, year, image } = args
        const registeredMovie = await prisma.movie.create({
          data: {
            title,
            year,
            image
          },
        })
        return registeredMovie
      },
      deleteMovie: async (parent, args, context, info) => {
        const { id } = args
        const deleteMovie = await prisma.movie.delete({
          where: {
            id,
          },
        })
        return "Movie deleted"
      },
      updateMovie: async (parent, args, context, info) => {
        const { id, title, year, image } = args
        const updateMovie = await prisma.movie.update({
          where: {
           id,
          },
          data: {
            title,
            year,
            image,
          },
        })
        return updateMovie
      }
    }
  }

export default resolvers