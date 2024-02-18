'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@xipkg/utils';
import * as React from 'react';

const Root = TabsPrimitive.Root;

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, onClick, ...props }, ref) => {
  const shadowRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!shadowRef.current) return;
    const { offsetLeft, clientWidth } = shadowRef.current.nextSibling as HTMLElement;
    shadowRef.current.setAttribute('style', `left: ${offsetLeft}px; width: ${clientWidth}px`);
  }, []);

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!shadowRef.current) return;
    shadowRef.current.setAttribute(
      'style',
      `left: ${(event.target as HTMLElement).offsetLeft}px; width: ${
        (event.target as HTMLElement).clientWidth
      }px`,
    );
    onClick?.(event);
  };

  return (
    <TabsPrimitive.List
      ref={ref}
      onClick={handleOnClick}
      className={cn('flex relative border-b-2 border-gray-10 items-center', className)}
      {...props}
    >
      <div
        ref={shadowRef}
        id="shadow"
        className="absolute duration-300 rounded-md transition-[left,width] h-0.5 -bottom-0.5 bg-brand-80"
      ></div>
      {children}
    </TabsPrimitive.List>
  );
});
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { index: number }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex text-center bg-transparent data-[state=active]:hover:cursor-default grow items-center justify-center whitespace-nowrap pb-1 disabled:pointer-events-none disabled:opacity-50 text-gray-80 data-[state=active]:text-gray-100',
      className,
    )}
    {...props}
  />
));
Trigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = TabsPrimitive.Content.displayName;

export { Content, List, Root, Trigger };
