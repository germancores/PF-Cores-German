import React, { useRef, useEffect } from 'react';

function CustomInput() {
  const inpuRef = useRef(null);

  useEffect(() => {
    inpuRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="inputRef">Ingresa Algo</label>
      <input id="inputRef" type="text" ref={inpuRef} />
    </div>
  );
}

export default CustomInput;
