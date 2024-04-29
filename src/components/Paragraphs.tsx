export const Paragraphs = ({ attributes, content }: { attributes:object, content: {text:string, attributes:object}[]}) => (
  <div {...attributes}>
    {content.map((item) => (
      <p {...item.attributes}>{item.text}</p>
    ))}
  </div>
);