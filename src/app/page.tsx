import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col gap-6 p-8">
      <h1 className="text-4xl font-bold gradient-text">Bio Link & Landing Page</h1>
      <p className="text-gray-400 text-center max-w-md">
        Template repo hoàn chỉnh. Clone về và dùng AI Agents để configure theo
        hướng dẫn trong SETUP.md.
      </p>
      <div className="flex gap-4">
        <Link
          href="/bio"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium transition-colors"
        >
          Xem Bio Link
        </Link>
        <Link
          href="/landing"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors border border-white/20"
        >
          Xem Landing Page
        </Link>
      </div>
    </div>
  );
}
