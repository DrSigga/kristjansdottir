import { Content, createClient } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `List`.
 */
export type ListProps = SliceComponentProps<Content.ListSlice>;

/**
 * Component for "List" Slices.
 */
const List = async ({ slice }: ListProps): Promise<JSX.Element> => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
		
		{slice.items.length > 0 ? 
		(<ul>
			{slice.items.map((item,nr) => <li key={nr}>
				<PrismicNextLink field={item.siggahl}>{nr}</PrismicNextLink>
			</li>)}
		</ul> 
) : ''}
</section>
  );
};

export default List;
