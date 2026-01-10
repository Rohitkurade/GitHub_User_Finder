export default function ErrorMessage({ message, onDismiss }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <svg className="h-8 w-8 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-400">Error</h3>
            <p className="text-red-300/90">{message}</p>
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-red-400/60 hover:text-red-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
