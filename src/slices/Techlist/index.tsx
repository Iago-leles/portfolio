import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { MdCircle } from "react-icons/md";

/**
 * Props for `Techlist`.
 */
export type TechlistProps = SliceComponentProps<Content.TechlistSlice>;

/**
 * Component for "Techlist" Slices.
 */
const Techlist = ({ slice }: TechlistProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg" as='h2'>
        {slice.primary.heading}
      </Heading>

      {slice.primary.tech_list.map(({ tech_name, tech_color }, index) => (
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 overflow-hidden">
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
