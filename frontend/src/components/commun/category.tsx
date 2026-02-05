
type CategoryProps = {
  title: string;
  component: JSX.Element;
};

const Category = ({ title, component }: CategoryProps) => (
  <div>
    <p className="text-2xl">{title}</p>
    {component}
    <div className="border-t p-3" />
  </div>
);

export default Category;
