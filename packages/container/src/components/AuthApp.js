import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import {useHistory} from 'react-router-dom';


export default () => {
  const ref = useRef(null);
  const history = useHistory();

  // useEffect is called on any change inside the component. 
  useEffect(() => {
    
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({pathname: nextPathname}) => { // location.pathname
        const {pathname} = history.location;
        if(pathname !== nextPathname){ // avoid 
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []); // second param, ensures updating it only once the component is created...

  return <div ref={ref} />;
};
