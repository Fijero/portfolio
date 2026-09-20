import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiIndeed, SiX } from "react-icons/si";

import { CgStack, CgListTree } from "react-icons/cg";
import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const stackList = [
    "FLUTTER",
    "DART",
    "TYPESCRIPT",
    "REACT",
    "NEXT JS",
    "NEST JS",
    "EXPRESS JS",
    "NODE JS",
  ];

  const socials = [
    {
      icon: SiGithub,
      text: "Github",
      url: "https://github.com/Fijero",
    },
    {
      icon: SiX,
      text: "X(Twitter)",
      url: "https://x.com/uzo__ma",
    },
    {
      icon: SiIndeed,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/emmanuel-uzoma-b947b7229",
    },
  ];

  const projects = [
    {
      name: "Erranly",
      desc: "Erranly on-demand errand app that connects senders with trusted runners to handle errands like deliver items, pick up items.",
      github: null,
      stack: ["Flutter", "Dart", "Express JS", "TypeScript"],
      platforms: [
        {
          name: "IOS",
          url: "https://apps.apple.com/us/app/erranly/id6782684183",
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/details?id=com.erranly.app",
        },
        {
          name: "Web",
          url: "https://erranly.com",
        },
      ],
    },

    {
      name: "Secret Share",
      desc: "Share .env serets securely. Push, get code and share code to your receiver to pull the .env.",
      github: "https://github.com/Fijero/secret-share",
      stack: ["Typescript", "GO"],
      platforms: [
        {
          name: "CLI",
          url: null,
        },
        {
          name: "Web",
          url: "https://secretshare.fijero.dev/",
        },
      ],
    },

    {
      name: "URL Shortener",
      desc: "Convert long URL into short one, launch and get redirected in under 50ms.",
      github: "https://github.com/Fijero/url-shortener",
      stack: ["React", "Nest JS", "TypeScript"],
      platforms: [
        {
          name: "Web",
          url: "https://short-url.fijero.dev/",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/star_bg.png" alt="" fill className="object-cover" />

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-black/95 to-gray-950" />
      </div>

      {/* content */}
      <div className="relative z-10 min-h-screen flex justify-center py-15">
        <div className="w-full max-w-3xl px-6 py-10 border-amber-50 border-0">
          <div>
            <p className="text-4xl text-amber-100/50 font-extrabold leading-12">
              CHUKWUEMEZIE <br /> EMMANUEL <br /> UZOMA
            </p>

            <div className="my-10"></div>

            <div className="flex justify-end text-amber-700 [&>div]:mx-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <div key={social.text} className="flex flex-row items-center">
                    <Link
                      href={social.url}
                      className="flex flex-row items-center"
                    >
                      <Icon className="m-1" />{" "}
                      <span className="text-sm"> {social.text}</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="my-7"></div>

            <div className="[&>p]:text-gray-500 [&>p]:my-6 [&>p]:text-sm">
              <p className="text-amber-50">
                Founder & CTO of {"  "}
                <Link
                  href={"https://erranly.com"}
                  target="_blank"
                  className="text-amber-700 text-xl font-medium"
                >
                  Erranly
                </Link>
                , a peer-to-peer and on-demand errand app that connects senders
                with trusted runners to handle errands like deliver items, pick
                up items, shop from stores etc, seamlessly.
              </p>

              <p>
                I’m a Software Engineer who builds scalable, production-ready
                web and mobile applications (IOS & Android) from the ground up.
              </p>

              <p>
                I specialize in Flutter, Dart, TypeScript, React, Next.js,
                NestJS, Express, and backend architecture, with a strong focus
                on clean, maintainable systems.
              </p>

              <p>
                I turn ideas into reliable products—from intuitive user
                interfaces to APIs, databases, authentication, payments, and
                cloud infrastructure.
              </p>

              <p>
                I collaborate effectively with designers, developers, and
                stakeholders to turn ideas into well-built products.
              </p>
            </div>
          </div>

          <div className="my-10"></div>

          <div className="text-amber-700 flex flex-row items-center font-semibold">
            PROVEN STACK <CgStack className="m-1" />
          </div>
          <div className="my-5"></div>
          <div className="flex justify-start flex-wrap">
            {stackList.map((stack) => {
              return (
                <Badge key={stack} variant={"default"} className="p-4 m-2">
                  <span className="text-gray-50/60"> {stack}</span>
                </Badge>
              );
            })}
          </div>
          <div className="my-10"></div>

          <div className="text-amber-700 flex flex-row items-center font-semibold">
            PROJECTS <CgListTree className="m-1" />
          </div>
          <div className="my-5"></div>
          <div className="flex justify-start flex-wrap text-white">
            {projects.map((project) => {
              return (
                <div
                  className="border-gray-100/10 border w-full py-4 px-4 rounded-sm my-2"
                  key={project.name}
                >
                  <div>
                    <div className="flex flex-row justify-between">
                      <p className="text-gray-100/70 text-xl">{project.name}</p>
                      {project.github != null && (
                        <div className="flex flex-row items-center">
                          <Badge
                            className=" text-gray-400 p-3"
                            render={
                              <a href={project.github} target="_blank">
                                <SiGithub /> GitHub
                                <ArrowUpRightIcon data-icon="inline-end" />
                              </a>
                            }
                          />
                        </div>
                      )}
                    </div>
                    <div className="my-2"></div>
                    <p className="text-gray-500 leading-6 text-sm">
                      {project.desc}
                    </p>
                    <div className="my-7"></div>

                    <div className="flex flex-row items-center flex-wrap">
                      <span className="text-gray-600 text-xs">STACK: </span>
                      {project.stack.map((stack) => {
                        return (
                          <Badge
                            key={stack}
                            className="bg-gray-800 text-[10px] p-2 text-white/50 m-1"
                          >
                            {stack}
                          </Badge>
                        );
                      })}
                    </div>

                    <div className="flex flex-row flex-wrap items-center">
                      <span className="text-gray-600 text-xs">PLATFORMS: </span>
                      {project.platforms.map((platform) => {
                        return (
                          <Badge
                            key={platform.name}
                            className="bg-green-800/60 text-[12px] py-2 px-3 text-white/50 m-1"
                            render={
                              <a href={platform.url!} target="_blank">
                                {platform.name}
                                {platform.url && (
                                  <ArrowUpRightIcon data-icon="inline-end" />
                                )}
                              </a>
                            }
                          ></Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-15"></div>

          <div className="text-gray-500 flex flex-row items-center w-20 gap-2 m-auto justify-center">
            <Separator/>
            <span className="whitespace-nowrap text-sm">That's all for now!</span>
            <Separator />
          </div>
        </div>
      </div>
    </div>
  );
}
