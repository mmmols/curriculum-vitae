const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Companies {
        id: ID
        title: String
        started_at: String
        ended_at: String
    }

    type Query {
        companies: [Companies]
    }
`;

const companies = [
    {
        id: Date.now(),
        title: 'Firtal',
        started_at: 'Nov 2017',
        ended_at: 'Present'
    }
];

const resolvers = {
    Query: {
        companies: () => companies,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => console.log(`Server is running at ${url}`));
