import ContentContainer from "../content/content";

const ContentTree = ({ data }: any) => {
  return data.children.map((child: any) => {
    switch (typeof child) {
      case "string":
        return <ContentContainer id={data.id}>{child}</ContentContainer>;
      case "object":
        return child.id ? (
          <ContentContainer id={child.id}>
            <ContentTree data={child} />
          </ContentContainer>
        ) : (
          child
        );
    }
  });
};

export default ContentTree;
