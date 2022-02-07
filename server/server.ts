import {ApolloServer} from "apollo-server";
import {gateway} from '../gateway/gateway';

export const server = new ApolloServer({gateway,});





