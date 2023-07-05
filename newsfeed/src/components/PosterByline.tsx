import * as React from "react";
import { useRef } from "react";
import Image from "./Image";
import HoverCard from "./HoverCard";
import PosterDetailsHovercardContents from "./PosterDetailsHovercardContents";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { type PosterBylineFragment$key } from "./__generated__/PosterByLineFragment.graphql";

export type Props = {
  poster: PosterBylineFragment$key;
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment
    }
  }
`;

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(PosterBylineFragment, poster);

  const hoverRef = useRef(null);

  return (
    <div ref={hoverRef} className="byline">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <HoverCard targetRef={hoverRef}>
        <PosterDetailsHovercardContents posterID={data.id} />
      </HoverCard>
    </div>
  );
}
