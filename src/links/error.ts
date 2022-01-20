import { onError } from '@apollo/client/link/error';
import Router from 'next/router';

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }): any => {
    console.log(graphQLErrors, networkError, '<<<');
    if (graphQLErrors) {
      // eslint-disable-next-line no-restricted-syntax
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          console.log('Logout Global', err.extensions.fields);
          Router.push('/logout'); // call logout request
          return forward(operation);
        }
      }
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);

      return forward(operation);
    }
  },
);
