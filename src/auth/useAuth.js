import {createContext, useContext, useState} from "react";

// Majority of the code below is copied from https://usehooks.com/useAuth/
// The React Router website also uses the above mechanism.

// The simplest auth provider.  We could use firebase auth here, or any identity provider like Google
const fakeAuth = {
	isAuthenticated: false,

	signin(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},

	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

// hooks that provide two things:
// 1. state: user
// 2. lifecycle events: signin, singout etc.
function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signin = cb => {
		return fakeAuth.signin(() => {
			setUser("user");
			cb();
		});
	};

	const signout = cb => {
		return fakeAuth.signout(() => {
			setUser(null);
			cb();
		});
	};

	return {
		user,
		signin,
		signout
	};
}

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};