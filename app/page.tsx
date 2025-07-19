import { cookies } from "next/headers";
import { submitName } from "@/lib/actions/example.action";

export default async function Home() {
  const cookieStore = await cookies();
  const name = cookieStore.get("visitor_name")?.value || "";

  return (
    <div className="min-h-screen px-4 py-20 sm:px-10 grid place-items-center font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="w-full max-w-xl space-y-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          ✅ Next.js 15 Boilerplate Ready
        </h1>

        <p className="text-muted-foreground leading-relaxed text-base">
          This project includes Tailwind CSS v4, Radix UI, Geist fonts, Playwright, ESLint,
          Prettier, and full support for <strong>Server Actions</strong>.
        </p>

        <div className="bg-muted/40 border rounded-lg px-6 py-6 text-left space-y-4">
          <h2 className="text-lg font-medium">🧠 Server Action Example</h2>

          <form action={submitName} className="space-y-4">
            <label className="block text-sm font-medium">
              What’s your name?
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:ring-ring/50"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Save to cookie
            </button>
          </form>

          <p className="text-sm text-muted-foreground">
            Your saved name:{" "}
            <span className="font-semibold text-foreground">{name || "none saved yet"}</span>
          </p>
        </div>

        <footer className="pt-12 text-xs text-muted-foreground">
          <p>
            Built with Next.js 15, Tailwind CSS v4, Radix UI, and ❤️ by you.
          </p>
        </footer>
      </main>
    </div>
  );
}
