import {ApolloGateway} from '@apollo/gateway';
import { readFileSync } from 'fs';
import { Path } from 'typescript';

const dirname: string = __dirname + '/supergraph.graphql';
export const supergraphSdl = readFileSync(dirname).toString() ;

export const gateway = new ApolloGateway({
  supergraphSdl
});


