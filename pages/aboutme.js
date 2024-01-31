import React, { useRef, useEffect } from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Aboutme() {
  const containersRef = useRef(null);

  useEffect(() => {
    const containers = containersRef.current;

    const handleMouseMove = (e) => {
      const rect = containers.getBoundingClientRect();
      const x = e.pageX - rect.left;
      const y = e.pageY - rect.top;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;
      containers.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    containers.addEventListener("mousemove", handleMouseMove);

    return () => {
      containers.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div ref={containersRef} className="containers">
            <Image
              className="card"
              src="/Profile.png"
              width={500}
              height={500}
              alt="Profile"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Owen Kim
              <br className="hidden lg:inline-block" />
              Welcome to see my history
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                My Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
