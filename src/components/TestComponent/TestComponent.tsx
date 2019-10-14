import React, { Fragment } from 'react';
import { fn, fn2 } from './fn';

export default function TestComponent() {
  return <Fragment>{fn('hello')} {fn2('world')}</Fragment>
}
