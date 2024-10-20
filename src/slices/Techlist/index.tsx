import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for techlist (variation: {slice.variation}) Slices
    </section>
  );
};

export default Techlist;
