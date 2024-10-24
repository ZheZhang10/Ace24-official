'use client'
import React, { useState, FormEvent } from 'react';
import "../../app/css/styles.scss"

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    // 我们将自己提交表单
    e.preventDefault();

    try {
        const response = await fetch("/api/waitinglist", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({ email: email }),
        });
        console.log(response.body);

        if (response.ok) {
            setHasSubmitted(true);
        } else {
            setError(await response.text());
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        setError("An error occurred while submitting the form.");
    }  
    }

  // 如果用户成功提交了他们的电子邮件，
  // 显示感谢消息
  if (hasSubmitted) {
    return (
      <div className="formWrapper">
        <span className="subtitle">
          Thanks for signing up! We will be in touch soon.
        </span>
      </div>
    );
  }

  // 否则，显示表单
  return (
    <form className="formWrapper" onSubmit={submit}>
      <input
        type="email"
        required
        placeholder="Email"
        className="formInput formTextInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="formInput formSubmitButton">
        Join Waitlist
      </button>
      {error ? <div className="error">{error}</div> : null}
    </form>
  );
}

export default Form;
