import React, { useContext } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
    english: {
        signIn: "Sign In",
        email: "Email",
        password: "Password",
        remember: "Remember Me"
    },
    chinese: {
        signIn: "登录",
        email: "邮箱",
        password: "密码",
        remember: "记住账号密码"
    }
}

function Form(props) {
    const { classes } = props;
    const { language, changeLanguage } = useContext(LanguageContext);
    const { email, signIn, password, remember } = words[language];
    return (
        <div className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="chinese">中文</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password" autoFocus />
                    </FormControl>
                    <FormControlLabel 
                        control={<Checkbox color="primary" />} 
                        label={remember}
                    />
                    <Button variant="contained" type="submit" color="primary" fullWidth className={classes.submit}>
                        {signIn}
                    </Button>
                </form>
            </Paper>
        </div>
    )
}


export default withStyles(styles)(Form);