import { Route, Routes } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import BlogList from './components/BlogList';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<BlogList />} />
				<Route path="/blogDetails/:id" element={<BlogDetails />} />
			</Routes>
		</div>
	);
}

export default App;
