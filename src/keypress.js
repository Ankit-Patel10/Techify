import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const useKeyPress = (func, target = window) => {
  // persistent "store" to track what keys are being pressed
  const [pressed, setPressed] = useState({});

  // whenever a keydown event is fired ontarget element
  const onKeyDown = useCallback(
    (event) => {
      // if key isn't already pressed, run func
      if (!pressed[event.which])
        func(event);

      // add key to store
      setPressed({ ...pressed, [event.which]: true });
    },
    [func, pressed]
  );

  // whenever a keyup event is fired on the window element
  const onKeyUp = useCallback((event) => {
    // remove key from store
    const { [event.which]: id, ...rest } = pressed;
    setPressed(rest);
  }, [pressed]);

  useEffect(() => {
    // add listeners when component mounts/changes
    target.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // cleanup/remove listeners when component unmounts/changes
    return () => {
      target.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [target, onKeyDown, onKeyUp]);
};