import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Signup.module.css";
import { openAI } from './service'
import { post } from "./service";


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    // email: "",
    // pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [answer, setAnswer] = useState()

  const handleSubmission = () => {
    if (!values.name) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("")
    openAI(values.name).then((response) => {
      if(response){
      
        setAnswer(response.choices[0].message.content)
        let message = {
          message : response.choices[0].message.content
        }
      
        post("https://my-first-project-27296-default-rtdb.firebaseio.com/users.json", message).then((response) =>{

        })
        // postAPI('https://my-first-project-27296-default-rtdb.firebaseio.com/users.json',values).then((response) => {
    //   if(response){
    //     setSubmitButtonDisabled(false)
    //   }
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Hi I'm here......</h1>

        <InputControl
          label="Questions"
          placeholder="Enter your your question here"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        {/* <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        /> */}

        <div className={styles.footer}>
          <b className={styles.error}>{answer}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Submit
          </button>
          {/* <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
