
 interface PageTitle {
  title: string;
  acf?: {
    title?: string;
    description?: string;
  };
  acf_fc_layout?: string;
}
 interface TextProps {
  pageTitle: PageTitle;
}
 const Text:React.FC<TextProps> = ({pageTitle}) => {
    const headTilte = pageTitle?.acf_fc_layout
    console.log("Head Title", headTilte);
  return (
    <div>
      <h1 className="text-[#fff]">{headTilte}</h1>
    </div>
  );
}
export default Text;