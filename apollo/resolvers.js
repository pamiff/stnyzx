import gql from 'graphql-tag'

export const typeDefs = gql`
	type Query {
		isLogin: Boolean!
		token: String!
	}
	type Mutation {
		login: String!
	}
`


export const resolvers = {
	Query: {
		// post: (_, {id}, {cache}) => {
		// 	const data = cache.readQuery({query: postQuery})
		// 	console.log(cache)
		// 	return data.somepost.find(item => item.id === id)
		// },
		isLogin: (a, b, c) => {
			console.log(a, b, c)
		}
	},
	Mutation: {
		// upvotePost: (_, {id}, {cache}) => {
		// 	const data = cache.readQuery({query: postQuery})
		// 	const currentItem = data.somepost.find(item => item.id === id)
		// 	currentItem.score += 1
		// 	console.log(cache)
		// 	cache.writeQuery({query: postQuery, data})
		// 	return currentItem
		// }
	}
}