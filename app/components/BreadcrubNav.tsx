import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type crub = {
  label: string;
  href?: string;
};

interface BreadcrubNavProps {
  items: crub[];
}
export default function BreadcrubNav({ items }: BreadcrubNavProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            ) : (
              <span className="text-muted-foreground">{item.label}</span>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
        <BreadcrumbSeparator />
      </BreadcrumbList>
    </Breadcrumb>
  );
}
