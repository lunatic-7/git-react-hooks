import React from 'react';
import UseArrayHook from './hooks/UseArrayHook';
import UseBooleanHook from './hooks/UseBooleanHook';
import UseCounterHook from './hooks/UseCounterHook';
import UseFocusHook from './hooks/UseFocusHook';
import UseHoverHook from './hooks/UseHoverHook';
import UseIntervalHooks from './hooks/UseIntervalHooks';
import UseOnlineStatusHook from './hooks/UseOnlineStatusHook';
import UsePreviousHook from './hooks/UsePreviousHook';
import UseTimeoutHook from './hooks/UseTimeoutHook';

function App() {
  return (
    <div >
      <UsePreviousHook />
      <UseIntervalHooks />
      <UseTimeoutHook />
      <UseOnlineStatusHook />
      <UseBooleanHook />
      <UseArrayHook />
      <UseCounterHook />
      <UseFocusHook />
      <UseHoverHook />
    </div>
  );
}

export default App;
