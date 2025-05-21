import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    // include: ["src/components/application/Application.test.{ts,tsx}"],
    // include: ["src/components/skills/Skills.test.{ts,tsx}"],
    // include: ["src/components/counter/Counter.test.{ts,tsx}"],
    // include: ["src/hooks/use-counter/useCounter.test.{ts,tsx}"],
    include: ["src/components/counter-two/CounterTwo.test.{ts,tsx}"],
    coverage: {
      include: ["src/components/**/*.{ts,tsx}"],
      exclude: ["src/App.tsx/**", "src/main.tsx/**"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
