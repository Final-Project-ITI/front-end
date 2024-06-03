import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { USER_REGEX } from "../../regex/user";
import { PWD_REGEX } from "../../regex/pass";
import { EMAIL_REGEX } from "../../regex/email";
import { Phone_REGEX } from "../../regex/phone";
import "../../styles/Auth.css";
// import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

// const REGISTER_URL = "/users/register";
export default function Register() {
  // const navigate = useNavigate();

  const userRef = useRef<HTMLInputElement>(null);
  const errRef: any = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = Phone_REGEX.test(phone);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, phone, pwd, email]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = Phone_REGEX.test(phone);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("invalid entry");
      return;
    }
    console.log(user, phone, email, pwd);
  }

  return (
    <>
      <div className="container m-auto">
        <section className="sign">
          <h1 className="text-4xl font-bold btn btn-ghost txt1" title="Sign Up">
            Sign Up
          </h1>
          <form className="sign-form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="sign-label">
              Username{" "}
            </label>
            <input
              placeholder="User Name"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(true)}
              className="sign-input"
            ></input>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            {/* /////// */}
            <label htmlFor="phone" className="sign-label">
              Phone Number{" "}
            </label>
            <input
              placeholder="Phone Number"
              type="text"
              id="phone"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
              required
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(true)}
              className="sign-input"
            ></input>
            <p
              id="phdnote"
              className={
                phoneFocus && phone && !validPhone
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              phone number must be like this: 01012345678 or 01112345678 or
              01212345678
            </p>
            <label htmlFor="email" className="sign-label">
              Email{" "}
            </label>
            <input
              placeholder="E-Mail"
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(true)}
              className="sign-input"
            ></input>
            <p
              id="eidnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              email must be like this: example@gamil.com
            </p>
            <label htmlFor="password" className="sign-label">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="sign-input"
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <button
              className="sign-button"
              disabled={!validName || !validEmail || !validPwd ? true : false}
            >
              <Link to="/login" id="sign-link" className="log2">
                Sign Up
              </Link>
            </button>
          </form>

          <p>
            Already have account?
            <span className="log">
              <Link to="/login" id="sign-link" className="log">
                log in
              </Link>
              <br />
            </span>
          </p>
        </section>

        <div className="img"></div>
      </div>
    </>
  );
}
