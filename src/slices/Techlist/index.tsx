'use client'

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `Techlist`.
 */
export type TechlistProps = SliceComponentProps<Content.TechlistSlice>;

/**
 * Component for "Techlist" Slices.
 */
const Techlist = ({ slice }: TechlistProps): JSX.Element => {
  const component = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
        }
      })

      tl.fromTo(".tech-row", {
        x: (index) => {
          return index % 2 === 0 ?
            gsap.utils.random(600, 400)
            : gsap.utils.random(-600, -400)
        },
      },
        {
          x: (index) => {
            return index % 2 === 0 ?
              gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400)
          },
          ease: 'power1.inOut',
        }
      )
    }, component)

    return () => ctx.revert()
  }, [])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded>
        <Heading size="xl" className="mb-8" as='h2'>
          {slice.primary.heading}
        </Heading>
      </Bounded>

      {slice.primary.tech_list.map(({ tech_name, tech_color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          arial-label={tech_name || undefined}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{ color: index === 7 && tech_color ? tech_color : 'inherit' }}>
                {tech_name}
              </span>

              <span>
                <MdCircle className="text-3xl" />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Techlist;
