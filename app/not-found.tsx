import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-block mb-6 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        System Error // 404
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Node Not Found</h2>
      <p className="text-base text-neutral-400 mb-8 max-w-md">
        The analysis structure was flattened. The data you are looking for has been moved to the main dashboard.
      </p>
      <Link 
        href="/"
        className="text-xs font-semibold px-6 py-3 bg-white text-black rounded hover:bg-neutral-200 transition-colors"
      >
        RETURN TO DASHBOARD
      </Link>
    </div>
  )
}
