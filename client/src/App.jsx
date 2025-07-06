import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_TODOS = gql`
  query GetAllTodos {
    getTodos {
      completed
      title
      user {
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_ALL_TODOS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todos</h1>
      {data?.getTodos?.map((todo, index) => (
        <div key={index}>
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <p>User: {todo.user?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;