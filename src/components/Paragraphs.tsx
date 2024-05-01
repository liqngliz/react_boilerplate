export const Paragraphs = ({ uid ,attributes, content }: {uid:string, attributes:object, content: {uid:string, attributes:object, content:React.ReactNode}[]}) => (
  <div key={uid} {...attributes}>
    {content.map((item) => (
      <p key={item.uid} {...item.attributes}>{item.content}</p>
    ))}
  </div>
);