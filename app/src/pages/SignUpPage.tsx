export default function SignUpPage() {
  return (
    <main className="">
      <div>
        <div>
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </div>
      </div>
    </main>
  )
}
