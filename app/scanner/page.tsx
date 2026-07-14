import Image from "next/image";
import ScannerForm from "@/components/scannercp";

export default function ScannerPage() {
  return (
    <div className="flex flex-col bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="https://ik.imagekit.io/aegfxmf0u/public/Logoayushnew.png?updatedAt=1773306128111"
              alt="Ayush Ortho Logo"
              width={180}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Call CTA */}
          <a
            href="tel:+919150900387"
            className="flex items-center gap-2 bg-[#e13e20] hover:bg-[#c1341a] text-white font-semibold text-sm sm:text-base px-4 sm:px-5 py-2.5 rounded-full transition-colors shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.5C3 14.06 9.94 21 18.5 21h1a1.5 1.5 0 001.5-1.5v-2.75a1.5 1.5 0 00-1.03-1.43l-2.76-.92a1.5 1.5 0 00-1.57.4l-.92.92a11.03 11.03 0 01-5.35-5.35l.92-.92a1.5 1.5 0 00.4-1.57l-.92-2.76A1.5 1.5 0 008.25 3H5.5A1.5 1.5 0 004 4.5"
              />
            </svg>
            +91 91509 00387
          </a>
        </div>
      </header>

      {/* Page body — vertically & horizontally centered */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-2xl">
          <ScannerForm />
        </div>
      </main>
    </div>
  );
}
