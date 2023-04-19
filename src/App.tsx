import { FC } from 'react'
import { Layout } from 'antd'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client'



const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          currentRepo: {
            
          },
        },
      },
    },
  }),
})

const App: FC = () => {

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Layout className='site-layout' style={{ marginLeft: 200 }}>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Created by Huy312100
          </Layout.Footer>
        </Layout>
      </Layout>
    </ApolloProvider>
  )
}
export default App
  