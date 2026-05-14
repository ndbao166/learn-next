type RandomUser = {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  location: {
    city: string
    state: string
    country: string
  }
}

type RandomUserResponse = {
  results: RandomUser[]
}

const Page = async () => {
  const data = await fetch('https://randomuser.me/api/')
  const userData: RandomUserResponse = await data.json()
  const user = userData.results[0]

  return (
    <section className="page-boundary page-ssr">
      <div className="boundary-label">SSR Page: src/app/ssr/page.tsx</div>
      <h2>Server Side Rendering</h2>
      <p>Du lieu user duoc lay moi moi request bang fetch no-store.</p>
      <div className="profile-card">
        <div className="profile-avatar">
          {user.name.first[0]}
          {user.name.last[0]}
        </div>
        <div>
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>
            {user.location.city}, {user.location.state}, {user.location.country}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Page
export const dynamic = 'force-dynamic'