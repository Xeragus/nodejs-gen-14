import Navbar from '../../partials/Navbar';
import PostsTable from '../../components/posts/Table';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Link to="/create">Create new</Link>
      <PostsTable />
    </div>
  )
}

export default App;