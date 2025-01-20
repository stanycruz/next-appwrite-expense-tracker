import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function Homepage() {
  return (
    <div className="lg:px-10 px-5 pt-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl font-bold">S C</div>
        </div>
        <div className="flex gap-5">
          <Button variant={'outline'}>
            <Link href="/register">Register</Link>
          </Button>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center mt-24">
        <div className="col-span-1 flex flex-col justify-center">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-4xl text-2xl font-bold">
              Next.js + Appwrite Expense Tracker
            </h1>
            <p className="text-sm text-gray-600 font-semibold">
              A simple expense tracker built with Next.js, Appwrite and Tailwind
              CSS. It's a fullstack application that allows you to track your
              expenses and income.
            </p>

            <div className="flex gap-5">
              <Button>Register</Button>
              <Button variant={'outline'}>Learn More</Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end">
          <img
            className="lg:w-96 w-48"
            src="https://png.pngtree.com/png-vector/20190712/ourmid/pngtree-programming-icon-trendy-style-isolated-background-png-image_1542444.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
