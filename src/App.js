import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import AppRoutes from './navigation/Routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRoutes/>
    </ApolloProvider>
  );
}

export default App;
