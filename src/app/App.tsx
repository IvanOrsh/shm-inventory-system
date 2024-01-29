function App() {
  return (
    <div className="bg-white">
      <div className="relative z-0 grid min-h-screen place-items-center overflow-hidden px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Read the blog post.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-6xl">
              Testing tailwind plugins, themes, variables, and more
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 [text-wrap:balance]">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
