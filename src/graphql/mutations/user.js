import { gql } from 'apollo-boost';

export const SIGNUP = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    createUser(
        input:{
        name: $name,
        authProvider: {
          credentials: {
            email: $email,
            password: $password
          }
          }
          }
      ) {
        id
        name
        email
      }
  }
`;

export const SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    signinUser(
        input: {credentials: {email: $email, password: $password}}
      ) {
        token
        user{
          id
        }
      }
  }
`;