import "@/styles/dashboard-page/dashboard-page__global.scss"

export default function DashboardPage() {
  return (
    <main>
      <div className="top">
        <h1 className="top__title">LocalDB</h1>
        <div className="top__buttons-container">
          <div className="top__buttons-container__button top__buttons-container__button--left">
            <button className="top__buttons-container__button-element top__buttons-container__button-element--left">
              Table Mode
            </button>
          </div>
          <div className="top__buttons-container__button top__buttons-container__button--right">
            <button className="top__buttons-container__button-element top__buttons-container__button-element--right">
              Database Mode
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
