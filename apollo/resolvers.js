import gql from 'graphql-tag'

export const typeDefs = gql`
	type Query {
		isLogin: Boolean!
	}
`

export const resolvers = {
	Query: {
	},
}