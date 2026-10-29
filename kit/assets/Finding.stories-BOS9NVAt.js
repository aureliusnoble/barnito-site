import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-DCluhXK3.js";import{n,t as r}from"./SearchField-QHbAVyHR.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Collapsible-BqqskmwG.js";import{n as s,t as c}from"./FilterChips-C-3b4j4J.js";import{r as l,t as u}from"./Flag-BkUAiWy-.js";import{n as d,t as f}from"./ListRow-Bzs5DNj2.js";import{a as p,i as m,r as h}from"./checks-C0Y16pbK.js";function g(){let[e,t]=(0,y.useState)(``);return(0,b.jsx)(r,{label:`Find a scorer`,value:e,onValueChange:t})}function _(){let[e,t]=(0,y.useState)(null);return(0,b.jsx)(c,{label:`Team`,options:[{value:`gb-eng`,label:`England`,leading:(0,b.jsx)(u,{code:`gb-eng`,size:16,alt:``})},{value:`dk`,label:`Denmark`,leading:(0,b.jsx)(u,{code:`dk`,size:16,alt:``})}],value:e,onValueChange:t})}function v(){let[e,t]=(0,y.useState)(null);return(0,b.jsx)(c,{label:`Team`,options:D.map(([e,t])=>({value:e,label:t,leading:(0,b.jsx)(u,{code:e,size:16,alt:``})})),value:e,onValueChange:t})}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{y=t(),h(),a(),s(),l(),d(),n(),b=i(),{expect:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Rows, search and filters`},C={render:()=>(0,b.jsxs)(`div`,{className:`grid gap-1 rounded-card bg-surface p-2`,children:[(0,b.jsx)(f,{leading:(0,b.jsx)(u,{code:`ba`,alt:``}),title:`Bosnia and Herzegovina`,detail:`Group B`,trailing:(0,b.jsx)(`span`,{className:`font-num font-bold`,children:`+1,240 pts`}),onClick:()=>{}}),(0,b.jsx)(f,{leading:(0,b.jsx)(u,{code:`gb-eng`,alt:``}),title:`England`,trailing:(0,b.jsx)(`span`,{className:`font-num`,children:`16`})})]}),play:async({canvas:e,canvasElement:t})=>{let n=e.getByRole(`button`,{name:/Bosnia and Herzegovina/});await p(n);let r=e.getByText(`Bosnia and Herzegovina`);await x(getComputedStyle(r).textOverflow).toBe(`ellipsis`);let i=e.getByText(`+1,240 pts`);await x(i.getBoundingClientRect().height).toBeLessThan(30),await x(e.queryByRole(`button`,{name:/England/})).toBeNull(),await m(t)}},w={render:()=>(0,b.jsx)(o,{title:`Your stats`,children:(0,b.jsx)(`p`,{children:`Best call: Croatia at 21%`})}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Your stats`});await x(n).toHaveAttribute(`aria-expanded`,`false`),await p(n),await x(parseFloat(getComputedStyle(n).borderTopLeftRadius)).toBeGreaterThan(0),await t.click(n),await x(n).toHaveAttribute(`aria-expanded`,`true`),await x(e.getByText(`Best call: Croatia at 21%`)).toBeVisible()}},T={render:()=>(0,b.jsx)(g,{}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`searchbox`,{name:`Find a scorer`});await x(getComputedStyle(r).fontSize).toBe(`16px`),await x(e.queryByRole(`button`,{name:`Clear`})).toBeNull(),await n.type(r,`hoj`),await x(r).toHaveValue(`hoj`);let i=e.getByRole(`button`,{name:`Clear`});await p(i),await n.click(i),await x(r).toHaveValue(``),await x(r).toHaveFocus(),await m(t)}},E={render:()=>(0,b.jsx)(_,{}),play:async({canvas:e,canvasElement:t,userEvent:n})=>{let r=e.getByRole(`button`,{name:`Denmark`});await p(r),await n.click(r),await x(r).toHaveAttribute(`aria-pressed`,`true`),await x(e.getByRole(`button`,{name:`England`})).toHaveAttribute(`aria-pressed`,`false`),await n.click(r),await x(r).toHaveAttribute(`aria-pressed`,`false`),await m(t)}},D=[[`gb-wls`,`Wales`],[`ch`,`Switzerland`],[`ie`,`Republic of Ireland`],[`it`,`Italy`],[`nl`,`Netherlands`],[`pl`,`Poland`],[`gb-eng`,`England`],[`dk`,`Denmark`],[`es`,`Spain`],[`hr`,`Croatia`],[`gb-sct`,`Scotland`],[`at`,`Austria`],[`fr`,`France`],[`be`,`Belgium`],[`pt`,`Portugal`],[`tr`,`Türkiye`],[`de`,`Germany`],[`se`,`Sweden`],[`hu`,`Hungary`],[`no`,`Norway`],[`ua`,`Ukraine`],[`cz`,`Czechia`],[`sk`,`Slovakia`],[`ba`,`Bosnia and Herzegovina`]],O={render:()=>(0,b.jsx)(v,{}),play:async({canvas:e,canvasElement:t})=>{await x(e.getAllByRole(`button`)).toHaveLength(24),await m(t)}},k=[`Rows`,`Collapsed`,`Searching`,`TeamFilter`,`AllTeams`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-1 rounded-card bg-surface p-2">
      <ListRow leading={<Flag code="ba" alt="" />} title="Bosnia and Herzegovina" detail="Group B" trailing={<span className="font-num font-bold">+1,240 pts</span>} onClick={() => {}} />
      <ListRow leading={<Flag code="gb-eng" alt="" />} title="England" trailing={<span className="font-num">16</span>} />
    </div>,
  play: async ({
    canvas,
    canvasElement
  }) => {
    const row = canvas.getByRole("button", {
      name: /Bosnia and Herzegovina/
    });
    await thumbSized(row);
    const title = canvas.getByText("Bosnia and Herzegovina");
    await expect(getComputedStyle(title).textOverflow).toBe("ellipsis");
    const points = canvas.getByText("+1,240 pts");
    await expect(points.getBoundingClientRect().height).toBeLessThan(30);
    await expect(canvas.queryByRole("button", {
      name: /England/
    })).toBeNull();
    await noSidewaysScroll(canvasElement);
  }
}`,...C.parameters?.docs?.source},description:{story:`A long name truncates, the number never wraps, and a tappable row is a thumb tall.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible title="Your stats">
      <p>Best call: Croatia at 21%</p>
    </Collapsible>,
  play: async ({
    canvas,
    userEvent
  }) => {
    const trigger = canvas.getByRole("button", {
      name: "Your stats"
    });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await thumbSized(trigger);
    // Its focus ring follows a rounded edge, like every other control's.
    await expect(parseFloat(getComputedStyle(trigger).borderTopLeftRadius)).toBeGreaterThan(0);
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Best call: Croatia at 21%")).toBeVisible();
  }
}`,...w.parameters?.docs?.source},description:{story:`Stats start closed; a tap opens them.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Search />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const field = canvas.getByRole("searchbox", {
      name: "Find a scorer"
    });
    await expect(getComputedStyle(field).fontSize).toBe("16px");
    await expect(canvas.queryByRole("button", {
      name: "Clear"
    })).toBeNull();
    await userEvent.type(field, "hoj");
    await expect(field).toHaveValue("hoj");
    const clear = canvas.getByRole("button", {
      name: "Clear"
    });
    await thumbSized(clear);
    await userEvent.click(clear);
    await expect(field).toHaveValue("");
    // Focus goes back to the field, so the keyboard stays up and a screen reader keeps its place (final review).
    await expect(field).toHaveFocus();
    await noSidewaysScroll(canvasElement);
  }
}`,...T.parameters?.docs?.source},description:{story:`16 px, so iOS doesn't zoom; a Clear once something is typed.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Teams />,
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const denmark = canvas.getByRole("button", {
      name: "Denmark"
    });
    await thumbSized(denmark);
    await userEvent.click(denmark);
    await expect(denmark).toHaveAttribute("aria-pressed", "true");
    await expect(canvas.getByRole("button", {
      name: "England"
    })).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(denmark);
    await expect(denmark).toHaveAttribute("aria-pressed", "false");
    await noSidewaysScroll(canvasElement);
  }
}`,...E.parameters?.docs?.source},description:{story:`Tap a team to see only its players; tap it again to see everyone (the owner's note).`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AllTeamChips />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("button")).toHaveLength(24);
    await noSidewaysScroll(canvasElement);
  }
}`,...O.parameters?.docs?.source},description:{story:`All 24 teams of a Euro: the chips wrap or scroll inside their row, never the page.`,...O.parameters?.docs?.description}}}})))()}A();export{O as AllTeams,w as Collapsed,C as Rows,T as Searching,E as TeamFilter,k as __namedExportsOrder,S as default};