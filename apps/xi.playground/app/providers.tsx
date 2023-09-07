import { ThemeProvider } from 'next-themes';
import React from 'react';

export function Providers(props) {
  const { children } = props;

  return (
    <>
      <ThemeProvider attribute="data-theme">
            {children}
      </ThemeProvider>
    </>
  );
}
