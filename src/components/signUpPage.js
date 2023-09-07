const SignUpPage = () => {
  return (
    <>
      <div id="createAccountPage">
        <form className="flexColumnCenter" id="accountSignUpForm">
          <input
            type="email"
            id="signupInput"
            placeholder="Enter email address"
          />
          <input
            type="password"
            id="signupInput"
            placeholder="Enter password"
          />

          <input
            type="password"
            id="signupInput"
            placeholder="Confirm password"
          />
        </form>

        <button type="button" id="signUpButton">
          Create account
        </button>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span>Already have an account? </span>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#0390A3",
              border: "0px",
            }}
          >
            Log in here!
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
