import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from "react-router-dom";
import { ProvideAuth, useAuth } from "auth/useAuth";
import LoginPage from "domain/user/LoginPage";
import AdminLayout from "layout/AdminLayout"

// Code copied from reactrouter.com example
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
	let auth = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

function App() {
	return (
		<ProvideAuth>
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={LoginPage} />
					<PrivateRoute path="/admin" component={AdminLayout} />
					<Redirect from="/" to="/admin" />
				</Switch>
			</BrowserRouter>
		</ProvideAuth>
	);
}

export default App;
