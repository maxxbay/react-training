import React from 'react';
import { useAllert } from './AlertContext';

export default function Alert() {
  const alert = useAllert();
  if (!alert.visible) return null;
  return <div onClick={alert.hide}>{alert.text}</div>;
}
