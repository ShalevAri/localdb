import {
  emailAtom,
  isLoggedInAtom,
  passwordAtom,
  usernameAtom,
} from "@/lib/state"
import "@/styles/sign-up-page/sign-up-page__global.scss"
import { useAtom, useAtomValue } from "jotai"

export default function SignUpPage() {
  const isLoggedIn = useAtomValue(isLoggedInAtom)
  const [username, setUsername] = useAtom(usernameAtom)
  const [email, setEmail] = useAtom(emailAtom)
  const [password, setPassword] = useAtom(passwordAtom)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(
      `Your username is ${username}, your email is ${email}, and your password is ${password}`
    )
  }

  if (isLoggedIn) {
    return (
      <div className="signed-in-container">
        <h2 className="signed-in-container__title">
          It looks like you are already logged in.
        </h2>
        <div className="signed-in-container__button">
          <button className="signed-in-container__button__button-element">
            Continue to Dashboard
          </button>
        </div>
      </div>
    )
  }
  return (
    // render the below if we are not logged in, if we are logged in render some text saying that you are logged in and a button to continue to the dashboard page.
    <main>
      <div className="container">
        <div className="container__background">
          <h1 className="container__background__title">Sign Up</h1>
          <div className="container__background__padding">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="container__background__padding__form">
                  <div>
                    <label
                      className="container__background__padding__form__label-name container__background__padding__form__label"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="container__background__padding__form__input-name container__background__padding__form__input"
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="container__background__padding__form__label-email container__background__padding__form__label"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="container__background__padding__form__input-email container__background__padding__form__input"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="container__background__padding__form__label-password container__background__padding__form__label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="container__background__padding__form__input-password container__background__padding__form__input"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <a href="/dashboard">
                    <div className="sign-up-button">
                      <button>Continue</button>
                    </div>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
