import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Maintenance Dashboard</title>
        <meta name="description" content="Track your car maintenance, inspections, service history, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>Car Maintenance Dashboard</h1>
        <p>Welcome to your car maintenance tracking system.</p>
        
        <section className="dashboard-grid">
          <div className="card">
            <h2>🔧 Service History</h2>
            <p>View and log your vehicle service records</p>
          </div>
          
          <div className="card">
            <h2>📋 Inspections</h2>
            <p>Track upcoming and past inspections</p>
          </div>
          
          <div className="card">
            <h2>⏰ Reminders</h2>
            <p>Set maintenance reminders and alerts</p>
          </div>
          
          <div className="card">
            <h2>🛠️ Parts Inventory</h2>
            <p>Manage your spare parts and supplies</p>
          </div>
        </section>
      </main>
    </>
  )
}
