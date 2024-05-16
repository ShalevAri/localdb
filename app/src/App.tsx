import { isLoggedInAtom } from "@/lib/state"
import "@/styles/globals/classes.scss"
import "@/styles/main-page/main-page__cta.scss"
import "@/styles/main-page/main-page__global.scss"
import "@/styles/main-page/main-page__hero.scss"
import { useAtom } from "jotai"

export default function App() {
  const [isLoggedIn] = useAtom(isLoggedInAtom)

  return (
    <main>
      <div className="hero">
        <h1 className="hero__title">LocalDB</h1>
        <p className="hero__subtitle">Local MySQL interaction made easy</p>
      </div>
      <div className="cta">
        <p className="cta__text">
          With LocalDB you can interact with your local MySQL database just like
          you would with Prisma/Drizzle Studio.
          <br />
          You can create, modify and delete tables, and create/delete databases
          from scratch with ease. There are even safeguards in place just for
          your piece of mind.
          <br />
        </p>
        {isLoggedIn ? (
          <a href="/dashboard">
            <div className="cta__button">
              <button>Go to Dashboard</button>
            </div>
          </a>
        ) : (
          <a href="/sign-up">
            <div className="cta__button">
              <button>Sign Up</button>
            </div>
          </a>
        )}
      </div>
    </main>
  )
}
