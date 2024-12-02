import React, {useState} from 'react';
import MDEditor from '@uiw/react-md-editor'

const App = () =>  {
    const [value, setValue] = useState<string>();
  return (
    <div className='w-1/2'>
       <MDEditor height={400} value={value} onChange={(v) => setValue(v)}/>
    </div>
  );
}

export default App;
