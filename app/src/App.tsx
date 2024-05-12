import "@/styles/main-page/main-page__cta.scss"
import "@/styles/main-page/main-page__hero.scss"

export default function App() {
  return (
    <main>
      <div className="hero">
        <h1 className="hero__title">LocalDB</h1>
        <p className="hero__subtitle">
          Interact with your local MySQL database effortlessly
        </p>
      </div>

      <div className="cta">
        <p className="cta__text">
          With LocalDB you can interact with your local MySQL database just like
          you would with Prisma/Drizzle Studio.
          <br />
          You can create, delete and modify tables with ease. There are even
          safeguards in place just for your piece of mind.
          <br />
          Simply click the button below to go to the dashboard and get started!
        </p>
        <a href="/dashboard">
          <div className="cta__button">
            <button>Get Started</button>
          </div>
        </a>
      </div>
    </main>
  )
}
