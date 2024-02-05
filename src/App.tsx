import { useState, useEffect } from 'react'
import { NAME, ACTIONS } from './keys';
import './App.css'

export default function App() {
  const [componentToRender, setComponentToRender] = useState<string>('');

  useEffect(() => {

    const renderComponent = (event: CustomEvent) => {
      setComponentToRender(event.detail.componentName);
    };

    document.addEventListener(NAME, renderComponent as EventListener);

    return () => {
      document.removeEventListener(NAME, renderComponent as EventListener);
    }
  }, [])

  return (
    <div>
      {componentToRender === ACTIONS.VIEW_POST && <ViewPost />}
      {!componentToRender && <div className='post'>Default view or component</div>}
    </div>
  );
}

function ViewPost() {
  return (
    <div className="post"></div>
  )
}
