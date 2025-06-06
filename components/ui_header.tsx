'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { IHeader } from '@/utils/graphqlInterface'

export default function UiHeader(props: {
  data: IHeader
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#f5f2ea]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 h-10 items-center">
          {/* <a href="#" className="-m-1.5 p-1.5"> */}
          <Link href='/'>
            <img className="h-12 w-auto" src={props.data.logo.url} alt={props.data.logo.description} />
          </Link>
          {/* </a> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {props.data.linksCollection.items.map((link, idx) => {
            return (
              <Link key={idx} href={link.value} className="text-base font-semibold leading-6 text-[#e75d50]">
                {link.text}
              </Link>
              )
          })}
         
        {/*   <Link href="/#preguntas-frecuentes" className="text-sm font-semibold leading-6 text-white">
            Recursos Educativos
          </Link> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a target='_blank' href={props.data.callToAction.value} className="text-base font-semibold leading-6 text-[#e75d50]">
            {props.data.callToAction.text}
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#20022b] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
           {/*  <a href="#" className="-m-1.5 p-1.5"> */}
           <div className='flex lg:flex-1 h-24 items-center'>

              <img
                className="h-12 w-auto"
                src={props.data.logo.url} alt={props.data.logo.description}
                />
            </div>
          {/*   </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {props.data.linksCollection.items.map((link, idx) => {
                  return (
                    <Link onClick={() => setMobileMenuOpen(false)} key={idx} href={link.value} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                      {link.text}
                    </Link>
                    )
                })}
                
              </div>
              <div className="py-6">
                <a
                  href={props.data.callToAction.value}
                  target='_blank'
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                 {props.data.callToAction.text}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
