export const H1 = 
(
  { uid, attributes, content }: 
  { uid:string, attributes:object, content: {uid:string, attributes:object, content:React.ReactNode} }
) => (
  <div key={uid} {...attributes}>
    <h1 key={content.uid} {...content.attributes}>{content.content}</h1>
  </div>
);

export const H2 = 
(
  { uid, attributes, content }: 
  { uid:string, attributes:object, content: {uid:string, attributes:object, content:React.ReactNode,} }
) => (
  <div key={uid} {...attributes}>
    <h2 key={content.uid} {...content.attributes}>{content.content}</h2>
  </div>
);

export const H3 = 
(
  { uid, attributes, content }: 
  { uid:string, attributes:object, content: {uid:string, attributes:object, content:React.ReactNode} }
) => (
  <div key={uid} {...attributes}>
    <h3 key={content.uid} {...content.attributes}>{content.content}</h3>
  </div>
);

export const H4 = 
(
  { uid, attributes, content }: 
  { uid:string, attributes:object, content: {uid:string, attributes:object, content:React.ReactNode} }
) => (
  <div key={uid} {...attributes}>
    <h4 key={content.uid} {...content.attributes}>{content.content}</h4>
  </div>
);