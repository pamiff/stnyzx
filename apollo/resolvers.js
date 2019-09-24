import gql from 'graphql-tag'

export const typeDefs = gql`
	type Query {
		isLogin: Boolean!
		post(id: String!): Post!
	}
	type Mutation {
		upvotePost(id: String!): Post!
	}
	type Post {
		id: String
		score: Int!
	}
`

const postQuery = gql`
	query {
		somepost {
			id,
			score
		}
	}
`

export const resolvers = {
	Query: {
		post: (_, {id}, {cache}) => {
			const data = cache.readQuery({query: postQuery})
			console.log(cache)
			return data.somepost.find(item => item.id === id)
		}
	},
	Mutation: {
		upvotePost: (_, {id}, {cache}) => {
			const data = cache.readQuery({query: postQuery})
			const currentItem = data.somepost.find(item => item.id === id)
			currentItem.score += 1
			console.log(cache)
			cache.writeQuery({query: postQuery, data})
			return currentItem
		}
	}
}