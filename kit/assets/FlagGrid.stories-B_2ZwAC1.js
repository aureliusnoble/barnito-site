import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./FlagGrid-BZSWXScB.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{expect:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,a={title:`Specimens/FlagGrid`,component:n},o={play:async({canvas:e})=>{for(let t of[`England`,`Scotland`,`Wales`,`Ireland`]){let n=e.getByRole(`img`,{name:t});await i(()=>r(n.naturalWidth,t).toBeGreaterThan(0))}}},s=[`Hosts`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    for (const name of ["England", "Scotland", "Wales", "Ireland"]) {
      const flag = canvas.getByRole<HTMLImageElement>("img", {
        name
      });
      await waitFor(() => expect(flag.naturalWidth, name).toBeGreaterThan(0));
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`The four Euro 2028 hosts, each a loaded flag named for its country.`,...o.parameters?.docs?.description}}}})))()}c();export{o as Hosts,s as __namedExportsOrder,a as default};