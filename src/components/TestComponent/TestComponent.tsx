import React, { Fragment } from 'react';
import { fn, fn2 } from './fn';

export default function TestComponent() {
  const unused = 0;
  return <Fragment>{fn('hello')} {fn2('world')}</Fragment>
}
