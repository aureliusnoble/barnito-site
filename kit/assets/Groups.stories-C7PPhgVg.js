import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./GroupTable-BTnvKysS.js";import{F as o,P as s,t as c}from"./src-Ca_r4w3v.js";import{i as l,r as u}from"./checks-C0Y16pbK.js";import{i as d,t as f}from"./moments-Bzx1n_TW.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{c(),u(),f(),n(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Domain/Groups`,parameters:{layout:`padded`}},_=e=>`#/team/${e}`,v={loaders:[d(`night`)],render:(e,{loaded:t})=>{let n=o(t.s);return(0,p.jsxs)(`div`,{className:`grid gap-4`,children:[(0,p.jsx)(r,{legend:n.legend}),n.groups.map(e=>(0,p.jsx)(a,{group:e,teamHref:_,next:!0},e.id)),(0,p.jsx)(i,{thirds:n.thirds,teamHref:_})]})},play:async({canvas:e,canvasElement:t})=>{await m(e.getAllByRole(`table`)).toHaveLength(7);let n=e.getByRole(`table`,{name:`Group A`}),r=h(n).getAllByRole(`row`).slice(1);await m(r.map(e=>e.getAttribute(`data-tone`))).toEqual([`through`,`through`,`third`,`none`]),await m(r[0]).toHaveTextContent(/Spain.*2.*\+6.*6/),await m(h(n).getByRole(`link`,{name:`Spain`})).toHaveAttribute(`href`,`#/team/ES`),await m(e.getByRole(`region`,{name:`Group A`})).toHaveTextContent(`Winner plays the runner-up of Group C`),await m(e.getByText(`Through as it stands`)).toBeVisible();let i=h(e.getByRole(`table`,{name:`Third-placed teams`})).getAllByRole(`row`).slice(1);await m(i.filter(e=>e.getAttribute(`data-tone`)===`through`)).toHaveLength(4),await m(i[3].className).toContain(`border-dashed`),await l(t)}},y={loaders:[d(`night`)],render:(e,{loaded:t})=>(0,p.jsx)(a,{group:s(t.s,`CH`)}),play:async({canvas:e})=>{await m(e.getByRole(`row`,{name:/Switzerland/})).toHaveTextContent(`your champion`)}},b={loaders:[d(`night`)],render:(e,{loaded:t})=>(0,p.jsx)(a,{group:s(t.s,`CH`),compact:!0}),play:async({canvas:e,canvasElement:t})=>{await m(e.getAllByRole(`columnheader`).map(e=>e.textContent)).toEqual([`Place`,`Team`,`Pts`]),await m(e.getByText(`Bosnia & Herzegovina`)).toBeVisible(),await l(t)}},x=[`Night`,`YourMarks`,`Compact`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => {
    const v = groups((loaded as Loaded).s)!;
    return <div className="grid gap-4">
        <GroupsLegend legend={v.legend} />
        {v.groups.map(g => <GroupTable key={g.id} group={g} teamHref={teamHref} next />)}
        <ThirdsTable thirds={v.thirds!} teamHref={teamHref} />
      </div>;
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("table")).toHaveLength(7);
    const a = canvas.getByRole("table", {
      name: "Group A"
    });
    const rows = within(a).getAllByRole("row").slice(1);
    await expect(rows.map(r => r.getAttribute("data-tone"))).toEqual(["through", "through", "third", "none"]);
    await expect(rows[0]).toHaveTextContent(/Spain.*2.*\\+6.*6/);
    await expect(within(a).getByRole("link", {
      name: "Spain"
    })).toHaveAttribute("href", "#/team/ES");
    await expect(canvas.getByRole("region", {
      name: "Group A"
    })).toHaveTextContent("Winner plays the runner-up of Group C");
    await expect(canvas.getByText("Through as it stands")).toBeVisible();
    const thirds = within(canvas.getByRole("table", {
      name: "Third-placed teams"
    })).getAllByRole("row").slice(1);
    await expect(thirds.filter(r => r.getAttribute("data-tone") === "through")).toHaveLength(4);
    await expect(thirds[3]!.className).toContain("border-dashed");
    await noSidewaysScroll(canvasElement);
  }
}`,...v.parameters?.docs?.source},description:{story:`Matches › Groups on the night of 15 Jun (the owner's 28 Oct mockup): the six groups, then the third-placed teams.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <GroupTable group={groupTableOf((loaded as Loaded).s, "CH")!} />,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("row", {
      name: /Switzerland/
    })).toHaveTextContent("your champion");
  }
}`,...y.parameters?.docs?.source},description:{story:`Your stakes marked: your champion's trophy.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  loaders: [withMoment("night")],
  render: (_, {
    loaded
  }) => <GroupTable group={groupTableOf((loaded as Loaded).s, "CH")!} compact />,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getAllByRole("columnheader").map(h => h.textContent)).toEqual(["Place", "Team", "Pts"]);
    await expect(canvas.getByText("Bosnia & Herzegovina")).toBeVisible();
    await noSidewaysScroll(canvasElement);
  }
}`,...b.parameters?.docs?.source},description:{story:`A team's page: rank, team and points only.`,...b.parameters?.docs?.description}}}})))()}S();export{b as Compact,v as Night,y as YourMarks,x as __namedExportsOrder,g as default};