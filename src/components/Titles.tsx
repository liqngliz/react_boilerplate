export const Title = ({ attributes, content }: { attributes:object, content: {text:string, attributes:object} }) => (
  <div {...attributes}>
    <h1 {...content.attributes}>Name is {content.text}</h1>
  </div>
);

export const SubTitle = ({ attributes, content }: { attributes:object, content: {text:string, attributes:object} }) => (
  <div {...attributes}>
    <h2 {...content.attributes}>Name is {content.text}</h2>
  </div>
);

export const SubSubTitle = ({ attributes, content }: { attributes:object, content: {text:string, attributes:object} }) => (
  <div {...attributes}>
    <h3 {...content.attributes}>Name is {content.text}</h3>
  </div>
);

export const SubSubSubTitle = ({ attributes, content }: { attributes:object, content: {text:string, attributes:object} }) => (
  <div {...attributes}>
    <h4 {...content.attributes}>Name is {content.text}</h4>
  </div>
);