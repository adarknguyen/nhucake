// FloatingContactButtons - Mobile floating buttons for Zalo, Messenger, Hotline
function FloatingContactButtons() {
  return (
    <div className="md:hidden fixed right-4 bottom-24 flex flex-col gap-3 z-40">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/123456789"
        className="size-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border-2 border-white"
        aria-label="Chat Zalo"
      >
        <span className="material-symbols-outlined">chat</span>
      </a>

      {/* Messenger Button */}
      <a
        href="https://m.me/nhucake"
        className="size-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg border-2 border-white"
        aria-label="Chat Messenger"
      >
        <span className="material-symbols-outlined">send</span>
      </a>

      {/* Hotline Button */}
      <a
        href="tel:+84123456789"
        className="size-12 rounded-full bg-accent-pink text-white flex items-center justify-center shadow-lg border-2 border-white"
        aria-label="Gọi hotline"
      >
        <span className="material-symbols-outlined">call</span>
      </a>
    </div>
  )
}

export default FloatingContactButtons
