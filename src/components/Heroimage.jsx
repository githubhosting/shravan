import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'

export function Heroimage() {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://user-images.githubusercontent.com/71520844/211103208-288bd82f-cbcb-4983-83a0-13755cf837c5.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Shri Shantaveri Gopala Gowda
              </h2>
              <p class="mt-4 text-gray-600">
                Shantaveri Gopala Gowda (14 March 1923 - 9 June 1972) was a
                socialist politician who was thrice elected to Karnataka
                Vidhanasabha, the Legislative Assembly of Karnataka, in 1952,
                1962 and 1967.
              </p>

              <a
                href="https://en.wikipedia.org/wiki/Shantaveri_Gopala_Gowda"
                class="bg-black mt-8 inline-flex items-center rounded px-8 py-3 text-white hover:bg-gray-50 hover:text-black focus:outline-none focus:ring active:text-indigo-500"
              >
                <span class="text-sm font-medium"> Know More </span>

                <svg
                  class="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
