import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-height-full flex w-full flex-col items-center justify-center">
      <div className="text-primary-base mb-40 text-7xl font-light md:text-9xl">
        404
      </div>

      <h2 className="text-2xl font-bold max-md:text-sm">Not Found</h2>
      <p className="mt-4 max-md:text-sm">Could not find requested resource</p>

      <Link
        className="bg-secondary-base mt-20 rounded-md px-8 py-3 text-white hover:bg-green-500 max-md:text-sm"
        href="/"
      >
        Go To Home
      </Link>
    </div>
  );
}
