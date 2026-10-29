import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Chillies-zFYnfRRg.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Domain/Chillies`,parameters:{layout:`padded`}},s={render:()=>(0,i.jsxs)(`div`,{className:`grid gap-2`,children:[[0,1,2,3,4,5].map(e=>(0,i.jsx)(`span`,{"data-row":!0,children:(0,i.jsx)(r,{chillies:e,provisional:!1})},e)),(0,i.jsx)(`span`,{"data-row":!0,children:(0,i.jsx)(r,{chillies:3,provisional:!0})})]}),play:async({canvas:e,canvasElement:t})=>{let n=[...t.querySelectorAll(`[data-row]`)];await a(n[0].childElementCount).toBe(0),await a(e.getByRole(`img`,{name:`1 chilli`})).toBeVisible(),await a(e.getByRole(`img`,{name:`5 chillies`})).toBeVisible();let r=e.getByRole(`img`,{name:`3 chillies, building up`});await a(r).toHaveAttribute(`data-provisional`)}},c=[`EveryHeat`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-2">
      {[0, 1, 2, 3, 4, 5].map(n => <span key={n} data-row>
          <Chillies chillies={n} provisional={false} />
        </span>)}
      <span data-row>
        <Chillies chillies={3} provisional />
      </span>
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const rows = [...canvasElement.querySelectorAll("[data-row]")];
    await expect(rows[0]!.childElementCount).toBe(0);
    await expect(canvas.getByRole("img", {
      name: "1 chilli"
    })).toBeVisible();
    await expect(canvas.getByRole("img", {
      name: "5 chillies"
    })).toBeVisible();
    const building = canvas.getByRole("img", {
      name: "3 chillies, building up"
    });
    await expect(building).toHaveAttribute("data-provisional");
  }
}`,...s.parameters?.docs?.source},description:{story:`Spicy, 1 to 5 chillies (D21); provisional heat before the reveal at half strength, said in words (D44).`,...s.parameters?.docs?.description}}}})))()}l();export{s as EveryHeat,c as __namedExportsOrder,o as default};