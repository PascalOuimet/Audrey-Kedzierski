import React from 'react';

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const pluginOptions = {
    head: true,
  };
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }
  const setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([
    <script
      async
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "4dm7qt8gc5");
      `,
      }}
    />,
  ]);
};

export default onRenderBody;
