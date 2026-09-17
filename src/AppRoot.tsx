import AppRouter from './app/router/AppRouter';

export default function AppRoot(): JSX.Element {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="relative z-10 flex min-h-screen h-full w-full flex-col">
        <AppRouter />
      </div>
    </div>
  );
}
