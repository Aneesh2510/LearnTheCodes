import AppRouter from './routes/AppRouter'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Global Ambient Pastel Effects (Removed) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      </div>

      {/* Main Content Router */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
