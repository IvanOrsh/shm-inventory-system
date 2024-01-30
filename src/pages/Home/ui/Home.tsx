import HomeLayout from "@shared/layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <>
        <div className="space-y-6 sm:m-6">
          <div className="theme-swiss relative mx-auto max-w-4xl overflow-hidden bg-skin-fill sm:rounded-2xl">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
              <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
                <span className="block">Focus on your content.</span>
                <span className="block">We handle the distribution.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-skin-muted">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-accent px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-accent-hover sm:px-8"
                  >
                    {" "}
                    Get started{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-muted bg-opacity-60 px-4 py-3 text-base font-medium text-skin-base shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    {" "}
                    Live demo{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden bg-skin-fill sm:rounded-2xl">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
              <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
                <span className="block">Focus on your content.</span>
                <span className="block">We handle the distribution.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-skin-muted">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-accent px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-accent-hover sm:px-8"
                  >
                    {" "}
                    Get started{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-muted bg-opacity-60 px-4 py-3 text-base font-medium text-skin-base shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    {" "}
                    Live demo{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="theme-neon relative mx-auto max-w-4xl overflow-hidden bg-skin-fill sm:rounded-2xl">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
              <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
                <span className="block">Focus on your content.</span>
                <span className="block">We handle the distribution.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-skin-muted">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-accent px-4 py-3 text-base font-medium text-skin-inverted shadow-sm hover:bg-skin-button-accent-hover sm:px-8"
                  >
                    {" "}
                    Get started{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-skin-button-muted bg-opacity-60 px-4 py-3 text-base font-medium text-skin-base shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    {" "}
                    Live demo{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </HomeLayout>
  );
}
