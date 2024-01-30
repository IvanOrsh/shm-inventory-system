import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home/ui/Home";

export function AppRouter() {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
