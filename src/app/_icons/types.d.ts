export type SvgProps = Omit<
  React.SVGProps<SVGSVGElement>,
  "data-testid" | "ref" | "xmlns" | "xmlSpace" | "viewBox"
>;
