import GreenhouseLogo from "@/app/ui/greenhouse-logo"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-stone-50">
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-emerald-800 p-4 md:h-40">
        <GreenhouseLogo size="lg"/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-stone-100 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-emerald-800 md:text-3xl md:leading-normal`}
          >
            <strong className="elementor-button-text">
              Welcome To Greenhouse Dashboard.
            </strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-emerald-800 px-6 py-3 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-600 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/greenhouse.png"
            width={750}
            height={750}
            className="flex bottom-1 right-28"
            alt="A picture of a dream greenhouse :)"
          />
        </div>
      </div>
    </main>
  );
}
