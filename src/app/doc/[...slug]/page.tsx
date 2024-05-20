import React from "react";

const DocDetail = ({ params }: { params: { slug: string[] } }) => {
  console.log("slug", params.slug);
  if (params.slug.length === 2) {
    return (
      <div>
        review doc slug0 {params.slug[0]} and review slug[1] {params.slug[1]}
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>review doc slug0 {params.slug[0]} </div>;
  } else return (<div>doc for home page</div>);
};

export default DocDetail;
