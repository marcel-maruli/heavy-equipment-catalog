import { ArrowUpRight, Camera, ChevronDown, Menu, Search, X } from 'lucide-react';
export default function Icon({ name, size = 18, strokeWidth = 1.8 }) {
  const icons = { search:Search, arrow:ArrowUpRight, external:ArrowUpRight, instagram:Camera, menu:Menu, close:X, down:ChevronDown };
  const Component = icons[name] ?? ArrowUpRight;
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
