import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./checks-C0Y16pbK.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{r(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Testing/Checks`,parameters:{layout:`fullscreen`}},s={render:()=>(0,i.jsx)(`div`,{role:`dialog`,"aria-label":`A sheet`,className:`fixed inset-x-0 bottom-0 bg-surface`,children:(0,i.jsx)(`div`,{className:`max-h-40 overflow-y-auto`,children:(0,i.jsx)(`p`,{style:{width:600},children:`A row wider than any phone`})})}),play:async({canvasElement:e})=>{await a(n(e)).rejects.toThrow(/A sheet/)}},c={render:()=>(0,i.jsx)(`div`,{role:`dialog`,"aria-label":`A toast`,"data-toast":``,className:`fixed bottom-4 left-4 bg-surface`,style:{width:600},children:`Too wide`}),play:async({canvasElement:e})=>{await a(n(e)).rejects.toThrow(/A toast/)}},l=[`WideRowInASheet`,`WideToast`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div role="dialog" aria-label="A sheet" className="fixed inset-x-0 bottom-0 bg-surface">
      <div className="max-h-40 overflow-y-auto">
        <p style={{
        width: 600
      }}>A row wider than any phone</p>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(noSidewaysScroll(canvasElement)).rejects.toThrow(/A sheet/);
  }
}`,...s.parameters?.docs?.source},description:{story:`A row wider than the phone inside a sheet's scrolling body: the page itself doesn't scroll, the sheet does.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div role="dialog" aria-label="A toast" data-toast="" className="fixed bottom-4 left-4 bg-surface" style={{
    width: 600
  }}>
      Too wide
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(noSidewaysScroll(canvasElement)).rejects.toThrow(/A toast/);
  }
}`,...c.parameters?.docs?.source},description:{story:`A toast wider than the phone: fixed, so it never widens the page.`,...c.parameters?.docs?.description}}}})))()}u();export{s as WideRowInASheet,c as WideToast,l as __namedExportsOrder,o as default};