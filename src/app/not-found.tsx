import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-height-full flex w-full flex-col items-center justify-center">
      <div className="mb-40 text-7xl font-light text-primary md:text-9xl">
        404
      </div>

      <h2 className="text-2xl font-bold max-md:text-sm">Not Found</h2>
      <p className="mt-4 max-md:text-sm">Could not find requested resource</p>

      <Link
        className="mt-20 rounded-md bg-secondary px-8 py-3 text-white"
        href="/"
      >
        Go To Home
      </Link>
    </div>
  );
}
