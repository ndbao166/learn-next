export default function Loading() {
  return (
    <section className="page-boundary page-ssr">
      <div className="boundary-label">SSR Loading: src/app/ssr/loading.tsx</div>
      <h2>Dang tai du lieu user...</h2>
      <p>Fallback UI cua route /ssr trong luc server dang fetch data.</p>

      <div className="profile-card" aria-busy="true" aria-live="polite">
        <div className="profile-avatar">..</div>
        <div>
          <p>Loading name...</p>
          <p>Loading email...</p>
          <p>Loading phone...</p>
          <p>Loading location...</p>
        </div>
      </div>
    </section>
  )
}
