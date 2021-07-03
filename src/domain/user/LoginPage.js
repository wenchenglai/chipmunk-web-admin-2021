import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { useAuth } from "auth/useAuth";

import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

import loginPageStyle from "asset/jss/domain/user/LoginPageStyle.js";
// const useStyles = makeStyles(loginPageStyle);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexWrap: 'wrap'
	},
	margin: {
		margin: theme.spacing(2),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	textField: {
		width: '25ch',
	},
}));

export default function LoginPage() {
	const { t } = useTranslation();
	let history = useHistory();
	let location = useLocation();
	let auth = useAuth();

	let { from } = location.state || { from: { pathname: "/admin" } };

	const classes = useStyles();

	const onLogin = () => {
		auth.signin(() => {
			console.log("Sign in success! ");
			history.replace(from);
		});
	};

	return (
		<form noValidate autoComplete="off">
			<Grid container className={classNames(classes.root, classes.margin)} spacing={2}>
				<Grid item xs={12}>
					<TextField className={classNames(classes.textField)} label="User Id" variant="outlined"/>
				</Grid>
				<Grid item xs={12}>
					<TextField className={classNames(classes.textField)} label="Password" variant="outlined"/>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" disableRipple color="primary" onClick={onLogin}>{t("Login")}</Button>
				</Grid>
			</Grid>
		</form>
	);
}