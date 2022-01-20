import type { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from '@apollo/client';
import { errorLink } from '../links/error';
import '../styles/globals.css';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
